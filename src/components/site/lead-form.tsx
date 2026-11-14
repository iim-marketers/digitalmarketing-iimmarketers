"use client"

import { useActionState, useEffect, useId } from "react"
import { CircleCheck, LoaderCircle, Send } from "lucide-react"
import { toast } from "sonner"

import { submitLead, type FormState } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

const initial: FormState = { status: "idle" }

type Props = {
  /** Identifies which form the lead came from (shown in the notification email). */
  source: string
  variant?: "compact" | "full"
  submitLabel?: string
  className?: string
}

export function LeadForm({
  source,
  variant = "full",
  submitLabel,
  className,
}: Props) {
  const [state, action, pending] = useActionState(submitLead, initial)
  const id = useId()

  useEffect(() => {
    // Field-level problems are shown inline; delivery failures get a toast.
    if (state.status === "error" && state.message && !state.errors) toast.error(state.message)
  }, [state])

  const err = state.errors ?? {}

  if (state.status === "success") {
    return (
      <div
        role="status"
        className={cn(
          "flex flex-col items-center gap-3 rounded-2xl bg-paper-deep px-6 py-10 text-center",
          className
        )}
      >
        <CircleCheck className="size-10 text-brand" aria-hidden />
        <p className="font-heading text-xl font-semibold text-ink">Request received</p>
        <p className="max-w-xs text-sm text-muted-foreground">{state.message}</p>
      </div>
    )
  }

  const compact = variant === "compact"
  const inputCls = cn(
    compact ? "h-11" : "h-12",
    "rounded-xl border-input bg-white px-4 text-[0.95rem] shadow-none placeholder:text-ink/35 focus-visible:border-ink/40 focus-visible:ring-4 focus-visible:ring-brand/10"
  )

  return (
    <form
      action={action}
      noValidate
      className={cn("flex flex-col", compact ? "gap-3.5" : "gap-4", className)}
    >
      <input type="hidden" name="source" value={source} />
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <div className={cn("grid sm:grid-cols-2", compact ? "gap-3.5" : "gap-4")}>
        <Field id={`${id}-name`} label="Your name" error={err.name}>
          <Input
            id={`${id}-name`}
            name="name"
            autoComplete="name"
            placeholder="Your Name"
            required
            aria-invalid={!!err.name}
            className={inputCls}
          />
        </Field>
        <Field id={`${id}-email`} label="Email address" error={err.email}>
          <Input
            id={`${id}-email`}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Email Address"
            required
            aria-invalid={!!err.email}
            className={inputCls}
          />
        </Field>
        <Field id={`${id}-phone`} label="Phone number" error={err.phone}>
          <Input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Phone Number"
            required
            aria-invalid={!!err.phone}
            className={inputCls}
          />
        </Field>
        <Field id={`${id}-subject`} label="Subject">
          <Input
            id={`${id}-subject`}
            name="subject"
            placeholder="Subject"
            className={inputCls}
          />
        </Field>
      </div>

      <Field id={`${id}-message`} label="Message" error={err.message} optional>
        <Textarea
          id={`${id}-message`}
          name="message"
          rows={compact ? 2 : 5}
          placeholder="Write a Message"
          className={cn(inputCls, "h-auto py-3", compact ? "min-h-20" : "min-h-24")}
        />
      </Field>

      {state.status === "error" && state.errors ? (
        <p role="alert" className="text-sm text-destructive">
          {state.message}
        </p>
      ) : null}

      <Button
        type="submit"
        disabled={pending}
        className="mt-1 h-12 rounded-full bg-brand text-base font-medium text-white hover:bg-brand-deep"
      >
        {pending ? (
          <LoaderCircle className="animate-spin" data-icon="inline-start" />
        ) : (
          <Send data-icon="inline-start" />
        )}
        {pending ? "Sending…" : (submitLabel ?? "Send a message")}
      </Button>
    </form>
  )
}

function Field({
  id,
  label,
  error,
  optional,
  className,
  children,
}: {
  id: string
  label: string
  error?: string
  optional?: boolean
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn("flex min-w-0 flex-col gap-1.5", className)}>
      <Label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
        {optional ? <span className="font-normal text-muted-foreground"> (optional)</span> : null}
      </Label>
      {children}
      {error ? <p className="text-xs text-destructive">{error}</p> : null}
    </div>
  )
}
