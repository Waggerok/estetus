import React from 'react';
import ZrO2 from '../ServicesFolder/Service1';


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