import { ReactComponent as Logo } from 'assets/svg/logo.svg'
import styles from '@sc/Nav.module.scss'
import { Link, NavLink } from 'react-router-dom'
import cx from 'cx'

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          cx(styles.logo, { [styles.active]: isActive })
        }
      >
        <Logo width={20} />
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          cx('mono', styles.link, { [styles.active]: isActive })
        }
      >
        contact
      </NavLink>
      <NavLink
        to="/services"
        className={({ isActive }) =>
          cx('mono', styles.link, { [styles.active]: isActive })
        }
      >
        services
      </NavLink>
      <NavLink
        to="/clients"
        className={({ isActive }) =>
          cx('mono', styles.link, { [styles.active]: isActive })
        }
      >
        clients
      </NavLink>
    </nav>
  )
}

export default Nav
