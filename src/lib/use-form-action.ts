"use client"

import {
  startTransition,
  useActionState,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  type FormEvent,
} from "react"

import type { FormState } from "@/app/actions"

const RESET = "reset"

const SUCCESS_DISPLAY_MS = 5000

export function useFormAction(
  action: (prev: FormState, data: FormData) => Promise<FormState>,
  initial: FormState
) {
  const [state, dispatch, pending] = useActionState(
    (prev: FormState, payload: FormData | typeof RESET) =>
      payload === RESET ? initial : action(prev, payload),
    initial
  )

  const formEl = useRef<HTMLFormElement | null>(null)
  const ref = useCallback((el: HTMLFormElement | null) => {
    if (el) formEl.current = el
  }, [])

  const onSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      // Not <form action>: React resets the form after an action, wiping fields on validation errors.
      event.preventDefault()
      if (pending) return
      const data = new FormData(event.currentTarget)
      startTransition(() => dispatch(data))
    },
    [dispatch, pending]
  )

  useEffect(() => {
    if (state.status !== "success") return
    const timer = setTimeout(
      () => startTransition(() => dispatch(RESET)),
      SUCCESS_DISPLAY_MS
    )
    return () => clearTimeout(timer)
  }, [state, dispatch])

  const hasResult = useRef(false)
  useLayoutEffect(() => {
    hasResult.current = state.status !== "idle"
  }, [state])

  // cacheComponents keeps visited pages mounted in <Activity>; clear the form when the page is hidden.
  useLayoutEffect(
    () => () => {
      formEl.current?.reset()
      if (!hasResult.current) return
      hasResult.current = false
      startTransition(() => dispatch(RESET))
    },
    [dispatch]
  )

  return { state, pending, formProps: { ref, onSubmit } }
}
