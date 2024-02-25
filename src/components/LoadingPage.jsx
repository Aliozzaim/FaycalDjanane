import React from "react"
import { motion } from "framer-motion"

export const LoadingPage = () => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-screen bg-[#ececec] flex justify-center items-center">
      <motion.div
        initial={{ scale: 1 }}
        animate={{
          scale: 1,
          rotate: 360,
          repeat: 100,
          repeatType: "reverse",
        }}
        transition={{
          type: "anticipate",

          damping: 100,
          repeat: Infinity,
          duration: 3,
          stiffness: 500,

          mass: 5,
          restDelta: 0.0001,
        }}
      >
        <svg
          height="80px"
          width="80px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 392.138 392.138"
          xmlSpace="preserve"
          fill="#096d1d"
          stroke="#096d1d"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />

          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <g id="SVGRepo_iconCarrier">
            <g>
              <path
                style={{ fill: "#2488FF" }} // corrected style attribute
                d="M357.906,104.805c-18.629-29.172-44.9-52.578-75.971-67.687l-17.492,35.973 c51.035,24.816,82.738,75.462,82.738,132.173c0,80.987-65.887,146.874-146.874,146.874S53.433,286.25,53.433,205.264 c0-41.362,17.636-80.793,47.86-108.46l-5.816-5.844L186.437,0H4.957l68.109,68.439c-15.535,14.474-28.635,31.564-38.452,50.335 c-13.856,26.498-21.181,56.405-21.181,86.489c0,103.042,83.831,186.874,186.874,186.874s186.874-83.832,186.874-186.874 C387.181,169.532,377.058,134.793,357.906,104.805z"
              />
              <polygon
                style={{ fill: "#005ECE" }} // corrected style attribute
                points="95.477,90.96 101.293,96.804 186.437,182.36 186.437,0 "
              />
            </g>
          </g>
        </svg>
      </motion.div>
    </div>
  )
}
