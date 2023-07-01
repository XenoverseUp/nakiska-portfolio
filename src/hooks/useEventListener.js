import { useRef, useEffect } from 'react'

const useEventListener = (
  eventName,
  handler,
  active = true,
  element = window
) => {
  const savedHandler = useRef()

  useEffect(() => {
    savedHandler.current = handler
  }, [handler])
  useEffect(() => {
    const isSupported = element && element.addEventListener
    if (!isSupported) return

    const eventListener = (event) => savedHandler.current(event)

    if (active) element.addEventListener(eventName, eventListener)

    return () => {
      element.removeEventListener(eventName, eventListener)
    }
  }, [eventName, element])
}

export default useEventListener
