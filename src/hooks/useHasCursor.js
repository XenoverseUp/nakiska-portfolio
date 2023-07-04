import { useRef } from 'react'

const useHasCursor = () => {
  const hasCursor = useRef(
    matchMedia('(hover: hover) and (pointer: fine)').matches
  )

  return hasCursor
}

export default useHasCursor
