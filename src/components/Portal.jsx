import { useState, useLayoutEffect } from 'react'
import { createPortal } from 'react-dom'
import createPortalWrapper from 'utils/createPortalWrapper'

const Portal = ({ children, id }) => {
  const [wrapperElement, setWrapperElement] = useState(null)

  useLayoutEffect(() => {
    let element = document.getElementById(id)
    let systemCreated = false

    if (!element) {
      systemCreated = true
      element = createPortalWrapper(id)
    }
    setWrapperElement(element)

    return () => {
      if (systemCreated && element.parentNode) {
        element.parentNode.removeChild(element)
      }
    }
  }, [id])

  if (wrapperElement === null) return null

  return createPortal(children, wrapperElement)
}

export default Portal
