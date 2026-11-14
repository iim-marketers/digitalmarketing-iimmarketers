"use client";

import Link from "next/link";
import { useActionState, useId } from "react";
import { LoaderCircle, Send } from "lucide-react";

import { subscribeNewsletter, type FormState } from "@/app/actions";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

const initial: FormState = { status: "idle" };

export function NewsletterForm() {
  const [state, action, pending] = useActionState(subscribeNewsletter, initial);
  const id = useId();

  if (state.status === "success") {
    return (
      <p
        role="status"
        className="rounded-xl bg-white/10 p-4 text-sm text-white"
      >
        {state.message}
      </p>
    );
  }

  return (
    <form action={action} className="flex flex-col gap-3" noValidate>
      <label htmlFor={`${id}-email`} className="sr-only">
        Email address
      </label>
      <div className="flex rounded-full bg-white/10 p-1 ring-1 ring-white/15 focus-within:ring-amber">
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Enter your email"
          className="min-w-0 flex-1 bg-transparent px-4 text-sm text-white placeholder:text-white/65 focus:outline-none"
        />
        <button
          type="submit"
          disabled={pending}
          aria-label="Subscribe"
          className="grid size-10 shrink-0 place-items-center rounded-full bg-amber text-ink transition hover:brightness-105 disabled:opacity-60"
        >
          {pending ? (
            <LoaderCircle className="size-4 animate-spin" />
          ) : (
            <Send className="size-4" />
          )}
        </button>
      </div>
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />
      <div className="flex items-start mt-1 ml-2 gap-1.5 text-xs text-white/80">
        <Checkbox
          id={`${id}-agree`}
          name="agree"
          className=" border-white/30 data-[state=checked]:border-amber data-[state=checked]:bg-amber data-[state=checked]:text-ink"
        />
        <label htmlFor={`${id}-agree`}>
          I agree to all{" "}
          <Link
            href="/privacy-policy"
            className="underline underline-offset-2 hover:text-white"
          >
            terms and policies
          </Link>{" "}
          of the company
        </label>
      </div>
      {state.status === "error" ? (
        <p role="alert" className={cn("text-xs text-amber")}>
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
