import React, { useState } from 'react';

//Components
import AllTables from '../components/AllTables';
import Button from '../components/UI/Button/Button';

//ServiceFolder
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

    const [table, setTable] = useState({
        zro2: false,
        emax: false,
        abatments: false,
        noritake: false,
        tabs: false,
        diagnostics: false,
        temporary: false,
        telescopic: false,
        byugelnoe: false,
        thermoplastics: false,
        melodient: false,
    });

    const services = {
        ZrO2,
        Emax,
        Abatments,
        Noritake,
        Tabs,
        Diagnostics,
        Temporary,
        Telescopic,
        Byugelnoe,
        Thermoplastics,
        Melodient,
    };
    
    const switchTable = (tableName) => {
        setTable(prevState => ({
            ...prevState,
            [tableName]: !prevState[tableName]
        }));
    };

    const [totalPrice, setTotalPrice] = useState(0);

    let [order, setOrder] = useState([]);

    const updateTotalPrice = (itemToAdd) =>  {
        setTotalPrice(prevCost => prevCost + itemToAdd.price);
        setOrder(prevOrder => {
            const newOrder = [...prevOrder, `${itemToAdd.title} - ${itemToAdd.price} руб.`];
            return newOrder;
        });
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
                
                <AllTables tableState={table} switchTable={switchTable} updateTotalPrice={updateTotalPrice} services={services}/>

                <div className="price__total">
                    <div className="price__total-title">
                        Общая стоимость всех услуг: {`${totalPrice} руб.`}
                    </div>

                    <div className="price__total-orders">
                        {order.length > 0 ? (
                            <ul>
                                {order.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        ) : (
                         <p>Вы пока ничего не добавили</p>
                        )}
                    </div>

                    <div className="price__total-refresh" onClick={() => {
                        setTotalPrice(0)
                        setOrder([]);
                    }}>
                        <Button name='Сбросить цену'/>
                    </div>

                    
                </div>
            </section>            
        </div>
    )
};

export default Price;