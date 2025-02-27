import { SectionContactForm } from "../components/SectionContactForm/SectionContactForm";
import { SectionContacts } from "../components/SectionContacts/SectionContacts";
import css from "../components/App/App.module.css";

const ContactsPage = () => {

    return  <>
                <h1 className={css["title-h1"]}>Phonebook</h1>

                <div className={css["book-container"]}>

                    <SectionContactForm className={css.section} />
                    
                    <SectionContacts className={css.section} />

                </div>
            </>   

}

export default ContactsPage;