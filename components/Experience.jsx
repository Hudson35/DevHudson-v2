import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from 'utils/motion';
import Image from 'next/image';


const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement 
      contentStyle={{
        background: '#1d1836',
        color: '#fff',
      }}
      contentArrowStyle={{
        borderRight: '7px solid #232631'
      }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Image 
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">
          {experience.title}
        </h3>
        <p className="text-secondary text-base font-semibold m-0">{experience.company_name}</p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((bulletPoint, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-sm pl-1 tracking-wider"
          >
            {bulletPoint}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
      <motion.div 
        variants={textVariant()}
      >
        <p className="text-sm sm:text-lg text-secondary uppercase tracking-wider">What I have done so far</p>
        <h2 className="text-3xl xs:text-[40px] sm:text-5xl md:text-6xl text-white font-black">Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
              <ExperienceCard 
                key={index}
                experience={experience}
              />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")
