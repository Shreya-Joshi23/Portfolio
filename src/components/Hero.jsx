import React from 'react'
import {motion} from 'framer-motion';
import { styles } from '../styles';
import {useTypewriter,Cursor} from 'react-simple-typewriter'

const Hero = () => {

  const [text]=useTypewriter({
    words:['Shreya Joshi'],
    loop:{},
    typeSpeed:120,
    deleteSpeed:80,
  });

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex md:flex-row flex-col items-start gap-5`}
      >
        <div
          className='flex flex-col justify-center items-center mt-5'
        >
          {/* drawing a circle */}
          <div className='w-5 h-5 rounded-full bg-[#915eff]'>
                <div
                  className='w-1 mt-5 ml-2 sm:h-80 h-40 violet-gradient'
                ></div>
          </div>         
        </div>

        <div>
            <h1 className={`${styles.heroHeadText} text-white`}>Hi,I'm <span className='text-[#915eff]'>{text}</span><span className='w-3'><Cursor/></span></h1>
            <p className={`${styles.heroSubText} font-small mt-2 text-white-100`}>
             a passionate programmer and developer <br className='sm:block hidden'></br>eager to showcase my skills and projects.
            </p>
        </div>    
        {/* <img src={ShreyaPortfolio} className='rounded-3xl fixed  shadow-2xl sm:w-full p-10 lg:p-0 lg:mx-auto  lg:w-1/3 h-[30em]' alt="ShreyaImg" />       */}
      </div>
      <div
      className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'
      >
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
            animate={{
              y:[0,24,0]
            }}
            transition={{
              duration:1.5,
              repeat:Infinity,
              repeatType:'loop'
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
            ></motion.div>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero;