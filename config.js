// Changes the intro animation speed. The higher ANIMATION_SPEED the faster the intro animation.
const ANIMATION_SPEED = 9
export const ANIMATION_SPEED_MULTIPLIER = 5 / ANIMATION_SPEED

/** CSS VARIABLES */

/**
 * @typedef  {Object} Colors
 * @property {string} accentColor                       - Color of bubbles, link underlines, curtains etc.        DEFAULT: '#ff3121'
 * @property {string} backgroundColor                   - Background color of the portfolio.                      DEFAULT: '#000'
 * @property {string} textColor                         - Primary text color of the portfolio.                    DEFAULT: '#fff'
 * @property {string} borderColor                       - Color of page border.                                   DEFAULT: '#fff'
 * @property {string} linkColor                         - Color of anchor tags, a.k.a links.                      DEFAULT: '#fff'
 * @property {string} textSelectionForegroundColor      - Foreground color of mouse text selection.               DEFAULT: '#fff'
 * @property {string} textSelectionBackgroundColor      - Background color of mouse text selection.               DEFAULT: Colors.accentColor
 */

/** @type {Colors} */
export const Colors = {
  accentColor: '#ff3121',
  backgroundColor: '#000',
  textColor: '#fff',
  borderColor: '#fff',
  linkColor: '#fff',
  textSelectionForegroundColor: '#fff',
  get textSelectionBackgroundColor() {
    return this.accentColor
  },
}

/**
 * @typedef  {Object} Layout
 * @property {string} borderWidth                       - Width of page border.                                   DEFAULT: '3.125rem'
 * @property {string} navPadding                        - Spacing between the page border and navigation links.   DEFAULT: '2.75rem'
 */

/** @type {Layout} */
export const Layout = {
  borderWidth: '3.125rem',
  navPadding: '2.75rem',
}
