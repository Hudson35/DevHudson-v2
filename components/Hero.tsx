import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

type Props = {}

const Hero = (props: Props) => {
  return (
    <section className="mt-4 w-full h-screen relative mx-auto border-2 border-red-600">
      <div className={`${styles.paddingX} absolute inset-0 top-32 max-w-7xl mx-auto flex flex-row items-center gap-5`}>

      </div>

    </section>
  )
}

export default Hero