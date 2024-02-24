import { OrbitControls } from "@react-three/drei"
import { Avatar } from "./Avatar"
import { FaysalAvatar } from "./FaysalAvatar"
import React, { useEffect, useReducer } from "react"
import { useFrame } from "@react-three/fiber"
import { motion } from "framer-motion-3d"

export const Experience = (props) => {
  const { section } = props
  return (
    <>
      <motion.group
        position={(0, 0, 0)}
        skale={(0.9, 0.9, 0.9)}
        animate={{
          y: section === 0 ? 0 : -1,
        }}
      >
        <FaysalAvatar section={section} />
        {/* <Avatar section={section} /> */}
      </motion.group>

      <ambientLight intensity={1} />
    </>
  )
}
