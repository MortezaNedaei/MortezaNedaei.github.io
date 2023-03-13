import './index.css';
import React from "react";
import ContactListItem from "../../components/ContactListItem";

export interface Contact {
    id: number;
    type: string;
    value: string;
}

interface ContactListProps {
    contacts: Contact[];
}

const ContactList: React.FC<ContactListProps> = ({contacts}) => {
    return (
        <div className={'skills-container'}>
            {contacts.map((contact, index) => (
                <ContactListItem contact={contact}/>
            ))}
        </div>
    );
};

export default ContactList;