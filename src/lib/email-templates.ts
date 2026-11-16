import { readFile } from "node:fs/promises"
import path from "node:path"

import { siteConfig } from "@/lib/site"

export type Lead = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  source: string
}

export type EmailContent = { subject: string; html: string; text: string }

const C = {
  brand: "#5b34e8",
  brandDeep: "#4424cc",
  brandSoft: "#eeeafd",
  ink: "#231d45",
  muted: "#625f7a",
  border: "#e7e4ee",
  paper: "#fbfaf7",
  paperDeep: "#f3f1ec",
  white: "#ffffff",
}

const FONT = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif"

// PNG export of the SVG in components/site/logo.tsx — re-export it if the logo changes.
const LOGO = {
  cid: "iim-marketers-logo",
  file: "public/images/brand/logo-email.png",
  width: 80,
  height: 76,
}

export type EmailAttachment = {
  filename: string
  content_id: string
  content_type: string
} & ({ content: string } | { path: string })

let logoAttachment: Promise<EmailAttachment> | undefined

export function emailLogoAttachment() {
  const base = { filename: "iim-marketers-logo.png", content_id: LOGO.cid, content_type: "image/png" }
  logoAttachment ??= readFile(path.join(process.cwd(), LOGO.file))
    .then((buf): EmailAttachment => ({ ...base, content: buf.toString("base64") }))
    .catch((error): EmailAttachment => {
      console.warn("[email] couldn't read logo from disk, linking the public URL", error)
      const url = `${siteConfig.url.replace(/\/$/, "")}/${LOGO.file.replace(/^public\//, "")}`
      return { ...base, path: url }
    })
  return logoAttachment
}

const siteHost =siteConfig.url.replace(/^https?:\/\//, "").replace(/\/$/, "")

function esc(value: string) {
  return value.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`)
}

function multiline(value: string) {
  return esc(value).replace(/\r?\n/g, "<br>")
}

function firstName(name: string) {
  return name.split(/\s+/)[0] || name
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  }).format(date) + " IST"
}

function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`
}

function layout({
  preheader,
  eyebrow,
  body,
  footer,
}: {
  preheader: string
  eyebrow: string
  body: string
  footer: string
}) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<title>${esc(siteConfig.name)}</title>
</head>
<body style="margin:0;padding:0;background-color:${C.paperDeep};-webkit-text-size-adjust:100%;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${esc(preheader)}&#8199;&#847;&#8199;&#847;&#8199;&#847;&#8199;&#847;&#8199;&#847;&#8199;&#847;</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${C.paperDeep}" style="background-color:${C.paperDeep};">
<tr><td align="center" style="padding:32px 16px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;">
    <tr><td align="center" style="padding:0 0 20px;text-align:center;">
      <a href="${esc(siteConfig.url)}" style="display:inline-block;text-decoration:none;">
        <img src="cid:${LOGO.cid}" width="${LOGO.width}" height="${LOGO.height}" alt="${esc(siteConfig.name)}" style="display:block;margin:0 auto;width:${LOGO.width}px;height:${LOGO.height}px;border:0;outline:none;text-decoration:none;font-family:${FONT};font-size:14px;font-weight:700;color:${C.ink};">
      </a>
    </td></tr>
    <tr><td bgcolor="${C.white}" style="background-color:${C.white};border-radius:16px;overflow:hidden;border:1px solid ${C.border};">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr><td bgcolor="${C.brand}" style="background-color:${C.brand};height:6px;line-height:6px;font-size:0;">&nbsp;</td></tr>
        <tr><td style="padding:32px 32px 8px;font-family:${FONT};">
          <span style="display:inline-block;padding:4px 10px;border-radius:999px;background-color:${C.brandSoft};color:${C.brandDeep};font-size:12px;font-weight:600;letter-spacing:0.3px;text-transform:uppercase;">${esc(eyebrow)}</span>
        </td></tr>
        <tr><td style="padding:8px 32px 32px;font-family:${FONT};color:${C.ink};font-size:15px;line-height:1.6;">
          ${body}
        </td></tr>
      </table>
    </td></tr>
    <tr><td style="padding:20px 8px 0;font-family:${FONT};font-size:12px;line-height:1.6;color:${C.muted};text-align:center;">
      ${footer}
    </td></tr>
  </table>
</td></tr>
</table>
</body>
</html>`
}

function heading(text: string) {
  return `<h1 style="margin:12px 0 8px;font-family:${FONT};font-size:24px;line-height:1.3;font-weight:700;color:${C.ink};">${text}</h1>`
}

function paragraph(html: string, style = "") {
  return `<p style="margin:0 0 16px;font-family:${FONT};font-size:15px;line-height:1.6;color:${C.ink};${style}">${html}</p>`
}

function sectionLabel(text: string) {
  return `<p style="margin:24px 0 8px;font-family:${FONT};font-size:12px;font-weight:600;letter-spacing:0.4px;text-transform:uppercase;color:${C.muted};">${esc(text)}</p>`
}

function detailsTable(rows: [label: string, valueHtml: string][]) {
  const body = rows
    .map(
      ([label, value], i) => `<tr>
  <td valign="top" style="padding:12px 16px;width:96px;font-family:${FONT};font-size:13px;color:${C.muted};${i ? `border-top:1px solid ${C.border};` : ""}">${esc(label)}</td>
  <td valign="top" style="padding:12px 16px;font-family:${FONT};font-size:14px;color:${C.ink};font-weight:500;word-break:break-word;${i ? `border-top:1px solid ${C.border};` : ""}">${value}</td>
</tr>`
    )
    .join("")
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid ${C.border};border-radius:12px;border-collapse:separate;">${body}</table>`
}

function messageBlock(message: string) {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
<tr><td bgcolor="${C.paper}" style="background-color:${C.paper};border-left:3px solid ${C.brand};border-radius:4px 12px 12px 4px;padding:16px 20px;font-family:${FONT};font-size:15px;line-height:1.65;color:${C.ink};word-break:break-word;">${multiline(message)}</td></tr>
</table>`
}

function button(href: string, label: string, variant: "primary" | "secondary" = "primary") {
  const primary = variant === "primary"
  return `<a href="${esc(href)}" style="display:inline-block;padding:12px 22px;border-radius:999px;font-family:${FONT};font-size:14px;font-weight:600;text-decoration:none;${
    primary
      ? `background-color:${C.brand};color:${C.white};border:1px solid ${C.brand};`
      : `background-color:${C.white};color:${C.ink};border:1px solid ${C.border};`
  }">${esc(label)}</a>`
}

function buttons(...items: string[]) {
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:28px;"><tr>${items
    .map((b, i) => `<td style="${i ? "padding-left:8px;" : ""}">${b}</td>`)
    .join("")}</tr></table>`
}

function link(href: string, label: string) {
  return `<a href="${esc(href)}" style="color:${C.brand};text-decoration:none;">${esc(label)}</a>`
}

export function leadNotificationEmail(lead: Lead, receivedAt = new Date()): EmailContent {
  const when = formatDate(receivedAt)
  const replySubject = `Re: ${lead.subject}`
  const replyHref = `mailto:${lead.email}?subject=${encodeURIComponent(replySubject)}`

  const html = layout({
    preheader: `${lead.name}: ${lead.message.slice(0, 120)}`,
    eyebrow: "New website enquiry",
    body: [
      heading(`${esc(lead.name)} sent a message`),
      paragraph(`Via <strong>${esc(lead.source)}</strong> · ${esc(when)}`, `color:${C.muted};font-size:14px;`),
      sectionLabel("Contact details"),
      detailsTable([
        ["Name", esc(lead.name)],
        ["Email", link(`mailto:${lead.email}`, lead.email)],
        ["Phone", link(telHref(lead.phone), lead.phone)],
        ["Subject", esc(lead.subject)],
      ]),
      sectionLabel("Message"),
      messageBlock(lead.message),
      buttons(
        button(replyHref, `Reply to ${firstName(lead.name)}`),
        button(telHref(lead.phone), "Call", "secondary")
      ),
    ].join("\n"),
    footer: `Replying to this email goes straight to ${esc(lead.email)}.<br>Sent from the contact form on ${link(siteConfig.url, siteHost)}.`,
  })

  const text = [
    `New website enquiry — ${lead.source}`,
    when,
    "",
    `Name:    ${lead.name}`,
    `Email:   ${lead.email}`,
    `Phone:   ${lead.phone}`,
    `Subject: ${lead.subject}`,
    "",
    "Message:",
    lead.message,
    "",
    "---",
    `Reply to this email to respond to ${lead.name}.`,
  ].join("\n")

  return {
    subject: `New enquiry: ${lead.subject} — ${lead.name}`,
    html,
    text,
  }
}

export function leadConfirmationEmail(lead: Lead): EmailContent {
  const name = firstName(lead.name)
  const { primary, secondary } = siteConfig.phones

  const html = layout({
    preheader: "Thanks for getting in touch — we’ll get back to you within 24 hours.",
    eyebrow: "Message received",
    body: [
      heading(`Thanks for reaching out, ${esc(name)}!`),
      paragraph(
        `We’ve received your message and a member of our team will get back to you <strong>within 24 hours</strong>. In the meantime, here’s a copy of what you sent us.`
      ),
      sectionLabel("Your enquiry"),
      detailsTable([
        ["Subject", esc(lead.subject)],
        ["Phone", esc(lead.phone)],
      ]),
      `<div style="height:12px;line-height:12px;font-size:0;">&nbsp;</div>`,
      messageBlock(lead.message),
      sectionLabel("Need to talk sooner?"),
      paragraph(
        `Call us on ${link(primary.href, primary.label)} or ${link(secondary.href, secondary.label)}, or simply reply to this email.`,
        "margin-bottom:0;"
      ),
      buttons(button(siteConfig.url, "Visit our website")),
      paragraph(`Warm regards,<br><strong>Team ${esc(siteConfig.name)}</strong>`, "margin:28px 0 0;"),
    ].join("\n"),
    footer: `${esc(siteConfig.name)} · ${link(`mailto:${siteConfig.email}`, siteConfig.email)} · ${link(siteConfig.url, siteHost)}<br>You’re receiving this because you submitted the contact form on our website. If that wasn’t you, you can safely ignore this email.`,
  })

  const text = [
    `Hi ${name},`,
    "",
    "Thanks for reaching out to IIM Marketers! We’ve received your message and a member of our team will get back to you within 24 hours.",
    "",
    "Here’s a copy of what you sent us:",
    "",
    `Subject: ${lead.subject}`,
    `Phone:   ${lead.phone}`,
    "",
    lead.message,
    "",
    `Need to talk sooner? Call ${primary.label} or ${secondary.label}, or just reply to this email.`,
    "",
    "Warm regards,",
    `Team ${siteConfig.name}`,
    siteConfig.url,
  ].join("\n")

  return {
    subject: `We’ve received your message — ${siteConfig.name}`,
    html,
    text,
  }
}

export function newsletterNotificationEmail(email: string, receivedAt = new Date()): EmailContent {
  const when = formatDate(receivedAt)
  const html = layout({
    preheader: `${email} subscribed to the newsletter`,
    eyebrow: "Newsletter",
    body: [
      heading("New newsletter subscriber"),
      paragraph(esc(when), `color:${C.muted};font-size:14px;`),
      detailsTable([["Email", link(`mailto:${email}`, email)]]),
    ].join("\n"),
    footer: `Sent from the newsletter form on ${link(siteConfig.url, siteHost)}.`,
  })
  return {
    subject: "New newsletter subscriber",
    html,
    text: `New newsletter subscriber\n${when}\n\nEmail: ${email}`,
  }
}
