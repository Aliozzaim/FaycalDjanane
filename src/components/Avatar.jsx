import React, { useEffect, useRef, useState } from "react"
import { useAnimations, useFBX, useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { motion } from "framer-motion-3d"
import { ContactShadows } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
// import { useCharacterAnimations } from "../contexts/CharacterAnimations"
export function Avatar(props) {
  const [objectRotation, setObjectRotation] = useState(Math.PI / -2)
  const { section } = props
  const [started, setStarted] = useState(true)
  const [hardLandingPlayed, setHardLandingPlayed] = useState(false)
  // const { animationIndex, setAnimationIndex, animations, setAnimations } =
  //   useCharacterAnimations()
  // useEffect(() => {
  //   setAnimations(names)
  // }, [names])
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(
    "models/65d86ab61277359fc9d69b3e1.glb"
  )

  const { animations: walkingAnimation } = useFBX("animations/Walking2.fbx")
  const { animations: RightTurn } = useFBX("animations/RightTurn.fbx")
  const { animations: Waving } = useFBX("animations/Waving.fbx")
  const { animations: HardLanding } = useFBX("animations/HardLanding.fbx")
  walkingAnimation[0].name = "walking"
  RightTurn[0].name = "RightTurn"
  Waving[0].name = "Waving"
  HardLanding[0].name = "HardLanding"

  const { actions } = useAnimations(
    [walkingAnimation[0], RightTurn[0], Waving[0], HardLanding[0]],
    group
  )

  useFrame((state) => {})
  const onLeave = () => {
    setStarted(true)
  }
  const handleHover = () => {
    setStarted(false)
  }
  useEffect(() => {
    if (section === 0) {
      if (started) {
        actions["walking"].reset().fadeIn(0.5).play()
        actions["Waving"].fadeOut(0.5).stop() // Stop waving animation if started
      } else {
        actions["Waving"].fadeIn(0.5).play() // Play waving animation if not started
        actions["walking"].fadeOut(0.5).stop() // Stop walking animation if not started
      }
    } else {
      if (!hardLandingPlayed) {
        actions["HardLanding"].reset().fadeIn(0.5).play()
        setHardLandingPlayed(true)
      }
      // Clean-up function, reset animations
      return () => {
        actions["Waving"].reset().fadeOut(0.5)
        actions["walking"].reset().fadeOut(0.5)
      }
    }
  }, [started, actions, section, hardLandingPlayed])

  return (
    <>
      <group
        rotation-y={-Math.PI / 15}
        rotation-x={-Math.PI / 5}
        scale={0.9}
        position={[2, 0, 0]}
      >
        <group
          onPointerOver={handleHover}
          onPointerOut={onLeave}
          position={[0, -0.7, 0]}
          ref={group}
          {...props}
          dispose={null}
        >
          <group name="Scene">
            <group name="Armature">
              <skinnedMesh
                name="avaturn_body"
                geometry={nodes.avaturn_body.geometry}
                material={materials.avaturn_body_material}
                skeleton={nodes.avaturn_body.skeleton}
              />
              <skinnedMesh
                name="avaturn_hair_0"
                geometry={nodes.avaturn_hair_0.geometry}
                material={materials.avaturn_hair_0_material}
                skeleton={nodes.avaturn_hair_0.skeleton}
              />
              <skinnedMesh
                name="avaturn_hair_1"
                geometry={nodes.avaturn_hair_1.geometry}
                material={materials.avaturn_hair_1_material}
                skeleton={nodes.avaturn_hair_1.skeleton}
              />
              <skinnedMesh
                name="avaturn_look_0"
                geometry={nodes.avaturn_look_0.geometry}
                material={materials.avaturn_look_0_material}
                skeleton={nodes.avaturn_look_0.skeleton}
              />
              <skinnedMesh
                name="avaturn_shoes_0"
                geometry={nodes.avaturn_shoes_0.geometry}
                material={materials.avaturn_shoes_0_material}
                skeleton={nodes.avaturn_shoes_0.skeleton}
              />
              <primitive object={nodes.Hips} />
            </group>
          </group>
        </group>

        {/* <motion.mesh
          scale={[-1, -1, 0]}
          animate={{
            scale: section === 0 ? 1 : 0.5,
          }}
          position={[0, -0.75, 1]}
        >
          <boxGeometry args={[1, 0.08, 3]} />
          <meshStandardMaterial color="red" />
        </motion.mesh> */}
      </group>
    </>
  )
}
useGLTF.preload("models/65d86ab61277359fc9d69b3e1.glb")
