import React from 'react';


const Services = () => {
    return (
        <div className='App'>
            <section className='services'>
                <div className="services__title">
                    Услуги
                </div>
                <div className="services__subtitle">
                    Наша зуботехническая лаборатория предоставляет широкий спектр услуг, а также индивидуальный подход к каждому заказчику.
                </div>
                <div className="services__guarantee">
                    <ul>
                        <li>
                            На все виды зуботехнических изделий гарантия составляет 12 месяцев, если иное не было оговорено при приемке работы, о чем была сделана соответствующая запись в заказ наряде.
                        </li>
                        <li>
                            Перебазировка всех видов протезов выполняется бесплатно в течение двух недель с момента сдачи работы.
                        </li>
                        <li>
                            Перебазировка протеза, связанная с атрофией протезного ложа, не является гарантийным случаем и выполняется за полную стоимость;
                        </li>
                        <li>
                            Временные конструкции – гарантия 2 недели;
                        </li>
                        <li>
                            Все виды починок протезов – гарантия 2 недели (если они не сделаны в нашей лаборатории);
                        </li>
                        <li>
                            Гарантия не распространяется на замену матриц;
                        </li>
                    </ul>                    
                </div>
                <div className="services__variants">
                    <div className="services__variants_item" id='variant-item_1'>
                        <div className='services__variants_item-photo'></div>
                        <div className="services__variants_item-title">
                            Коронки
                        </div>
                        <div className="services__variants_item-list">
                            <ul>
                                <li>Безметалловые коронки на ZrO2 и E.max</li>
                                <li>Временные пластмассовые коронки и сплинты</li>
                                <li>Телескопические коронки</li>
                                <li>Металлокерамические коронки</li>
                            </ul>
                        </div>
                    </div>
                    <div className="services__variants_item" id='variant-item_2'>
                        <div className="services__variants_item-title">
                            Протезы
                        </div>
                        <div className="services__variants_item-list">
                            <ul>
                                <li>Бюгельное протезирование</li>
                                <li>Нейлоновое протезирование</li>
                                <li>Съемное протезирование</li>
                            </ul>
                        </div>
                    </div>
                    <div className="services__variants_item" id='variant-item_3'>
                        <div className="services__variants_item-title">
                            Другие услуги
                        </div>
                        <div className="services__variants_item-list">
                            <ul>
                                <li>Абатменты</li>
                                <li>Вкладки</li>
                                <li>Диагностика и реставрация</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Services;