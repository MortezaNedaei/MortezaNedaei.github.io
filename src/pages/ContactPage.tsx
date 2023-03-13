import React, {FC, memo, PropsWithChildren} from 'react';
import ContactList from "../sections/contacts";
import {contacts} from "../data/local/resume-data";

const ContactPage: FC<PropsWithChildren<any>> = memo(() => {
    return (
        <div className='pageContainer'>
            <ContactList contacts={contacts}/>
        </div>
    );
});

export default ContactPage;