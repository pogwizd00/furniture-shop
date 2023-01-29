import React, {FC} from 'react';
import '../Styles/Contact.css'
import {ContactForm} from "../features/contact/ContactForm";

interface ContactProps {
}

export const Contact: FC<ContactProps> = ({}) => {
    return (
        <div>
            <ContactForm/>
        </div>
    );
};

