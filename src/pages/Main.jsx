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

//Logos
import arum from '../img/logos/arum-logo.png';
import shape from '../img/logos/3shape-logo.png';
import dekema from '../img/logos/dekema-logo.png';
import geomedi from '../img/logos/geomedi-logo.png';
import ivoclar from '../img/logos/ivoclar-logo.png';
import kuraray from '../img/logos/kurray-logo.png';
import shick from '../img/logos/schick-logo.png';

const Main = () => {

    const [modal, setModal] = useState(false);
    
    //Logic for modal 
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [file, setFile] = useState(null);
    
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

      const handleFileChange = (event) => {
        setFile(event.target.files[0]);
      };
    

      const sendMessage = async () => {
        if (!validatePhone(phone) || !validateName(name) || !validateSurname(surname)) return;
    
        const chatId = '-4281173662'; // Замените на ваш Chat ID
        const token = '7422236178:AAEU7C02yUCGiLmQaORM64Z5KudjJSO8NoQ'; // Замените на токен вашего бота
    
        try {
            const formData = new FormData();
            formData.append('chat_id', chatId);
            formData.append('parse_mode', 'HTML');
            formData.append('caption', `Телефон пользователя: ${phone};\nИмя пользователя: ${name};\nФамилия пользователя: ${surname};`);
            
            if (file) {
                formData.append('document', file);
            }
            
            const response = await fetch(`https://api.telegram.org/bot${token}/sendDocument`, {
                method: 'POST',
                body: formData,
            });
    
            const result = await response.json();
            console.log('Message sent successfully:', result);
                        
            setPhone('');
            setName('');
            setSurname('');
            setFile(null);
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
                            <h1>Цифровая зуботехническая лаборатория <span>EstetusLab</span></h1>
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
                                    description='Безопасная двухэтапная оплата'
                                    image={<IoIosTime size={80} />}
                                />
                                <AdvantageCard 
                                    title='СКИДКИ ДЛЯ ПОСТОЯННЫХ КЛИЕНТОВ'
                                    description='По нашей бонусной программе'
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
                        Добро пожаловать в цифровую зуботехническую лабораторию <span>Estetus Lab</span>
                    </div>
                    <div className="welcome__content">
                        <div className="welcome__content_photo">
                            <img src={Laboratory} alt="Laboratory"/>
                        </div>
                        <div className="welcome__content_text">
                            <div className="welcome__content_text-description">
                                <p>
                                    Наша компания уже более десяти лет предоставляет свои услуги для различных стоматологических клиник. Мы идём в ногу со временем и используем новейшие цифровые технологии, благодаря которым проектирование и производство изделий выполняется с непревзойденной точностью и эффективностью.
                                </p>
                                <p>
                                    Наша команда специалистов умело использует современные CAD/CAM системы, а также работает с цифровыми зубными формами и хирургическими шаблонами.
                                </p>                               
                                <p>
                                    Прямая коммуникация и обмен мнениями между зубными техниками и специалистами нашего фрезцентра послужат основой для успешной реализации ваших требований и пожеланий.
                                </p>
                                <p>
                                    Мы гарантируем индивидуальный подход к каждому клиенту, быструю обработку заказов и превосходное качество изделий.
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

                            <input 
                                type="file" 
                                onChange={handleFileChange}
                                accept='.stl'
                                className='form__input_file'
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
            <section className='partners'>
                    <div className="partners__title">
                        <span>Наши партнеры</span>
                    </div>
                    <div className="partners__logos">
                        <div className="partners__logos-item">
                            <a href="https://www.3shape.com">
                                <img src={shape} alt="shape"/>
                            </a>
                        </div>
                        <div className="partners__logos-item">
                            <a href="https://arumdental.com">
                                <img src={arum} alt="arum" />
                            </a>
                        </div>
                        <div className="partners__logos-item">
                            <a href="https://www.kuraraynoritake.com/katana/ru/">
                            <img src={kuraray} alt="kuraray" />
                            </a>
                        </div>
                    </div>
                    <div className="partners__logos">
                        <div className="partners__logos-item">
                            <a href="https://geomedi.ru">
                                <img src={geomedi} alt="geomedi" />
                            </a>
                        </div>
                        <div className="partners__logos-item">
                            <a href="https://www.ivoclar.com">
                                <img src={ivoclar} alt="ivoclar" />
                            </a>
                        </div>
                        <div className="partners__logos-item" id='dekema'>
                            <a href="https://www.dekema.com/ru/">
                                <img src={dekema} alt="dekema"/>
                            </a>
                        </div>
                        <div className="partners__logos-item">
                            <a href="https://www.schick-dental.de/en/unternehmen.m">
                                <img src={shick} alt="shick" />
                            </a>
                        </div>
                    </div>
                </section>
        </>
    )
};

export default Main;