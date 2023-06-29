/**
 * Converts a camelCase string to kebab-case.
 * @param {string} string - Camelcase string.
 */

const kebabize = (str) =>
  str.replace(
    /[A-Z]+(?![a-z])|[A-Z]/g,
    ($, ofs) => (ofs ? '-' : '') + $.toLowerCase()
  )

export default kebabize
