const lerp = (current, target, factor) => {
  return current * (1 - factor) + target * factor
}

export default lerp
