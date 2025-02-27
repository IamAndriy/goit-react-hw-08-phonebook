import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import css from '../RegistrationForm/RegistrationForm.module.css';

export const LoginForm = () => {

  const dispatch = useDispatch();

  const onSubmit = (e) => {

    e.preventDefault();  
    const form = e.currentTarget;

    const user = {
      email : form.elements.email.value,
      password : form.elements.password.value
    }

    dispatch(login(user));
    form.reset();
  }

  return  <div>
            <form onSubmit={onSubmit} className={css.form}>

              <label className={css.label}>Email
                <input  type="email" 
                        className={css.regInput}
                        name="email" 
                        placeholder="example@mail.com" 
                        autoFocus
                        required
                />
              </label>

              <label className={css.label}>Password
                <input  type="password" 
                        className={css.regInput}
                        name="password" 
                        placeholder="password" 
                        required
                />
                <p className={css.massage}>Password must be 8-15 chars long and contain only latin letters and digits</p>
              </label>

              <button type="submit" className={css.button}>Login</button>

            </form>
          </div> 
}