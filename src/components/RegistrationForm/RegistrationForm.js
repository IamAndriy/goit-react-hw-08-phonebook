import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from './RegistrationForm.module.css';

export const RegistrationForm = () => {

  const dispatch = useDispatch();

  const onSubmit = (e) => {

    e.preventDefault();

    const user = {
      name : e.currentTarget.elements.name.value,
      email : e.currentTarget.elements.email.value,
      password : e.currentTarget.elements.password.value
    }

    dispatch(register(user));

    e.currentTarget.reset();
  }

  return <div>

           <form onSubmit={onSubmit} className={css.form}>

            <label className={css.label}>Name
              <input  type="text" 
                      className={css.regInput}
                      name="name" 
                      placeholder="name" 
                      autoFocus
                      required 
              />
             </label>

            <label className={css.label}>Email
              <input  type="email"
                      className={css.regInput}
                      name="email"
                      placeholder="example@mail.com"
                      pattern ="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
                      required
              />
            </label>
 
             <label className={css.label}>Password
              <input  type="password" 
                      className={css.regInput}
                      name="password" 
                      placeholder="********" 
                      pattern="[a-zA-Z0-9]{8,15}" 
                      required 
              />
               <p className={css.massage}>Password must be 8-15 chars long and contain only latin letters and digits</p>
             </label>

             <button type="submit" className={css.button}>Register</button>
 
           </form>

         </div>
 }