"use server";

import {
  emailLogoAttachment,
  leadConfirmationEmail,
  leadNotificationEmail,
  newsletterNotificationEmail,
  newsletterWelcomeEmail,
  type Lead,
} from "@/lib/email-templates";
import { siteConfig } from "@/lib/site";

export type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<string, string>>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+()\-\s\d]{7,20}$/;

function field(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

type Email = {
  to: string[];
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
};

function teamInbox() {
  const recipients = (process.env.CONTACT_TO_EMAIL ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  if (recipients.length === 0) {
    console.error("[email] CONTACT_TO_EMAIL is not set");
  }
  return recipients;
}

async function sendEmail(email: Email) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.info(
      `[email] RESEND_API_KEY not set — would send "${email.subject}" to`,
      email.to,
    );
    return true;
  }
  if (email.to.length === 0) return false;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from:
          process.env.CONTACT_FROM_EMAIL ||
          "IIM Marketers <onboarding@resend.dev>",
        to: email.to,
        reply_to: email.replyTo,
        subject: email.subject,
        html: email.html,
        text: email.text,
        attachments: [await emailLogoAttachment()],
      }),
    });
    if (!res.ok) {
      console.error(
        `[email] "${email.subject}" failed`,
        res.status,
        await res.text(),
      );
    }
    return res.ok;
  } catch (error) {
    console.error(`[email] "${email.subject}" failed`, error);
    return false;
  }
}

export async function submitLead(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  // Honeypot — real users never see or fill this field.
  if (field(formData, "company_website"))
    return { status: "success", message: "Thanks!" };

  const name = field(formData, "name");
  const email = field(formData, "email");
  const phone = field(formData, "phone");
  const subject = field(formData, "subject");
  const message = field(formData, "message");
  const source = field(formData, "source") || "Website";

  const errors: FormState["errors"] = {};
  if (name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(email))
    errors.email = "Please enter a valid email address.";
  if (!PHONE_RE.test(phone))
    errors.phone = "Please enter a valid phone number.";
  if (!subject) errors.subject = "Please enter a subject.";
  else if (subject.length > 200) errors.subject = "Subject is too long.";
  if (!message) errors.message = "Please enter a message.";
  else if (message.length > 5000) errors.message = "Message is too long.";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      errors,
    };
  }

  const lead: Lead = { name, email, phone, subject, message, source };

  const ok = await sendEmail({
    to: teamInbox(),
    replyTo: email,
    ...leadNotificationEmail(lead),
  });

  if (ok) {
    await sendEmail({
      to: [email],
      replyTo: siteConfig.email,
      ...leadConfirmationEmail(lead),
    });
  }

  if (!ok) {
    return {
      status: "error",
      message:
        "We couldn’t send your message right now. Please call or email us directly.",
    };
  }

  return {
    status: "success",
    message: "Thank you! Our team will get back to you within 24 hours.",
  };
}

export async function subscribeNewsletter(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  if (field(formData, "company_website"))
    return { status: "success", message: "Subscribed!" };

  const email = field(formData, "email");
  const agreed = formData.get("agree") === "on";

  if (!EMAIL_RE.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }
  if (!agreed) {
    return {
      status: "error",
      message: "Please accept the privacy policy to subscribe.",
    };
  }

  const ok = await sendEmail({
    to: teamInbox(),
    replyTo: email,
    ...newsletterNotificationEmail(email),
  });

  if (ok) {
    await sendEmail({
      to: [email],
      replyTo: siteConfig.email,
      ...newsletterWelcomeEmail(),
    });
  }

  return ok
    ? {
        status: "success",
        message:
          "Thank you for subscribing! A welcome gift is on its way to your inbox.",
      }
    : {
        status: "error",
        message: "Something went wrong. Please try again later.",
      };
}
