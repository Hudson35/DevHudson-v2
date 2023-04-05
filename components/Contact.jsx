import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { fromHalfFloat } from 'three/src/extras/DataUtils';


const Contact = () => {
  const formRef = useRef();
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    console.log("form values", formValues)
    const { name, value } = event.target;
    setFormValues({
      ...formValues, 
      [name]: value
    });
    
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_mpaq86m', 
      'template_ggcu3b4', 
      {
        from_name: formValues.name,
        to_name: 'Hudson',
        from_email: formValues.email,
        to_email: 'hudsonbirdsong@gmail.com',
        message: formValues.message,
      },
      'E9x5hzstzx36ttEjz'
    ).then(() => {
      setLoading(false);
      alert('Thank you, your message has been sent. I will get back with you as soon as possible.');
      setFormValues({
        name: '',
        email: '',
        message: '',
      })
    }, (error) => {
      setLoading(false);
      console.log(error);
      alert('Something went wrong.');
    })
  }

  return (
    <div className="flex flex-col-reverse xl:flex-row xl:mt-12 justify-center overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className="text-sm sm:text-lg text-secondary uppercase tracking-wider">Get in touch</p>
        <h3 className="text-3xl xs:text-[40px] sm:text-5xl md:text-6xl text-white font-black">Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-6"
        >
          <label className="flex flex-col"><span className="text-white font-medium mb-0">Your name</span></label>
          <input 
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            placeholder="What's your name?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
          />
          <label className="flex flex-col"><span className="text-white font-medium mb-0">Your email</span></label>
          <input 
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            placeholder="What's your email?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
          />
          <label className="flex flex-col"><span className="text-white font-medium mb-0">Your message</span></label>
          <textarea 
            rows="7"
            name="message"
            value={formValues.message}
            onChange={handleChange}
            placeholder="Write message..."
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
          />
          <button 
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..."  : "Send"}
          </button>
        </form>
      </motion.div>

      {/* <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 h-[350px] md:h-[550px] xl:h-auto"
      >
        <EarthCanvas />
      </motion.div> */}
    </div>
  )
}

export default SectionWrapper(Contact, "contact")