import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "@/components/Cube";

function testing() {
  return (
    <>
      <div className="h-[100vh] w-full snap-center">
        <Canvas
        // camera={{
        //     position: [-2, 5, 10],
        // }}
        >
          <OrbitControls enableZoom={false} autoRotate={true} />
          <ambientLight intensity={1} />
          <directionalLight position={[3, 2, 1]} />
          <Cube />
        </Canvas>
      </div>
    </>
  );
}

export default testing;
