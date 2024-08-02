import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three';
export default function Model(props) {
  const { nodes, materials } = useGLTF('../../Computer4/Computer4.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={1}>
        <mesh geometry={nodes.Case_Case1_0.geometry} material={materials.Case1} />
        <mesh 
         geometry={nodes.Screen_Screen1_0.geometry}
         material={new THREE.MeshBasicMaterial({ map: props.texture })}  
         position={[0.067, 10.646, 1.185]} 
         scale={[4.793, 4.352, 1]} />

        <mesh geometry={nodes.Screen_Case_Screen_Case1_0.geometry} material={materials.Screen_Case1} position={[0.058, 10.658, 1.154]} scale={[7.478, 5.667, 1]} />
        <mesh geometry={nodes.Battery_Light_Battery_Light1_0.geometry} material={materials.Battery_Light1} position={[-3.032, 11.383, 1.639]} scale={0.124} />
        <mesh geometry={nodes.Game_Game1_0.geometry} material={materials.Game1} position={[5.827, 2.955, 1.99]} rotation={[-0.547, 0.84, 0.425]} scale={[5.144, 6.08, 0.855]} />
        <mesh geometry={nodes.Buttons_Buttons1_0.geometry} material={materials.Buttons1} />
      </group>
    </group>
  )
}

useGLTF.preload('../../Computer4/Computer4.gltf')
