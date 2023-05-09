import {
  useEffect,
  useRef,
  forwardRef,
  cloneElement,
  useState,
  useCallback,
} from 'react'
import useAnimationFrame from 'hooks/useAnimationFrame'
import useEventListener from 'hooks/useEventListener'
import calculateDistance from 'utils/calculateDistance'
import lerp from 'utils/lerp'
import { useAtomValue } from 'jotai'
import { mouseLocation } from 'shared/atoms'

const Magnetic = ({ children }) => {
  const childRef = useRef(null)
  const mouse = useAtomValue(mouseLocation)

  const mouseRef = useRef(mouse)

  useEffect(() => {
    mouseRef.current = mouse
  }, [mouse])

  const properties = useRef({
    trigger: 200,
    interpolationFactor: 0.8,
  })

  const boundingRect = useRef({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  })

  const lerpingData = useRef({
    x: { current: 0, target: 0 },
    y: { current: 0, target: 0 },
  })

  useEffect(() => {
    boundingRect.current = childRef.current.getBoundingClientRect()
  }, [])

  const resize = useCallback(() => {
    boundingRect.current = childRef.current.getBoundingClientRect()
  }, [])

  const render = () => {
    const distance = calculateDistance(
      mouseRef.current.x,
      mouseRef.current.y,
      boundingRect.current.left + boundingRect.current.width / 2,
      boundingRect.current.top + boundingRect.current.height / 2
    )

    let targetHolder = { x: 0, y: 0 }

    if (distance < properties.current.trigger) {
      if (!childRef.current.classList.contains('focus'))
        childRef.current.classList.add('focus')

      targetHolder.x =
        mouseRef.current.x -
        (boundingRect.current.left + boundingRect.current.width / 2)
      targetHolder.y =
        mouseRef.current.y -
        (boundingRect.current.top + boundingRect.current.height / 2)
    } else {
      if (childRef.current.classList.contains('focus'))
        childRef.current.classList.remove('focus')
    }

    lerpingData.current.x = targetHolder.x
    lerpingData.current.y = targetHolder.y

    lerpingData.current.x.current = lerp(
      lerpingData.current.x.current,
      lerpingData.current.x.target,
      properties.current.interpolationFactor
    )

    lerpingData.current.y.current = lerp(
      lerpingData.current.y.current,
      lerpingData.current.y.target,
      properties.current.interpolationFactor
    )

    childRef.current.style.transform = `translate(${lerpingData.current.x.current}px, ${lerpingData.current.y.current}px)`
  }

  useAnimationFrame(render)
  useEventListener('resize', resize)

  const Child = forwardRef((props, ref) =>
    cloneElement(children, {
      ...props,
      ref,
    })
  )
  return <Child ref={childRef} />
}

export default Magnetic
