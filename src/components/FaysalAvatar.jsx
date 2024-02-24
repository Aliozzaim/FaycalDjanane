import React, { useEffect, useRef, useState } from "react"
import { useAnimations, useFBX, useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { motion } from "framer-motion-3d"
import { ContactShadows } from "@react-three/drei"
import { useThree } from "@react-three/fiber"

export function FaysalAvatar(props) {
  const { section } = props
  const [currentAnimation, setCurrentAnimation] = useState("hi")
  const [animationPlayed, setAnimationPlayed] = useState(true)
  const group = useRef()
  const { nodes, materials, animations } = useGLTF("/models/FaysalAvatar.glb")
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    if (section === 0) {
      actions["hi"].play()
      setAnimationPlayed(true)
    } else if (section === 1 && !animationPlayed) {
      actions["hi"].fadeIn().play()
    } else if (section === 1 && animationPlayed) {
      actions["hi"].stop()
      actions["landing"].fadeIn(0.5).play()
      setAnimationPlayed(false)
      setTimeout(() => {
        actions["landing"].fadeOut(0.5).stop()
        setCurrentAnimation("hi")
      }, 2000)
    }
  }, [section, animationPlayed, actions, currentAnimation])

  return (
    <>
      {" "}
      <ContactShadows
        rotation={[Math.PI / -2, 0, 0]}
        position={[0, -1.5, 0]}
        opacity={0.5}
        width={10}
        height={10}
        blur={1}
      ></ContactShadows>
      <group position={[1.3, -0.5, 0]}>
        <ContactShadows
          rotation={[Math.PI / -2, 0, 0]}
          position={[0, -1.5, 0]}
          opacity={0.5}
          width={10}
          height={10}
          blur={1}
        ></ContactShadows>
        <motion.group
          rotation={[Math.PI / -8, 0, 0]}
          ref={group}
          // scale={[1.1, 1.1, 1.1]}
          // animate={{
          //   scale: 0.9,
          //   transition: { duration: 0.4 },
          // }}
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
        </motion.group>{" "}
        <mesh
          position={[0, -0.3, -0.2]}
          rotation={[Math.PI / -8, 0, 0]}
          scale={[1, 1, 1]}
        >
          <boxGeometry attach="geometry" args={[1, 0.1, 2]} />
          <meshStandardMaterial
            attach="material"
            metalness={0.5}
            transparent
            opacity={1}
            color="red"
          />
        </mesh>
      </group>
    </>
  )
}

useGLTF.preload("/models/FaysalAvatar.glb")
