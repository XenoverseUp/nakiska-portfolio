const wait = (duration = 500) =>
  new Promise((resolve) => setTimeout(resolve, duration))

export default wait
