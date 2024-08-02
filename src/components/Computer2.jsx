

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('../../Computer2/Computer2.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.retro_computer_setup_retro_computer_setup_Mat_0.geometry} material={materials.retro_computer_setup_Mat} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('../../Computer2/Computer2.gltf')
