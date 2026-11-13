"use server"

export type FormState = {
  status: "idle" | "success" | "error"
  message?: string
  errors?: Partial<Record<string, string>>
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^[+()\-\s\d]{7,20}$/

function field(formData: FormData, key: string) {
  const value = formData.get(key)
  return typeof value === "string" ? value.trim() : ""
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`)
}

/**
 * Delivers a submission by email when RESEND_API_KEY and CONTACT_TO_EMAIL are configured.
 * Without them (e.g. local development) the submission is logged on the server instead.
 */
async function deliver(subject: string, data: Record<string, string>) {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  if (!apiKey || !to) {
    console.info(`[form] ${subject}`, data)
    return true
  }

  const rows = Object.entries(data)
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:4px 12px 4px 0;color:#625f7a">${escapeHtml(k)}</td><td>${escapeHtml(v)}</td></tr>`
    )
    .join("")

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? "IIM Marketers <onboarding@resend.dev>",
      to: to.split(",").map((s) => s.trim()),
      reply_to: data.Email || undefined,
      subject,
      html: `<h2>${escapeHtml(subject)}</h2><table>${rows}</table>`,
    }),
  })
  if (!res.ok) console.error("[form] delivery failed", res.status, await res.text())
  return res.ok
}

export async function submitLead(_prev: FormState, formData: FormData): Promise<FormState> {
  // Honeypot — real users never see or fill this field.
  if (field(formData, "company_website")) return { status: "success", message: "Thanks!" }

  const name = field(formData, "name")
  const email = field(formData, "email")
  const phone = field(formData, "phone")
  const subject = field(formData, "subject")
  const message = field(formData, "message")
  const source = field(formData, "source") || "Website"

  const errors: FormState["errors"] = {}
  if (name.length < 2) errors.name = "Please enter your name."
  if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address."
  if (!PHONE_RE.test(phone)) errors.phone = "Please enter a valid phone number."
  if (message.length > 5000) errors.message = "Message is too long."

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please fix the highlighted fields.", errors }
  }

  const ok = await deliver(`New enquiry (${source})${subject ? `: ${subject}` : ""}`, {
    Name: name,
    Email: email,
    Phone: phone,
    Subject: subject,
    Message: message,
    Source: source,
  })

  if (!ok) {
    return {
      status: "error",
      message: "We couldn’t send your message right now. Please call or email us directly.",
    }
  }

  return {
    status: "success",
    message: "Thank you! Our team will get back to you within 24 hours.",
  }
}

export async function subscribeNewsletter(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  if (field(formData, "company_website")) return { status: "success", message: "Subscribed!" }

  const email = field(formData, "email")
  const agreed = formData.get("agree") === "on"

  if (!EMAIL_RE.test(email)) {
    return { status: "error", message: "Please enter a valid email address." }
  }
  if (!agreed) {
    return { status: "error", message: "Please accept the privacy policy to subscribe." }
  }

  const ok = await deliver("New newsletter subscriber", { Email: email })
  return ok
    ? { status: "success", message: "You’re subscribed — welcome aboard!" }
    : { status: "error", message: "Something went wrong. Please try again later." }
}
