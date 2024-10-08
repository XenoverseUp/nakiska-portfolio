import FollowerType from './src/utils/FollowerTypes'
import { ReactComponent as CursorSVG } from './cursor.svg'

/* * * * * * * * * * *
 * SEO OPTIMIZATION  *
 * * * * * * * * * * */

export const SEO = {
  title: 'Nakiska Shaikh | Creative Director & Interaction Designer',
  description: 'Pretty cool portfolio.',
  canonical: 'http://nakiskashaikh.com',
  meta: {
    charset: 'utf-8',
    keywords: 'design,coding,figma,ui,ux',
    author: 'Can Durmus',
    openGraph: {
      title: 'Nakiska Shaikh | Creative Director & Interaction Designer',
      url: 'http://nakiskashaikh.com',
      description: 'Pretty cool portfolio.',
      image: '',
    },
  },
}

export const secret = `This is a secret text.`

/* * * * * * * * * * * * * * * * * *
 * JAVASCRIPT ANIMATION VARIABLES  *
 * * * * * * * * * * * * * * * * * */

/** @type {number}                                      - Changes the speed of page animation.                             DEFAULT: 9 */
const INTRO_ANIMATION_SPEED = 9
export const ANIMATION_SPEED_MULTIPLIER = 5 / INTRO_ANIMATION_SPEED

/** @type {number} in miliseconds                       - Changes the duration of swapper in the /clients and /services.   DEFAULT: 1000 */
export const SWAP_DURATION = 750
/** @type {number} in miliseconds                       - Changes the duration of fade in animation of reel sheet.         DEFAULT: 200 */
export const REEL_FADE_DURATION = 200

/* * * * * * * * *
 * CSS VARIABLES *
 * * * * * * * * */

/**
 * @typedef  {Object} Colors
 * @property {string} accentColor                       - Color of bubbles, link underlines, curtains etc.                 DEFAULT: '#ff3121'
 * @property {string} browserThemeColor                 - Theme color of browser (borders etc.).                           DEFAULT: '#fff'
 * @property {string} backgroundColor                   - Background color of the portfolio.                               DEFAULT: '#000'
 * @property {string} textColor                         - Primary text color of the portfolio.                             DEFAULT: '#fff'
 * @property {string} borderColor                       - Color of page border.                                            DEFAULT: '#fff'
 * @property {string} linkColor                         - Color of anchor tags, a.k.a links.                               DEFAULT: '#fff'
 * @property {string} lineHeight                         - Color of anchor tags, a.k.a links.                              DEFAULT: '#fff'
 * @property {string} textSelectionForegroundColor      - Foreground color of mouse text selection.                        DEFAULT: '#fff'
 * @property {string} textSelectionBackgroundColor      - Background color of mouse text selection.                        DEFAULT: Colors.accentColor
 * @property {string} navFontSize                       - Font size of the links in the navigation bar.                    DEFAULT: 12px
 */

/** @type {Colors} */
export const Colors = {
  accentColor: '#ff3121',
  browserThemeColor: '#fff',
  backgroundColor: '#000',
  textColor: '#fff',
  borderColor: '#fff',
  linkColor: '#fff',
  lineHeight: 1.5,
  textSelectionForegroundColor: '#fff',
  get textSelectionBackgroundColor() {
    return this.accentColor
  },
  navFontSize: '12px',
}

/**---------*/
/**
 * @typedef  {Object} Layout
 * @property {string} borderWidth                       - Width of page border.                                             DEFAULT: '3.125rem'
 * @property {string} navPadding                        - Spacing between the page border and navigation links.             DEFAULT: '2.75rem'
 */

/** @type {Layout} */
export const Layout = {
  borderWidth: '3.125rem',
  navPadding: '2.75rem',
}

/**---------*/
/**
 * @typedef  {Object} CursorCSS
 * @property {number} crossLineWidth               - The width of close reel "X".                                      DEFAULT: 1px
 */

/** @type {CursorCSS} */
export const CursorCSS = {
  crossLineWidth: '1px',
}

/* * * * * * * * *
 * PAGE CONTENT  *
 * * * * * * * * */

/**
 * Names of the links in the navigation, consists of 3 entries.
 *
 * Change the order of key-value pairs to change the positions of
 * the links in the navigation.
 *
 * @example const navigation = {
 *  '/services': 'services',
 *  '/contact': 'contact',
 *  '/clients': 'clients',
 * }
 *
 * In this arrangement, the positions of services and contact pages are
 * swapped.
 *
 * To change the displayed name of pages in the navigation, change the
 * right-hand side of the entries (a.k.a values).
 *
 * @example const navigation = {
 *  '/contact': 'my pretty contact page',
 *  '/services': 'services',
 *  '/clients': 'clients',
 * }
 *
 * Now in the navigation, it will write 'my pretty contact page'.
 *
 * NOTICE: Changing the left-hand side can cause bugs. So, be careful.
 * In case something happens, find the default value below.
 * @example const navigation = {
 *  '/contact': 'contact',
 *  '/services': 'services',
 *  '/clients': 'clients',
 * }
 *
 *
 * @type {Object} */

export const navigation = {
  '/contact': 'contact',
  '/services': 'services',
  '/clients': 'clients',
}

/**---------*/

/**
 * @typedef {Object} Reel
 * @property {string} url                               - URL of the reel video.
 */

/** @type {Reel} */
export const reel = {
  url: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
}

/**---------*/

/**
 * @typedef  {Object} Cursor
 * @property {string} playReel                          - Play reel cursor text.                                            DEFAULT: 'play reel'
 * @property {string} mailMe                            - E-mail hover cursor text.                                         DEFAULT: 'mail me'
 * @property {string} mailMeBackground                  - E-mail hover cursor text.                                         DEFAULT: 'mail me'
 * @property {number} cursorFlexibility                 - The flexibility of cursor. The Lower = Springy, Rigid             DEFAULT: 0.2
 * @property {number} followerFlexibility               - The flexibility of follower.                                      DEFAULT: 0.3
 * @property {FollowerType} followerType                - Type of the follower. CUSTOM and NONE are available.              DEFAULT: FollowerType.Custom
 * @property {React.FC} customFollower                  - If the type is picked as CUSTOM, this svg will be used.
 *
 * IMPORTANT!
 * While filling up the `customFollower` prop, make sure the SVG you passed is a valid JSX (https://svg2jsx.com/).
 * Also, remove predefined and hardcoded width and height and replace them with `{...{ width, height }}`.
 *
 *
 * AN EASIER WAY:
 * If you don't want to convert a huge SVG to JSX, alternatively you can put an SVG in the root and import it at top of this file as such:
 *
 * `import { ReactComponent as Happy } from "./happy.svg"`
 *
 * After that in the customFollower field, you can use it:
 *
 * `customFollower: ({ width, height }) => <Happy {...{ width, height }} />,`
 *
 */

/** @type {Cursor} */
export const Cursor = {
  playReel: 'play reel',
  mailMe: 'mail me',
  mailMeBackground: '#fff',
  mailMeForeground: '#000',
  cursorFlexibility: 0.2,
  followerFlexibility: 0.3,
  followerType: FollowerType.CUSTOM,
  customFollower: ({ width, height }) => (
    <CursorSVG {...{ width, height }} fill={Colors.accentColor} />
  ),
}

/* <svg
  {...{ width, height }}
  viewBox="0 0 238 235"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M119 16.651C90.0232 -18.2228 33.691 8.90535 42.8896 53.3039C-2.44265 54.2155 -16.3556 115.172 24.0918 135.662C-3.45959 171.673 35.5235 220.556 76.7619 201.708C87.7381 245.701 150.262 245.701 161.238 201.708C202.477 220.556 241.46 171.673 213.908 135.662C254.356 115.172 240.443 54.2155 195.111 53.3039C204.309 8.90532 147.977 -18.2228 119 16.651Z"
    fill={Colors.accentColor}
  />
</svg> */

/**---------*/

/** @property {string} seoTitle - Defines the title of the page for screen readers & crawlers. It is visually hidden but necessary for a better SEO. */

export const homeContent = {
  seoTitle: 'Nakiska Skaikh Portfolio',
  visibleTitle:
    "I'm Nakiska, a creative director & interaction designer based in Brooklyn.",
}

export const contactsContent = {
  seoTitle: 'Contact',
  subtitle: 'If you like what you see, say hi',
  mail: 'hi@nakiskashaikh.com',
}

export const clientsContent = {
  seoTitle: 'Clients',
  subtitle: "some brands i've made cool stuff with",
  items: [
    'Audi',
    'Anuel AA',
    'Barbie',
    'Motorola',
    'Marines',
    'UPS',
    'Showtime',
    'United Airlines',
    'Qualcomm',
    'Netflix',
    'Intel',
    'E Trade',
    'Pratt Institute',
    'Feedmob',
    'Literacy Partners',
    'Memphis Meats',
    'Tag Heuer',
    'Box',
    'Visa',
    'Uber',
    'Gaggneau',
    'Wacoal',
    'Hallmark',
    'National Geographic',
    'Marie Claire',
    'Wall Street Journal',
    'Maserati',
    'Citrix',
    'Amazon Web Services',
    'Tenor',
    'HBO',
    'The Bosco',
    'L’Attitude',
  ],
}

export const servicesContent = {
  seoTitle: 'Clients',
  subtitle: 'some things I do...',
  items: [
    'creative direction',
    'journey mapping',
    'brand strategy',
    'interface design',
    'Heuristics',
    'information Architecture',
    'Logo Design',
    'Digital Experience Platforms',
    'Product Design',
    'App Design',
    'Audio/Visual Experiments ',
    'Data Visualizations',
    'Game Design',
    'Package Design',
    'Prototyping',
    'Journey Mapping',
    'Product Validation',
    'Iterative Testing',
    'Set Design',
    'Engagement Strategy',
    'Copywriting',
    'Marketing Campaigns',
  ],
}
