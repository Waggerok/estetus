import React, { useState } from 'react';
import ZrO2 from '../ServicesFolder/Service1';
import Emax from '../ServicesFolder/Service2';
import Abatments from '../ServicesFolder/Service3';
import Noritake from '../ServicesFolder/Service4';
import Tabs from '../ServicesFolder/Service5';
import Diagnostics from '../ServicesFolder/Service6';
import Temporary from '../ServicesFolder/Service7';
import Telescopic from '../ServicesFolder/Service8';
import Byugelnoe from '../ServicesFolder/Service9';
import Thermoplastics from '../ServicesFolder/Service10';
import Melodient from '../ServicesFolder/Service11';

const Price = () => {

    const [table, setTable] = useState(false);

    const switchTable = () => {
        if (table === false) {
            setTable(true)
        } else {
            setTable(false);
        };
    };
    
    return (
        <div className='App'>
            <section className='price'>
                <div className="price__title">
                    Цены на наши услуги
                </div>
                <div className="price__description">
                    Здесь вы можете ознакомиться со всеми спецификациями наших изделий, а также узнать цены на интересующие услуги.
                </div>

                <div className="price__table">
                    <div className="price__table-name">
                        Безметалловые коронки ZrO2 (KATANA, PRIME):
                    </div>
                    <div className="price__table-button" onClick={switchTable}>
                        {`>`}
                    </div>
                </div>
                {table
                ?
                <div></div>
                :
                <div></div>
                }
                
                
            </section>
        </div>
    )
};

export default Price;