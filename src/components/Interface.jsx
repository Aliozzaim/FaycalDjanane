import { motion } from "framer-motion"
import React from "react"
import { useAnimations, useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useThree } from "@react-three/fiber"
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi"
import { Button, Timeline } from "flowbite-react"

const Section = (props) => {
  const { children } = props
  return (
    <motion.section
      initial={{ opacity: 0, y: 150 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
      className="mx-auto  h-screen w-screen flex flex-col justify-center items-start px-8"
    >
      {children}
    </motion.section>
  )
}
export const Interface = (props) => {
  const { section } = props
  return (
    <>
      <div className="flex flex-col items-center w-screen">
        <AboutSection></AboutSection>
        <EducationSection></EducationSection>
        <WorkSection section={section}></WorkSection>
        <SkillsSection></SkillsSection>
        <ContactSection></ContactSection>
      </div>
    </>
  )
}
const AboutSection = (props) => {
  const { children } = props
  return (
    <Section>
      <div className="">
        <h1 className="text-6xl font-[700] leading-snug">
          Hi, I'm<br></br>
          <span className="bg-white text-black px-[20px] italic">
            Faycal Djanane
          </span>
        </h1>
        <p className="text-xl text-gray-700 mt-4 max-w-[35%] my-8">
          I'm a mechanical engineer with a passion for eco-design and customer
          service. With a{" "}
          <span className="bg-white font-[600] ">
            {" "}
            Master's degree in Mechanical and Automotive Engineering{" "}
          </span>
          , I thrive on tackling challenges. Let's connect and collaborate to
          make a difference together!
        </p>
        <button
          onClick={() => {}}
          className="bg-[#025c38] text-white px-4 py-2 mt-4"
        >
          Contact me
        </button>
      </div>
    </Section>
  )
}

const skills = [
  { title: "Arabic", level: 10, note: "Native" },
  { title: "English", level: 8.5, note: "Fluent" },
  { title: "French", level: 6, note: "Intermediate" },
  { title: "Polish ", level: 1, note: "Beginner" },
  {
    title: "MS Office Excel",
    level: 5,
    note: "Advanced",
  },
  { title: "SolidWorks", level: 7, note: "Advanced" },
  { title: "AutoCAD", level: 7, note: "Advanced" },
  { title: "Femap", level: 7, note: "Advanced" },
  { title: "CATIAV5", level: 7, note: "Advanced" },
]

const SkillsSection = () => {
  return (
    <Section>
      <h1 className="text-5xl font-bold">Skills</h1>
      <motion.div whileInView={"visible"} className="mt-4 space-y-4 mb-[80px]">
        {skills.map((skill, index) => (
          <div className="w-64" key={index}>
            <motion.h3
              initial={{ opacity: 0 }}
              variants={{
                visible: {
                  opacity: 1,
                  transition: { duration: 1, delay: 1 + index * 0.2 },
                },
              }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.5 }}
              className="text-xl text-gray-800 font-bold flex justify-between"
            >
              {skill.title}{" "}
              <span className="text-[10px] opacity-70 text-black">
                {skill.note}
              </span>
            </motion.h3>
            <motion.div className="w-full h-2 bg-gray-300 mt-2 rounded-full">
              <motion.div
                variants={{
                  visible: {
                    scaleX: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}
                initial={{
                  scaleX: 0,
                  originX: 0,
                }}
                className="h-full bg-[#025c38] rounded-full"
                style={{ width: `${skill.level * 10}%` }}
              ></motion.div>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </Section>
  )
}

const ContactSection = () => {
  return (
    <Section>
      <section className=" text-start mb-[250px]">
        <div className="">
          <div className="container mx-auto xl:px-32">
            <div className="grid items-center lg:grid-cols-2 ">
              <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                <div className="relative z-[1] block rounded-lg w-[150%]  !bg-[hsla(0,0%,0%,0.4)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[2px] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                  <h2 className="mb-12 text-3xl text-white font-bold">
                    Contact me
                  </h2>
                  <form>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                      <input
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleInput90"
                        placeholder="Name"
                      />
                      <label
                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        htmlFor="exampleInput90"
                      >
                        Name
                      </label>
                    </div>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                      <input
                        type="email"
                        className="peer block min-h-[auto] w-full rounded border bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleInput91"
                        placeholder="Email address"
                      />
                      <label
                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        htmlFor="exampleInput91"
                      >
                        Email address
                      </label>
                    </div>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                      <textarea
                        className="peer  block min-h-[auto] w-full rounded border bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Your message"
                      ></textarea>
                      <label
                        htmlFor="exampleFormControlTextarea1"
                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      >
                        Message
                      </label>
                    </div>
                    {/* <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
                      <input
                        className="relative float-left bg-white mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                        type="checkbox"
                        value=""
                        id="exampleCheck96"
                        checked
                      />
                      <label
                        className="inline-block pl-[0.15rem] hover:cursor-pointer text-white opacity-45"
                        for="exampleCheck96 "
                      >
                        Send me a copy of this message
                      </label>
                    </div> */}
                    <button
                      type="button"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      className="inline-block w-full bg-[#025c38] rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] lg:mb-0"
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div>
              <div className="md:mb-12 lg:mb-0 max-[1035px]:hidden">
                <div className="relative  h-[600px] w-[350px] rounded-lg shadow-lg dark:shadow-black/20">
                  <iframe
                    src="https://maps.google.com/maps?q=Pozna%C5%84%2C%20Poland&t=k&z=13&ie=UTF8&iwloc=&output=embed"
                    className="absolute left-0 top-0 h-full w-full rounded-lg"
                    frameBorder="0"
                    allowFullScreen
                    lazy="loading"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Section>
  )
}

const WorkSection = (props) => {
  const { section } = props
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 150 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1 },
        }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className={`${2 ? "mt-[000px]" : ""}  self-start`}
      >
        <Timeline className=" right-[-45px] max-w-[50%]">
          <Timeline.Item className="">
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Time>
                From August 2023 to September 2023 - Poznan , Poland
              </Timeline.Time>
              <Timeline.Title>Poznan University of Technology</Timeline.Title>
              <Timeline.Body>
                - Actively contributed to team-based problem-solving endeavors,
                analyzing issues and devising solutions collectively. <br></br>{" "}
                -Engaged in workshops and presentations to enhance
                project-related knowledge and skills, fostering personal and
                professional growth. try to make this more small. <br></br>{" "}
                -Implemented meticulous sorting and organization of files,
                spreadsheets, and reports to optimize accessibility and workflow
                efficiency.
              </Timeline.Body>
              {/* <Button>
              Learn More
              <HiArrowNarrowRight className="ml-2 h-3 w-3" />
            </Button> */}
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Time>
                {" "}
                From September 2022 to December 2022 - Rouib, Algeria
              </Timeline.Time>
              <Timeline.Title>
                National Company for Industrial Vehicles
              </Timeline.Title>
              <Timeline.Body>
                - Developing hands-on expertise in mechanical engineering tools
                and software. <br></br> -Engaged in workshops and presentations
                to enhance project-related knowledge and skills, fostering
                personal and professional growth. try to make this more small.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Time>
                From October 2020 to October 2021 - Rouib, Algeria
              </Timeline.Time>
              <Timeline.Title>
                Customer Service Specialist at Call Center
              </Timeline.Title>
              <Timeline.Body>
                - Demonstrated exceptional communication skills, handling an
                average of 40 customer inquiries per day with professionalism
                and efficiency. <br></br> -Assisted customers with their
                technical and operational queries related to products via Avaya
                desktop, phone, email, chat, and ticketing systems.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline>
      </motion.section>
      -
    </>
  )
}
const EducationSection = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 150 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1 },
        }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="self-start "
      >
        <Timeline className="s right-[-45px] max-w-[50%] mb-[17%]">
          <Timeline.Item className="">
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Time>
                Since February 2023 Poznan University of Technology Poznań,
                Poland
              </Timeline.Time>
              <Timeline.Title className="my-[5px]">
                MSc Mechanical and Automotive Engineering
              </Timeline.Title>
              <Timeline.Body>
                - Thesis Statement:Application of selected eco-design strategies
                in the development of Electric Scooters. <br></br> -Implemented
                meticulous sorting and organization of files, spreadsheets, and
                reports to optimize accessibility and workflow efficiency.
              </Timeline.Body>
              {/* <Button>
              Learn More
              <HiArrowNarrowRight className="ml-2 h-3 w-3" />
            </Button> */}
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Time>
                University M’hamed Bougara Boumerdes Algeria From September 2017
                to September 2021 - Boumerdes, Algeria
              </Timeline.Time>
              <Timeline.Title className="my-[5px]">
                BSc Mechanical Engineering
              </Timeline.Title>
              <Timeline.Body>
                Thesis Statement: Design and Simulation of an Ampliroll Box on
                k120
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline>
      </motion.section>
    </>
  )
}
