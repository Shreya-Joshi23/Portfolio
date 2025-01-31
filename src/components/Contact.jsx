import React from 'react'
import {useState,useRef} from'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {

  const formRef=useRef();
  const [form,setForm]=useState({
    name:'',
    email:'',
    message:'',
  });

  const [loading,setloading]=useState(false);

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setForm({...form,[name]:value})
  }

  const SERVICE_ID=import.meta.env.VITE_REACT_SERVICE_ID;
  const TEMPLATE_ID=import.meta.env.VITE_REACT_TEMPLATE_ID;
  const API_KEY=import.meta.env.VITE_REACT_API_KEY;


  // LOGIC TO SEND EMAIL
  const handleSubmit=(e)=>{
    e.preventDefault();
    setloading(true);
    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name:form.name,
        to_name:"Shreya Joshi",
        from_email:form.email,
        to_email:'joshi2003shreya@gmail.com',
        message:form.message,
      },
      API_KEY
      )
      .then(()=>{
        setloading(false);
        alert('Thank you. I will get back to you as soon as possible')
        setForm({
          name:'',
          email:'',
          message:'',
        },(error)=>{
          setloading(false);
          console.log(error);
          alert('Something went wrong');
        })
      })
  }

  return (
    <div
      className='xl:mt-12 flex-col-reverse flex overflow-hidden'
    >
      <motion.div
        variants={slideIn('left','between',0.2,1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input 
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input 
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7} 
              type="text"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white text-bold shadow-md shadow-primary rounded-xl'
          >
            {loading?'Sending...':'Send'}
          </button>
        </form>
      </motion.div>

      {/* <motion.div
        variants={slideIn('right','between',0.2,1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas/>
      </motion.div> */}
    </div>
  )
}

export default SectionWrapper(Contact,"contact")