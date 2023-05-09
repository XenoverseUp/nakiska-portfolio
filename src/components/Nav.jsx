import { ReactComponent as Logo } from 'assets/svg/logo.svg'
import { Link, NavLink } from 'react-router-dom'
import Magnetic from 'components/Magnetic'
import styles from '@sc/Nav.module.scss'
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

      {['contact', 'clients', 'services'].map((item) => (
        // <Magnetic>
        <NavLink
          to={`/${item}`}
          className={({ isActive }) =>
            cx('mono', styles.link, { [styles.active]: isActive })
          }
        >
          {item}
        </NavLink>
        // </Magnetic>
      ))}
    </nav>
  )
}

export default Nav
