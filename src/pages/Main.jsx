import React from 'react';

//Components
import AdvantageCard from '../components/UI/AdvantageCard/AdvantageCard';
import Background from '../components/Background';

//Icons
import { IoIosTime, IoMdCart } from 'react-icons/io';
import { BiSolidDiscount } from 'react-icons/bi';

const Main = () => {
    return (
        <>
            <div className="background">
                <div className="background__media">
                    <Background/>
                </div>
                <div className="background__content">
                    <div className="background__content_start">
                        <div className="background__content_start-title">
                            Цифровая зуботехническая лаборатория <span>EstetusLab</span>
                        </div>
                        <div className="background__content_advantages">
                            <div className="background__content_advantages-text">
                                Более 10 лет на рынке
                            </div>
                            <div className="background__content_advantages-cards">
                                <AdvantageCard
                                    title='БЕСПЛАТНАЯ ДОСТАВКА' 
                                    title2=''
                                    description=''
                                    image={<IoMdCart size={80} />}                                
                                />   
                                <AdvantageCard 
                                    title='ОТЛОЖЕННЫЙ ПЛАТЕЖ'
                                    title2=''
                                    description=''
                                    image={<IoIosTime size={80} />}
                                />
                                <AdvantageCard 
                                    title='СКИДКИ'
                                    title2='ДЛЯ ПОСТОЯННЫХ КЛИЕНТОВ'
                                    description=''
                                    image={<BiSolidDiscount size={80}/>}
                                />                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Main;