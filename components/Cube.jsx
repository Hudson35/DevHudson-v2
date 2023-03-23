import React, {useRef, useState} from "react";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function Cube() {

  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [cubeColor, setCubeColor] = useState('#f5f3f6');

  const textRef = useRef();

  useFrame(state => (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 1))

  const handleCubeClick = () => {
    setClicked(!clicked);
    setCubeColor('#' + Math.floor(Math.random() * 16777215).toString(16));
  }

  const handlePointerOver = () => {
    setCubeColor('#915eff');
  }
  const handlePointerOut = () => {
    setCubeColor('#f5f3f6');
  }
  return (
    <mesh 
      onClick={handleCubeClick}
      scale={clicked ? 1.5 : 1}
      onPointerOver={handlePointerOver}
      onPointerOut={() => handlePointerOut()}
    >
      {/* <boxGeometry args={[1.5, 1.5, 1.5]} /> */}
      <boxGeometry />
      <meshStandardMaterial
        color={cubeColor}
        // color={hovered ? '#915eff' : '#f5f3f6'}
      >
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={["#f5f3f6"]} />
          {/* <color attach="background" args={["#dc9dcd"]} /> */} 
          <Text ref={textRef} fontSize={2} color="#555">
            Hello
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
}

export default Cube;
