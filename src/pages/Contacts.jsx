import React from 'react';

//Components
import YandexMap from '../components/YandexMap';
import Line from '../components/UI/Line/Line';
import ContactsInformation from '../components/UI/ContactsInformation/ContactsInformation';

//Icons
import { RiInstagramLine } from 'react-icons/ri';

const Contacts = () => {
    return (
        <div className="App">
            <div className="contacts">
                <div className="contacts__title">
                    Контакты
                </div>
                <YandexMap/>
                <Line/>
                <div className="contacts__info">
                    <div className="contacts__info_location">
                        <ContactsInformation 
                            title='Наш фактический адрес:' 
                            description='г. Реутов, Юбилейный пр-кт, д 48.'
                            description2=''
                        />
                        <ContactsInformation
                            title='Время работы лаборатории:'
                            description='пн.-пт. с 9:00 до 20:00, без перерыва.'
                            description2='вс - выходной'
                        />

                    </div>
                    <div className="contacts__info_connections">
                        <ContactsInformation 
                            title='Электронная почта:' 
                            description='info@EstetusLab.ru'
                            description2=''
                        />
                        <div className="contacts__info_connections_telephone">
                            <div className="contacts__info_connections_telephone-title">
                                Наш телефон:
                            </div>
                            <div className="contacts__info_connections_telephone-description">
                                <a href='tel: 84957607775'> 8 (495) 760-77-75 </a>
                            </div>
                        </div>
                        <div className="contacts__info_connections_links">
                            <div className="contacts__info_connections_links-title">
                                Наши соцсети:
                            </div>
                            <div className="contacts__info_connections_links-description">
                                <a href='https://www.instagram.com/estetus_lab_?igsh=MXVlcWU5a3Izamtncg=='>
                                    <RiInstagramLine size={30}/>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
};

export default Contacts;