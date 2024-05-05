import { OrbitControls } from "@react-three/drei"
import { Avatar } from "./Avatar"
import { FaysalAvatar } from "./FaysalAvatar"
import React, { useEffect, useReducer } from "react"
import { useFrame } from "@react-three/fiber"
import { motion } from "framer-motion-3d"
import { ContactShadows } from "@react-three/drei"
import { Html } from "@react-three/drei"
import UnstyledSelectBasic from "./input"
import { useState } from "react"

export const Experience = (props) => {
  const [selectedValue, setSelectedValue] = useState(null)

  const handleSelectedValueChange = (newValue) => {
    setSelectedValue(newValue)
  }

  const { section } = props
  return (
    <>
      <motion.group
        position={(0, 0, 0)}
        skale={(0.9, 0.9, 0.9)}
        animate={{
          y: section === 0 ? 0 : -1,
        }}
        className="  relative"
      >
        <ContactShadows
          opacity={0.5}
          scale={10}
          blur={0.5}
          far={10}
          resolution={256}
          color="#000000"
        />
        {section === 0 ? (
          <Html className="absolute top-0 right-[-600px]">
            <UnstyledSelectBasic
              handleSelectedValueChange={handleSelectedValueChange}
            ></UnstyledSelectBasic>
          </Html>
        ) : null}
        <FaysalAvatar selectedValue={selectedValue} section={section} />
      </motion.group>

      <ambientLight intensity={1} />
    </>
  )
}
