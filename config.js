import FollowerType from './src/utils/FollowerTypes'

/* * * * * * * * * * *
 * SEO OPTIMIZATION  *
 * * * * * * * * * * */

export const SEO = {
  title: 'Nakiska Shaikh Portfolio',
  description: 'Pretty cool portfolio.',
  canonical: 'http://example.com/path/to/page',
  meta: {
    charset: 'utf-8',
    keywords: 'design,coding,figma,ui,ux',
    author: 'Can Durmus',
    openGraph: {
      title: '',
      url: '',
      description: '',
      image: '',
    },
  },
}

/* * * * * * * * * * * * *
 * JAVASCRIPT VARIABLES  *
 * * * * * * * * * * * * */

/** @type {number}                                      - Changes the speed of intro animation.                            DEFAULT: 9 */
const INTRO_ANIMATION_SPEED = 9
export const ANIMATION_SPEED_MULTIPLIER = 5 / INTRO_ANIMATION_SPEED

/** @type {number} in miliseconds                       - Changes the duration of swapper in the /clients and /services.   DEFAULT: 2000 */
export const SWAP_DURATION = 1750

/* * * * * * * * *
 * CSS VARIABLES *
 * * * * * * * * */

/**
 * @typedef  {Object} Colors
 * @property {string} accentColor                       - Color of bubbles, link underlines, curtains etc.                 DEFAULT: '#ff3121'
 * @property {string} backgroundColor                   - Background color of the portfolio.                               DEFAULT: '#000'
 * @property {string} textColor                         - Primary text color of the portfolio.                             DEFAULT: '#fff'
 * @property {string} borderColor                       - Color of page border.                                            DEFAULT: '#fff'
 * @property {string} linkColor                         - Color of anchor tags, a.k.a links.                               DEFAULT: '#fff'
 * @property {string} textSelectionForegroundColor      - Foreground color of mouse text selection.                        DEFAULT: '#fff'
 * @property {string} textSelectionBackgroundColor      - Background color of mouse text selection.                        DEFAULT: Colors.accentColor
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
 * @typedef  {Object} Cursor
 * @property {string} playReel                          - Play reel cursor text.                                            DEFAULT: 'play reel'
 * @property {string} mailMe                            - E-mail hover cursor text.                                         DEFAULT: 'mail me'
 * @property {number} cursorFlexibility                 - The flexibility of cursor. The Lower = Springy, Rigid             DEFAULT: 0.2
 * @property {number} followerFlexibility               - The flexibility of follower.                                      DEFAULT: 0.3
 * @property {FollowerType} followerType
 * @property {string} starFill
 */

/** @type {Cursor} */
export const Cursor = {
  playReel: 'play reel',
  mailMe: 'mail me',
  cursorFlexibility: 0.2,
  followerFlexibility: 0.3,
  followerType: FollowerType.STAR,
  starFill: Colors.accentColor,
}

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
