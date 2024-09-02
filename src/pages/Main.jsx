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
    
    //Logic for modal 
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    
    const [phoneError, setPhoneError] = useState('Телефон не может быть пустым');
    const [nameError, setNameError] = useState('Имя не может быть пустым');
    const [surnameError, setSurnameError] = useState('Фамилия не может быть пустой');

    const validatePhone = (phone) => {
        const regex = /^(\+7|8)[\s]?\(?[489][0-9]{2}\)?[\s]?[0-9]{3}[\s]?[0-9]{2}[\s]?[0-9]{2}$/;
        if (!regex.test(phone)) {
          setPhoneError('Invalid phone number format');
          return false;
        }
        setPhoneError('');
        return true;
      };
    
      const validateName = (name) => {
        const regex = /^[a-zA-Zа-яА-Я\s]+$/
        if (!regex.test(name.trim())) {
          setNameError('Invalid name format');
          return false;
        }
        setNameError('');
        return true;
      };
    
      const validateSurname = (surname) => {
        const regex = /^[a-zA-Zа-яА-Я\s]+$/
        if (!regex.test(surname.trim())) {
          setSurnameError('Invalid surname format');
          return false;
        }
        setSurnameError('');
        return true;
      };

      const sendMessage = async () => {
        if (!validatePhone(phone) || !validateName(name) || !validateSurname(surname)) return;
    
        const chatId = '-4281173662'; // Замените на ваш Chat ID
        const token = '7422236178:AAEU7C02yUCGiLmQaORM64Z5KudjJSO8NoQ'; // Замените на токен вашего бота
        const formattedMessage = `Телефон пользователя: ${phone}\nИмя пользователя: ${name}\nФамилия пользоватея: ${surname}`;
        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(formattedMessage)}`;
    
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          setPhone('');
          setName('');
          setSurname('');
          setModal(false)
        } catch (error) {
          console.error('Failed to send message:', error);
        }
      };

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
                                    description='Курьером по Москве'
                                    image={<IoMdCart size={80} />}                                
                                />   
                                <AdvantageCard 
                                    title='ОТЛОЖЕННЫЙ ПЛАТЕЖ'
                                    description='безопасная двухэтапная оплата'
                                    image={<IoIosTime size={80} />}
                                />
                                <AdvantageCard 
                                    title='СКИДКИ ДЛЯ ПОСТОЯННЫХ КЛИЕНТОВ'
                                    description='по нашей бонусной программе'
                                    image={<BiSolidDiscount size={80}/>}
                                />                            
                            </div>
                        </div>
                        <div className="background__content_button" onClick={() => setModal(true)}>
                            <Button name='Заказать консультацию'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="App">
                <section className='welcome'>
                    <div className="welcome__title">
                        Добро пожаловать в зуботехническую лабораторию <span>Estetus Lab</span>
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
                    <form className='form' onSubmit={(e) => { e.preventDefault(); sendMessage(); }}>
                        <div className="form__input">
                            
                            <input
                            onChange={(e) => setPhone(e.target.value)}
                            value={phone}
                            type='tel' 
                            className='form__input_tel'
                            placeholder='Ваш телефон:'
                            />

                            <input                    
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            type="text" 
                            className='form__input_name'
                            placeholder='Ваше имя:'
                            />
                            
                            <input 
                            onChange={(e) => setSurname(e.target.value)}                           
                            value={surname}
                            type="text" 
                            className='form__input_name'
                            placeholder='Ваша фамилия:'
                            />
                        </div>
                        <div className='form__agree'>
                            Нажимая на кнопку "Отправить", вы соглашаетесь на <span>обработку своих персональных данных</span>
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