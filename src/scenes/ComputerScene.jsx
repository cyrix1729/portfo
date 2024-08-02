import { useState, useRef, lazy, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, PresentationControls } from '@react-three/drei';
import Computer from '../components/Computer';
import screen from '../components/Screen';
import ScreenData from '../Text/ScreenData';
import ScreenData2 from '../Text/ScreenData2';


// Lazy load the components
const Computer1 = lazy(() => import('../components/Computer1'));
const Computer3 = lazy(() => import('../components/Computer3'));
const Computer4 = lazy(() => import('../components/Computer4'));

const Scene = ({ model }) => {
  const groupRef = useRef();
  const [isDay, setTime] = useState(true);
  const texture = screen(ScreenData);
  const texture2 = screen(ScreenData2);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  switch (model) {
    case 0:
      return (
        <group position={[-2, -1, -10]} dispose={null} ref={groupRef}>
          <PresentationControls
            global
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 5, tension: 700 }}
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 100, Math.PI / 100]}
            azimuth={[-Math.PI / 1.4, Math.PI / 1]}
          >
            <Environment preset={isDay ? 'lobby' : 'night'} />
            <group position={[0, 0, 0]}>
              <Computer texture={texture} />
            </group>
          </PresentationControls>
        </group>
      );

    case 1:
      return (
        <group position={[-10, -10, -140]} dispose={null} ref={groupRef}>
          <PresentationControls
            global
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 5, tension: 700 }}
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 100, Math.PI / 100]}
            azimuth={[-Math.PI / 1.4, Math.PI / 1]}
          >
            <Environment preset={isDay ? 'lobby' : 'night'} />
            <group position={[0, 0, 0]}>
              <Computer1 />
            </group>
          </PresentationControls>
        </group>
      );

    case 2:
      return (
        <group position={[-0.4, -0.4, 1]} dispose={null} ref={groupRef}>
          <PresentationControls
            global
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 5, tension: 700 }}
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 100, Math.PI / 100]}
            azimuth={[-Math.PI / 1.4, Math.PI / 1]}
          >
            <Environment preset={isDay ? 'lobby' : 'night'} />
            <group position={[0, 0, 0]}>
              <Computer3 />
            </group>
          </PresentationControls>
        </group>
      );

    case 3:
      return (
        <group position={[-3, -6, -30]} dispose={null} ref={groupRef} rotation={[0, 0, 0.2]}>
          <PresentationControls
            global
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 5, tension: 700 }}
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 100, Math.PI / 100]}
            azimuth={[-Math.PI / 1.4, Math.PI / 1]}
          >
            <Environment preset={isDay ? 'lobby' : 'night'} />
            <group position={[0, 0, 0]}>
              <Computer4 texture={texture2} />
            </group>
          </PresentationControls>
        </group>
      );

    default:
      return null;
  }
};

const ComputerScene = () => {
  const [model, setModel] = useState(0); // Default to model 0
  const prevIndex = () => {
    if (model <= 0) setModel(3);
    else setModel(model - 1);

  };

  const nextIndex = () => {
    if (model >= 3) setModel(0);
    else setModel(model + 1);

  };

  return (
    <div style={{ touchAction: 'none' }}>
      <Suspense
  fallback={
    <>
    <div className="booting-text">
      <div className = 'booting-text2'>
      ( ͡~ ͜ʖ ͡°)
      </div>
    </div>
    </>
  }
>
        <Canvas touch-action="none" camera={{ fov: 50 }}>
          <ambientLight intensity={0.5} />
          <Scene model={model} />
        </Canvas>
      </Suspense>
      <div className = 'cycleButtons'>
      <button onClick={prevIndex} className="nav-button">
        &lt;
      </button>
      <button onClick={nextIndex} className="nav-button">
        &gt;
      </button>
    </div>
    </div>
  );
};

export default ComputerScene;