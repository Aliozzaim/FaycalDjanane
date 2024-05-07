import React, { useCallback, useEffect, useRef, useState } from "react"
import { Float, Html, useAnimations, useFBX, useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { motion } from "framer-motion-3d"
import { useContext } from "react"

export function FaysalAvatar(props) {
  const { section, selectedValue } = props
  const [currentAnimation, setCurrentAnimation] = useState("hi")
  const [animationPlayed, setAnimationPlayed] = useState(true)
  const [competed, setcompeted] = useState(false)
  const group = useRef()
  const { nodes, materials, animations } = useGLTF("/models/Favatar.glb")
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    console.log(actions)
    console.log("useEffect", selectedValue)
    // if (selectedValue) {
    //   actions[currentAnimation].fadeOut(0.2)
    //   console.log("Actions for Selected Value:", actions[selectedValue])
    //   setTimeout(() => {
    //     setCurrentAnimation(selectedValue)
    //     actions[selectedValue].fadeIn(0.5).play()
    //   }, 200)
    // }
    if (selectedValue == "Look for") {
      changeAnimation("lookingFor")
    } else if (selectedValue == "Wave") {
      changeAnimation("hi")
    } else if (selectedValue == "Pointing") {
      changeAnimation("pointing")
    } else if (selectedValue == "Warm up") {
      changeAnimation("Armature.003|mixamo.com|Layer0")
    } else if (selectedValue == "Show") {
      changeAnimation("show")
    }

    if (section === 0 && selectedValue == null) {
      actions[currentAnimation].fadeIn(0.2).play()
    } else if (section === 1.19) {
      let landingCompleted = false
      changeAnimation("landing", () => {
        setTimeout(() => {
          landingCompleted = true
          actions["landing"].fadeOut(0.3)
        }, 2200)
      })
    }
  }, [section, selectedValue])

  const changeAnimation = (animation, callback = () => {}) => {
    actions[currentAnimation].fadeOut(0.2)
    setTimeout(() => {
      setCurrentAnimation(animation)
      actions[animation].fadeIn(0.2).play()
      callback()
    }, 200)
  }

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
            attach="ma+terial"
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
