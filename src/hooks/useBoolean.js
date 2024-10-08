import { useCallback, useState } from 'react'

const useBoolean = (initial) => {
  const [value, setValue] = useState(initial)
  const toggle = useCallback(() => setValue((state) => !state))

  return [value, toggle, setValue]
}

export default useBoolean
