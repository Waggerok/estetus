import React from 'react';
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

const Services = () => {
    return (
        <div className='App'>
            <section className='services'>
                <div className="services__title">Цены на наши услуги</div>
                <div className="services__price">
                    {ZrO2.map((index) => 
                        <div>{index.title}</div>    
                    )}
                </div>
            </section>
        </div>
    )
};

export default Services;