import { OrbitControls } from "@react-three/drei"
import { Avatar } from "./Avatar"
import { FaysalAvatar } from "./FaysalAvatar"
import React, { useEffect, useReducer } from "react"
import { useFrame } from "@react-three/fiber"
import { motion } from "framer-motion-3d"
import { ContactShadows } from "@react-three/drei"

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
        <ContactShadows
          opacity={0.5}
          scale={10}
          blur={0.5}
          far={10}
          resolution={256}
          color="#000000"
        />
        <FaysalAvatar section={section} />
        {/* <Avatar section={section} /> */}
      </motion.group>

      <ambientLight intensity={1} />
    </>
  )
}
