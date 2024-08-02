
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('../../Computer1/Computer1.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-12.119, 2.885, 4.47]} rotation={[-Math.PI / 2, 0, 0.035]} scale={100}>
            <mesh geometry={nodes.KLAWIATURA_Klawiatura_0.geometry} material={materials.Klawiatura} />
            <mesh geometry={nodes.KLAWIATURA_Klawiatura_0_1.geometry} material={materials.Klawiatura} />
          </group>
          <group position={[25.942, 15.509, 1.349]} rotation={[-Math.PI / 2, 0, -0.014]} scale={100}>
            <mesh geometry={nodes.MONITOR_Material_0.geometry} material={materials.Material} />
            <mesh geometry={nodes.MONITOR_Material_0_1.geometry} material={materials.Material} />
            <mesh geometry={nodes.MONITOR_Material_0_2.geometry} material={materials.Material} />
          </group>
          <group position={[13.817, 4.481, -51.626]} rotation={[0.047, 0.657, -1.6]} scale={100}>
            <mesh geometry={nodes.SKRZYNKA_Skrzynka_0.geometry} material={materials.Skrzynka} />
            <mesh geometry={nodes.SKRZYNKA_Skrzynka_0_1.geometry} material={materials.Skrzynka} />
          </group>
          <mesh geometry={nodes.WTYK_WTYK_0.geometry} material={materials.WTYK} position={[48.767, 0.866, 19.974]} rotation={[-Math.PI / 2, 0, -2.959]} scale={100} />
          <mesh geometry={nodes.KABEL_MYSZ_0.geometry} material={materials.MYSZ} position={[-6.647, 1.09, 37.826]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        
        
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('../../Computer1/Computer1.gltf')
