import React from 'react';
import styles from './ContactsInformation.module.css';

const ContactsInformation = (props) => {
    return (
        <div className={styles.info}>
            <div className={styles.info__title}>
                {props.title}
            </div>
            <div className={styles.info__description}>
                {props.description} <br/>
                {props.description2}
            </div>
        </div>
    );
};

export default ContactsInformation;