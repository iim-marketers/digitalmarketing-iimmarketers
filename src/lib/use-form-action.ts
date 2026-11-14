"use client"

import { startTransition, useActionState, useLayoutEffect, useRef } from "react"

import type { FormState } from "@/app/actions"

const RESET = "reset"

/**
 * `useActionState` for a form server action that clears its result (errors,
 * success message) when the page is hidden. With `cacheComponents`, Next.js
 * keeps visited pages mounted inside React `<Activity>`, so without this the
 * last result would still show after navigating away and back.
 */
export function useFormAction(
  action: (prev: FormState, data: FormData) => Promise<FormState>,
  initial: FormState
) {
  const [state, dispatch, pending] = useActionState(
    (prev: FormState, payload: FormData | typeof RESET) =>
      payload === RESET ? initial : action(prev, payload),
    initial
  )

  const hasResult = useRef(false)
  useLayoutEffect(() => {
    hasResult.current = state.status !== "idle"
  }, [state])

  useLayoutEffect(
    () => () => {
      if (!hasResult.current) return
      hasResult.current = false
      startTransition(() => dispatch(RESET))
    },
    [dispatch]
  )

  return [state, dispatch, pending] as const
}
