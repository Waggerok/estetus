import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export function Model(props) {
  const ref = useRef();

  const { nodes, materials } = useGLTF('/Modelka.glb');

  useFrame(() => {
    ref.current.rotation.y += 0.005
  }, []);
  
  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh castShadow receiveShadow geometry={nodes.mmm_1.geometry} material={materials.Челюсть} position={[0,-15,0]}/>
      <mesh castShadow receiveShadow geometry={nodes.mmm_2.geometry} material={materials.Зубы} position={[0,-15,0]}/>
    </group>
  )
}

useGLTF.preload('/Modelka.glb')