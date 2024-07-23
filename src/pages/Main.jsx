import React, { useState } from 'react';

//Components
import AdvantageCard from '../components/UI/AdvantageCard/AdvantageCard';
import Background from '../components/Background';
import Button from '../components/UI/Button/Button';

//Icons
import { IoIosTime, IoMdCart } from 'react-icons/io';
import { BiSolidDiscount } from 'react-icons/bi';

//Photo
import Laboratory from '../img/Laboratory.jpg';
import MyModal from '../components/UI/MyModal/MyModal';

const Main = () => {

    const [modal, setModal] = useState(false);
    

    // сделать setModal(false) после того, как заполнил форму

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
                                    description='Курьером по москве'
                                    image={<IoMdCart size={80} />}                                
                                />   
                                <AdvantageCard 
                                    title='ОТЛОЖЕННЫЙ ПЛАТЕЖ'
                                    title2=''
                                    description='безопасная двухэтапная оплата'
                                    image={<IoIosTime size={80} />}
                                />
                                <AdvantageCard 
                                    title='СКИДКИ'
                                    title2='ДЛЯ ПОСТОЯННЫХ КЛИЕНТОВ'
                                    description='по нашей бонусной программе'
                                    image={<BiSolidDiscount size={80}/>}
                                />                            
                            </div>
                        </div>
                        <div className="background__content_button" onClick={() => setModal(true)}>
                            <Button name='Заказать консультацию' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="App">
                <section className='welcome'>
                    <div className="welcome__title">
                        Добро пожаловать в зуботехническую лабораторию Estetus Lab
                    </div>
                    <div className="welcome__content">
                        <div className="welcome__content_photo">
                            <img src={Laboratory} alt="Laboratory"/>
                        </div>
                        <div className="welcome__content_text">
                            <div className="welcome__content_text-description">
                                <p>
                                    Наша компания уже более десяти лет предоставляет свои услуги для различных стоматологических клиник. Мы занимаемся изготовлением высококачественных зубных протезов, коронок, мостов и другие изделий на заказ. 
                                </p>
                                <p>
                                    Наша команда специалистов регулярно совершенствует свои навыки, чтобы идти в ногу со временем, а наши помещения оснащены высококлассным оборудованием.
                                </p>                               
                                <p>
                                    Прямая коммуникация и обмен мнениями между зубными техниками и специалистами нашего фрезцентра послужат основой для успешной реализации ваших требований и пожеланий. Мы гарантируем индивидуальный подход к каждому клиенту, быструю обработку заказов и превосходное качество изделий.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>






                {/* тут модалка */}
                <MyModal 
                    visible={modal} 
                    setVisible={setModal}
                >
                    <h3 style={{textAlign:'center'}}>Заказать консультацию</h3>
                    <form className='form'>
                        <div className="form__input">
                            <input 
                            type='tel' 
                            className='form__input_tel'
                            placeholder='Ваш телефон:'
                            />
                            <input 
                            type="text" 
                            className='form__input_name'
                            placeholder='Ваше имя:'
                            />
                            <input 
                            type="text" 
                            className='form__input_name'
                            placeholder='Ваша Фамилия:'
                            />
                        </div>
                        <div className="form__button">
                            <button type='submit'>Отправить</button>
                        </div> 
                    </form>
                </MyModal>
            </div>
        </>
    )
};

export default Main;