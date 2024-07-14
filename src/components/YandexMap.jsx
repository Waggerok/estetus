import React from 'react';
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';

const YandexMap = () => {
    return (
        <YMaps>
            <div style={{marginBottom: '50px', width:'100%'}}>
                <Map 
                    defaultState={{ center: [55.752278, 37.873799], zoom: 17}} 
                    width={'100%'}
                    height={'50vh'}
                > 
                <Placemark geometry={[55.752278, 37.873799]}/>
                </Map>
            </div>
        </YMaps>
    );
};

export default YandexMap;