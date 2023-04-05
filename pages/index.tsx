import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Canvas } from '@react-three/fiber'

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from '@/components/index'

const inter = Inter({ subsets: ['latin'] })

const isSSREnabled = () => typeof window === 'undefined'

export default function Home() {
  return (
    <>
    {/* {
      !isSSREnabled() && "Hello world"
    } */}
      <Head>
        <title>devHudson Portfolio</title>
        <link rel="icon" href="/logo-color.svg" />
      </Head>
      <div className="relative z-0 bg-primary">
        <div className="flex-col gap-0 bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          {/* <StarsCanvas /> */}
        </div>
        
      </div>
    </>
  )
}
