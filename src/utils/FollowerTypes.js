/**
 * Enum for cursor follower type.
 * @readonly
 * @enum {Symbol}
 * @property {Symbol} NONE
 * @property {Symbol} CUSTOM
 */
const FollowerType = Object.freeze({
  NONE: Symbol(0),
  CUSTOM: Symbol(1),
})

export default FollowerType
