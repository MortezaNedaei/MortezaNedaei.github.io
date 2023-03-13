import React from "react";
import './index.css'
import {Contact} from "../../sections/contacts";

interface ContactListItemProps {
    contact: Contact;
}

const ContactListItem: React.FC<ContactListItemProps> = ({contact}) => {
    return (
        <div className={'contact-container'}>
            <h3 className={'contact-type'}>{contact.type}</h3>
            <p className={'contact-value'}>{contact.value}</p>
        </div>
    )
}

export default ContactListItem