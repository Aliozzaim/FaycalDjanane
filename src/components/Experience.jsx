import { OrbitControls } from "@react-three/drei"
import { Avatar } from "./Avatar"
import React, { useEffect, useReducer } from "react"

export const Experience = () => {
  return (
    <>
      <Avatar />
      <ambientLight intensity={1} />
    </>
  )
}
