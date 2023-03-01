import { useCallback, useState } from 'react'

export const IndexModes = {
  LINEAR: 0,
  ROUND: 1,
}

const useIndex = ({ initialValue = 0, count, mode = IndexModes.ROUND }) => {
  validate({ initialValue, count, mode })

  const [index, setIndexRaw] = useState(initialValue)

  const setIndex = useCallback(
    (i) => {
      if (i >= count || i < 0)
        throw new Error('setIndex got an invalid parameter.')
      setIndexRaw(i)
    },
    [setIndexRaw]
  )

  const getNextIndex = useCallback(() => {
    if (mode === IndexModes.LINEAR)
      return index === count - 1 ? index : index + 1
    else if (mode === IndexModes.ROUND)
      return index === count - 1 ? 0 : index + 1
  })

  const getPreviousIndex = useCallback(() => {
    if (mode === IndexModes.LINEAR) return index === 0 ? 0 : index - 1
    else if (mode == IndexModes.ROUND)
      return index === 0 ? count - 1 : index - 1
  })

  const increment = useCallback(() => {
    if (mode === IndexModes.LINEAR)
      setIndex(index === count - 1 ? index : index + 1)
    else if (mode === IndexModes.ROUND)
      setIndex(index === count - 1 ? 0 : index + 1)
  })

  const decrement = useCallback(() => {
    if (mode === IndexModes.LINEAR) setIndex(index === 0 ? 0 : index - 1)
    else if (mode === IndexModes.ROUND)
      setIndex(index === 0 ? count - 1 : index - 1)
  })

  return [
    index,
    { getNextIndex, getPreviousIndex, increment, decrement, setIndex },
  ]
}

const validate = ({ initialValue, count, mode }) => {
  if (initialValue >= count)
    throw new RangeError('Initial value cannot be bigger than item count.')
  if (initialValue < 0)
    throw new RangeError('Initial value cannot be negative.')
  if (count <= 0) throw new Error('Item count should be bigger than 0.')
  if (!Object.values(IndexModes).includes(mode))
    throw new SyntaxError('Mode should be selected from IndexModes object.')
}

export default useIndex
