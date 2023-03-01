const classnames = (...args) => {
  let cx = ''

  args.forEach((arg) => {
    if (typeof arg === 'string') {
      cx += ` ${arg}`
    } else if (!!arg && arg.constructor === Object) {
      for (const key in arg) {
        if (arg.hasOwnProperty(key) && arg[key]) {
          cx += ` ${key}`
        }
      }
    }
  })

  return cx
}

export default classnames
