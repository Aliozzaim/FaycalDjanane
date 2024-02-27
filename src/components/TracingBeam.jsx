import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { gsap } from "gsap"

const TracingBeam = (props) => {
  const data = useScroll()
  const { section } = props
  const [beamLength, setBeamLength] = useState(100)

  useEffect(() => {
    console.log("beamLength", beamLength)
    if (section === 0) {
      return setBeamLength(100)
    } else if (section === 1.19) {
      const newBeamLength = Math.abs(section * 280) // Adjust multiplier for desired effect

      setBeamLength(newBeamLength)
    } else if (section === 2.45) {
      const newBeamLength = Math.abs(section * 194) // Adjust multiplier for desired effect

      setBeamLength(newBeamLength)
    } else if (section === 3.7) {
      const newBeamLength = Math.abs(section * 158) // Adjust multiplier for desired effect

      setBeamLength(newBeamLength)
    } else if (section === 5.1) {
      const newBeamLength = Math.abs(section * 134)

      setBeamLength(newBeamLength)
    }
  }, [beamLength, section])

  return (
    <div
      className=" absolute left-[10px] top-[20px]"
      //   style={{ position: "relative", height: "2000px", marginTop: "500px" }}
    >
      <motion.div
        className=" relative"
        style={{
          position: "fixed",
          top: "0",
          left: "1%",

          width: "4px",
          height: beamLength, // Adjust beam length
          backgroundImage:
            "linear-gradient(100deg, rgba(24,204,252,1) 0%, rgba(99,68,245,1) 29%, rgba(48,0,87,1) 100%)", // Gradient background
          zIndex: "9999", // Ensure beam is on top of other content
        }}
        animate={{ scaleY: beamLength / 100 }} // Animate beam length
        transition={{
          scaleY: {
            ease: "linear",
            stiffness: 200,
            damping: 500,
            duration: 1.5,
          }, // Spring animation
        }}
        // Transition duration
      >
        <div
          style={{
            zIndex: "9999",
            backgroundImage:
              "linear-gradient(100deg, rgba(24,204,252,1) 0%, rgba(99,68,245,1) 29%, rgba(48,0,87,1) 100%)", // Gradient background
          }}
          className="w-[8px] h-[8px] object-cover  rounded-full  absolute bottom-[0px] left-0 transform -translate-x-[2px] translate-y-1/2 "
        ></div>
      </motion.div>
    </div>
  )
}

export default TracingBeam
