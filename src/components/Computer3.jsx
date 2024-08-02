
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('../../Computer3/Computer3.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.004}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, -5.373, -41.867]} rotation={[-Math.PI / 2, 0, 0]} scale={120.572}>
        
           
          </group>
          <mesh geometry={nodes.Comp_Screen000_TerminalMaterial_0.geometry} material={materials.TerminalMaterial} position={[18.161, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={212.25} />
          <mesh geometry={nodes.Comp_Screen002_TerminalMaterial_0.geometry} material={materials.TerminalMaterial} position={[18.161, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={212.25} />
        </group>
      </group>
    </group>
  )
}
useGLTF.preload('../../Computer3/Computer3.gltf')
