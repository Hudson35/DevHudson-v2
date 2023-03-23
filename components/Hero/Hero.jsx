import { motion } from 'framer-motion';
import { styles } from '../../styles';
import { ParentComputers } from '../canvas';
import NoSSRComputers from '@/components/canvas/NoSSRWrapper'

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "@/components/Cube";

const Hero = () => {
  return (
    <section role="region" className="w-full px-6 sm:px-16 border-2 border-purple-600 mt-2">      
      <div className="w-full lg:w-[80%] flex flex-col md:grid grid-cols-2 mx-auto">
        
        <div className="inset-0 top-32 flex flex-row items-center gap-5 border-2 border-green-600">
          <div className="flex flex-col justify-center items-center mt-5 border-2 border-blue-600">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className="text-[#915eff]">Hudson</span></h1>
            <p role="paragraph1" className={`${styles.heroHeadText}`}>
              I develop user interfaces, web  applications, and 3D visuals 
            </p>
            <p role="paragraph2" className={`${styles.heroSubOfSubText}`}>
              Go ahead and give the cube a <span className="text-[#915eff]">click</span>, <span className="text-[#915eff]">hover</span> or even a <span className="text-[#915eff]">spin</span> and see what happens 
            </p>
          </div>
        </div>
        <div className="border-2 border-blue-500">
          <Canvas
            camera={{ fov: 25, position: [3, 2.3, 3]}}
          >
            <OrbitControls enableZoom={false} autoRotate={true} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </div>

      </div>
      

    </section>
  )
}

export default Hero