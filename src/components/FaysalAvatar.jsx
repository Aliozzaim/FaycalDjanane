import React, { useEffect, useRef, useState } from "react"
import { Float, useAnimations, useFBX, useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { motion } from "framer-motion-3d"
import { ContactShadows } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { MeshDepthMaterial } from "three"
export function FaysalAvatar(props) {
  const { section } = props
  const [currentAnimation, setCurrentAnimation] = useState("hi")
  const [animationPlayed, setAnimationPlayed] = useState(true)
  const [competed, setcompeted] = useState(false)
  const group = useRef()
  const { nodes, materials, animations } = useGLTF("/models/Favatar.glb")
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions[currentAnimation].play()
    // if (condition) {

    // } else {
    //   actions["hi"].play()
    // }

    if (section == 0) {
      console.log("tekrar 0 ")
      setCurrentAnimation("hi")
      setAnimationPlayed(true)
    } else if (section === 1 && !animationPlayed) {
      //   actions["hi"].fadeIn(2).play()
    } else if (section === 1 && animationPlayed) {
      actions[currentAnimation].fadeOut(0.2)
      actions["hi"].fadeOut(0.2)
      actions["landing"].fadeIn(0.5).play()
      setAnimationPlayed(false)
      setTimeout(() => {
        actions["landing"].fadeOut(0.5)
        setCurrentAnimation("pointing")
      }, 2000)
    } else if (section == 2) {
      actions["pointing"].fadeOut(0.2)
      actions["landing"].play()
      setAnimationPlayed(false)
      setTimeout(() => {
        actions["landing"].fadeOut(0.5)
        setCurrentAnimation("show")
      }, 100)
    } else if (section == 3) {
      actions["show"].fadeOut(0.2)
      actions["landing"].play()

      setTimeout(() => {
        actions["landing"].fadeOut(0.5)
        setCurrentAnimation("lookingFor")
      }, 100)
    } else if (section == 5) {
      actions["lookingFor"].fadeOut(0.2)
      actions["landing"].play()

      setTimeout(() => {
        actions["landing"].fadeOut(0.5)
        setCurrentAnimation("Armature.003|mixamo.com|Layer0")
      }, 100)
    }
  }, [section, animationPlayed, actions, currentAnimation])

  return (
    <>
      <group position={[1.3, -0.5, 0]}>
        <motion.group rotation={[Math.PI / -8, 0, 0]} ref={group}>
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
        </motion.group>
        <motion.mesh
          animate={{
            scale: section === 0 ? 0.2 : 0.1,
          }}
          position={[0, -0.2, -0.2]}
          rotation={[Math.PI / -8, 0, 0]}
          scale={[0.2, 0.2, 0.5]}
        >
          <circleGeometry args={[3.8, 32]} />
          <meshStandardMaterial
            attach="material"
            color={0x2ecc71}
            metalness={0.8}
            roughness={0.1}
            emissive={0x00ff00}
            emissiveIntensity={0.5}
            transparent={false}
          />
        </motion.mesh>
      </group>
    </>
  )
}

useGLTF.preload("/models/Favatar.glb")
