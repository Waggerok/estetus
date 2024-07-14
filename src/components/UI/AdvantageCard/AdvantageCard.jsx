import React from 'react';
import styles from './AdvantageCard.module.css';


const AdvantageCard = (props) => {
    return (
            <div className={styles.advantages__cards_item}>
                <div className={styles.advantages__cards_item_img}>
                    {props.image}
                </div>
                <div className={styles.advantages__cards_item_title}>
                    {props.title}
                    {`\n ${props.title2}`}
                </div>
                <div className={styles.advantages__cards_item_descriprion}>
                    {props.description}
                </div>
            </div>
    )
};

export default AdvantageCard;