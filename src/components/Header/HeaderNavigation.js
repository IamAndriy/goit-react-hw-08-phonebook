import { NavLink, Link } from "react-router-dom";
import { paths } from "../../routes";
import { useAuth} from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import css from './HeaderNavigation.module.css'

export const HeaderNavigation = () => {
    
    const {user, isLoggedIn} = useAuth();
    const dispatch = useDispatch();

    return  <header>
                <div className='container'>
                    <nav className={css['nav']}>
                        <div className={css['home-cont-div']}>
                            <NavLink to={paths.HOME} className={css['nav-link']}>Home</NavLink>
                            { isLoggedIn && <NavLink to={paths.CONTACTS} className={css['nav-link']}>Contacts</NavLink> }
                        </div>

                        <div className={css['auth-div']}>
                        { isLoggedIn
                            ?   <>
                                    <p className={css['email-link']}>{user.email}</p>
                                    <Link to={paths.HOME} onClick={ ()=>dispatch(logout()) } className={css['nav-link']}>Logout</Link>
                                </>
                                
                            :   <>
                                    <NavLink to={paths.REGISTER} className={css['nav-link']}>Register</NavLink>
                                    <NavLink to={paths.LOGIN} className={css['nav-link']}>Login</NavLink>
                                </>
                        } 
                        </div>
                    </nav>
                </div>
            </header>
}