import { Link, NavLink, useHistory } from 'react-router-dom';
import { useAuth } from '../../features/Auth/Auth.context';
import styles from './Nav.module.css';

export function Nav() {
  const { auth, logout } = useAuth();

  const history = useHistory();

  function handleLogout(e) {
    e.preventDefault();
    logout();
    history.push('/login');
  }

  return (
    <nav className={styles.nav}>

      <Link to="/" className={styles.logo}>
        SpookStore
      </Link>

      <ul className={styles['main-menu']}>

        <li>
          <NavLink exact to="/" activeClassName={styles.active}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" activeClassName={styles.active}>
            Contact
          </NavLink>
        </li>

        {!auth?.user && (
          <>

            <li className={styles['push-right']}>
              <NavLink to="/login" activeClassName={styles.active}>
                Login
              </NavLink>
            </li>

            <li>
              <NavLink to="/register" activeClassName={styles.active}>
                Register
              </NavLink>
            </li>

          </>
        )}

        {auth?.user && (
          <>
            <li>
              <NavLink to="/books" activeClassName={styles.active}>
                Books
              </NavLink>
            </li>



            <li className={styles['push-right']}>
              Welcome,{' '}
              <NavLink to="/profile" activeClassName={styles.active}>
                {auth.user.fName}
              </NavLink>
            </li>

            <li>
              <a href="/" onClick={handleLogout}>
                Logout
              </a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
