import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import { Model } from '../components/Model';

import Carouselka from '../components/Carouselka'


const Examples = () => {
    return (
        <>
            <div className="App">
                <section className='examples'>
                    <div className="examples__title">
                        Портфолио
                    </div>
                    <div className="examples__description">
                        Мы предлагаем вам возможность детально рассмотреть одну из наших работ, которая представлена ниже в формате интерактивной 3D-модели.
                    </div>
                    <div className="examples__model">
                        <Canvas>
                            <Environment preset='warehouse'/>
                            <OrbitControls/>
                            <PerspectiveCamera makeDefault position={[-10,70,-150]} />
                            <Model/>
                        </Canvas>
                    </div>
                    <div className="examples__title" id='photo__title'>
                        Фотографии наших работ
                    </div>
                    <div className="examples__carousel">
                        <Carouselka/>
                    </div>
                </section>
            </div>

            
        </>
    )
};

export default Examples;