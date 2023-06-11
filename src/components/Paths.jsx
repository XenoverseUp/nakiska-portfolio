import { Fragment } from 'react'
import styles from '@sc/Paths.module.scss'
import cx from 'cx'
import useMediaQuery from '../hooks/useMediaQuery'

const Paths = () => {
  const isMobile = useMediaQuery('max-width: 600px')

  return (
    <svg
      viewBox="0 0 1440 810"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cx(styles.motionPath, styles.bubblePath)}
      preserveAspectRatio="none"
    >
      {false ? (
        <Fragment>
          <path
            id="bubble-path-0"
            d="M67 533.5C113.833 403.667 264.1 155.9 490.5 203.5C773.5 263 1067 317 1126 122.5C1173.2 -33.1 1162 -190.333 1150.5 -249.5"
            stroke="white"
            strokeWidth="4"
          />
          <path
            id="bubble-path-1"
            d="M1308 393.5C1202.33 372 973.2 351.2 902 440C813 551 901.5 738.5 719.5 723.5C537.5 708.5 251.5 -33 283.5 -220"
            stroke="white"
            strokeWidth="4"
          />
          <path
            id="bubble-path-2"
            d="M673 758C782 745.5 1007.9 697.4 1039.5 605C1079 489.5 1485 516.5 1396.5 1070.5"
            stroke="white"
            strokeWidth="4"
          />
          <path
            id="bubble-path-3"
            d="M680 373.5C636.667 453.167 507.6 607.1 338 585.5C168.4 563.9 244 886.833 185 1041"
            stroke="white"
            strokeWidth="4"
          />
          <path
            id="bubble-path-4"
            d="M590 978.5C521.167 958 383 900.7 381 835.5C378.5 754 263.5 571 363 452C442.6 356.8 167.167 121.667 19.5 16"
            stroke="white"
            strokeWidth="4"
          />
          <path
            id="bubble-path-5"
            d="M24 18C118 83.1667 302.9 238.7 290.5 339.5C275 465.5 103.5 569 105.5 635C107.5 701 95 1029.5 202.5 1036"
            stroke="white"
            strokeWidth="4"
          />
          <path
            id="bubble-path-6"
            d="M742 42.5C586.5 84.3333 263.1 147.7 213.5 66.5C163.9 -14.7 175.166 -104 187 -138.5"
            stroke="white"
            strokeWidth="4"
          />
        </Fragment>
      ) : (
        <Fragment>
          <path
            id="bubble-path-0"
            d="M67 533.5C113.833 403.667 264.1 155.9 490.5 203.5C773.5 263 1067 317 1126 122.5C1173.2 -33.1 1162 -190.333 1150.5 -249.5"
            stroke="white"
            strokeWidth="4"
          />
          <path
            id="bubble-path-1"
            d="M1308 393.5C1202.33 372 973.2 351.2 902 440C813 551 901.5 738.5 719.5 723.5C537.5 708.5 251.5 -33 283.5 -220"
            stroke="white"
            strokeWidth="4"
          />
          <path
            id="bubble-path-2"
            d="M673 758C782 745.5 1007.9 697.4 1039.5 605C1079 489.5 1485 516.5 1396.5 1070.5"
            stroke="white"
            strokeWidth="4"
          />
          <path
            id="bubble-path-3"
            d="M680 373.5C636.667 453.167 507.6 607.1 338 585.5C168.4 563.9 244 886.833 185 1041"
            stroke="white"
            strokeWidth="4"
          />
          <path
            id="bubble-path-4"
            d="M1320.5 83C1195.83 115.167 735.4 -59 749 61C766 211 1246.5 447.5 980.5 893"
            stroke="white"
            strokeWidth="4"
          />
          <path
            id="bubble-path-5"
            d="M641 163.5C535.5 171.667 196.4 85.8 112 13"
            stroke="white"
            strokeWidth="4"
          />
          <path
            id="bubble-path-6"
            d="M6 699C15.5 728.167 58.1 788.9 152.5 798.5"
            stroke="white"
            strokeWidth="4"
          />
        </Fragment>
      )}
      {/* STARS */}
      <path
        id="star-path-0"
        d="M1239 501C1356.5 595.5 1498.6 829.7 1433 1194.5"
        stroke="white"
        strokeWidth="4"
      />
      <path
        id="star-path-1"
        d="M1384.5 51.5C1296.67 72.5 1085.96 74.4322 949 66.5C819.5 59 664 195.5 581.5 187.5C499 179.5 456 -38.5 451 -129.5"
        stroke="white"
        strokeWidth="4"
      />
      <path
        id="star-path-2"
        d="M1329.5 758.5C1221.5 753.833 1026.5 683.9 1110.5 441.5C1215.5 138.5 1500.5 263 1618 85"
        stroke="white"
        strokeWidth="4"
      />
      <path
        id="star-path-3"
        d="M19 22.5C73.6667 17.8333 107.5 0.499994 209.5 22.5C325.677 47.5577 386.31 127.674 359.81 255.174C333.31 382.674 386.392 531.653 359.81 604.674C318.31 718.674 340 820.5 362 918"
        stroke="white"
        strokeWidth="4"
      />
      <path
        id="star-path-4"
        d="M23 784C132.333 713.833 402.5 590.6 608.5 659C814.5 727.4 956.667 897.167 1002 973.5"
        stroke="white"
        strokeWidth="4"
      />
      <path
        id="star-path-5"
        d="M20 320.5C60.5 356.5 161.8 431.6 243 444C344.5 459.5 576.581 382.607 687 421.5C810.5 465 877.7 341.4 998.5 285C1186.5 200 1291.17 31.5 1336 -154"
        stroke="white"
        strokeWidth="4"
      />
      <path
        id="star-path-6"
        d="M716 785.5C732.667 668.833 698.5 581 592.5 523C460 450.5 339.5 549.5 216 537C93.6485 524.616 -114.5 363 -146 285.5"
        stroke="white"
        strokeWidth="4"
      />
      <path
        id="star-path-7"
        d="M519.5 24C548.667 151.167 661.7 435 880.5 553C1154 700.5 1307 670.5 1433 882"
        stroke="white"
        strokeWidth="4"
      />
      <path
        id="star-path-8"
        d="M830.5 54C957.5 73.5 1226.3 166.3 1285.5 381.5C1344.7 596.7 1527.17 608.167 1611 587"
        stroke="white"
        strokeWidth="4"
      />
      <path
        id="star-path-9"
        d="M636.5 366C424.833 420 -7.19998 571.5 -42 745.5C-76.8 919.5 -70.8333 930.333 -63.5 914"
        stroke="white"
        strokeWidth="4"
      />
    </svg>
  )
}

export default Paths
