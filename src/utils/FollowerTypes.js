/**
 * Enum for cursor follower type.
 * @readonly
 * @enum {Symbol}
 * @property {Symbol} NONE
 * @property {Symbol} STAR
 * @property {Symbol} CUSTOM
 */
const FollowerType = Object.freeze({
  NONE: Symbol(0),
  STAR: Symbol(1),
  CUSTOM: Symbol(2),
})

export default FollowerType
