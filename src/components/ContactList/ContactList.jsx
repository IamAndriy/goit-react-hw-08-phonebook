import { useSelector } from "react-redux";
import { selectFilter, selectRelevantContacts } from "../../redux/contacts/selectors";
import { ContactItem } from "../ContactItem/ContactItem";
import { nanoid } from "nanoid";
import css from "./ContactList.module.css";

export const ContactList = () => {

    const filter = useSelector(selectFilter);
    const contacts = useSelector(selectRelevantContacts);
    
    return  <> 
            { (contacts.length > 0) 
                ?   <ul className={css["contact-list"]}>
                        { contacts.map( ({id, name, number}) => < ContactItem key={nanoid()} id={id} name={name} number={number}/> ) }
                    </ul>
                :   (filter.trim())
                        ? <p className={css.massage}>There are no contacts you are looking for</p>
                        : <p className={css.massage}>There are no contacts in the phone book yet</p>
            }
            </>
}

