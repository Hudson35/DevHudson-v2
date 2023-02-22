import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

function Box(props: any) {
  const texture = useLoader(TextureLoader, "https://avatars.githubusercontent.com/u/27880034?v=4");
  return (
    <mesh {...props} recieveShadow={true} castShadow={true}>
      <boxBufferGeometry />
      <meshPhysicalMaterial map={texture} color={"white"} />
    </mesh>
  );
}

export default Box;
