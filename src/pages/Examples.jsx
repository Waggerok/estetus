import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import { Model } from '../components/Model';

//photos
import example1 from '../img/examples__photo/example1.jpeg';
import example2 from '../img/examples__photo/example2.jpeg';
import example3 from '../img/examples__photo/example3.jpeg';

import Carouselka from '../components/Carouselka'


const Examples = () => {
    return (
        <>
            <div className="App">
                <section className='examples'>
                    <div className="examples__title">
                        Примеры наших работ
                    </div>
                    <div className="examples__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tempore fugit sequi illo! Esse, et aut ex reiciendis voluptatum quod, nam labore quos ut recusandae consequatur aliquam laboriosam sunt voluptas.
                        Minima, illum esse, officia quas ipsum voluptas, tempore mollitia modi molestiae praesentium doloremque. Corporis, ipsam! Blanditiis qui nam aliquam at voluptas ducimus vel a esse impedit magni, ad cupiditate labore.
                        Dolores possimus at molestiae quae. Magni quasi odio accusamus minus rem, repellat facilis commodi nobis laudantium cupiditate dolore, dicta consequuntur deserunt aliquam nulla aspernatur fuga natus, praesentium vitae possimus officia?
                    </div>
                    <div className="examples__model">
                        <Canvas>
                            <Environment preset='warehouse'/>
                            <OrbitControls/>
                            <PerspectiveCamera makeDefault position={[-10,70,-150]} />
                            <Model/>
                        </Canvas>
                    </div>
                    <div className="examples__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, explicabo aliquam neque repudiandae natus blanditiis sit aperiam eius delectus qui perspiciatis ipsam ex eaque, sequi quo dolorem omnis rem ipsa.
                        Nihil nisi suscipit consequatur libero hic iste inventore ab atque! Ad, quam pariatur reprehenderit dolores magnam nesciunt reiciendis provident adipisci. Hic iste ea necessitatibus maiores quia, asperiores qui doloribus perferendis.
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