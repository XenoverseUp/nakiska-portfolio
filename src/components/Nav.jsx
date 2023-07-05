import { ReactComponent as Logo } from 'assets/svg/logo.svg'
import { NavLink } from 'react-router-dom'
import styles from '@sc/Nav.module.scss'
import cx from 'cx'
import { navigation } from '@/config'

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="/"
        data-cursor-hover
        aria-label="Home"
        className={({ isActive }) =>
          cx(styles.logo, { [styles.active]: isActive })
        }
      >
        <Logo width={20} />
      </NavLink>

      {Object.keys(navigation).map((key) => (
        <NavLink
          to={`${key}`}
          key={`${key}`}
          data-cursor-hover
          className={({ isActive }) =>
            cx('mono', styles.link, { [styles.active]: isActive })
          }
        >
          {navigation[key]}
        </NavLink>
      ))}
    </nav>
  )
}

export default Nav
