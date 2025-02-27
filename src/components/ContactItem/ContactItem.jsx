import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { IoIosClose } from "react-icons/io";
import css from './ContactItem.module.css';
import PropTypes from "prop-types";

export const ContactItem = ({id, name, number }) => {

    const dispatch = useDispatch();
    
    return  <li className={css["contact-li"]} id={id}>

                <div className={css["contact-div"]}>
                    <p className={css["contact-name"]}>{name}</p>
                    <p className={css["contact-number"]}>{number}</p>
                </div>

                <button className={css["contact-del-btn"]} type="button" onClick={() => {dispatch(deleteContact(id))}}>
                    <IoIosClose className={css["contact-del-icon"]}/> 
                </button>

            </li>
}

ContactItem.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
}