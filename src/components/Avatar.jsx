import React, { useEffect, useRef, useState } from "react"
import { useAnimations, useFBX, useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

import { ContactShadows } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
// import { useCharacterAnimations } from "../contexts/CharacterAnimations"
export function Avatar(props) {
  const { camera } = useThree()
  const [objectRotation, setObjectRotation] = useState(Math.PI / -2)
  const [started, setStarted] = useState(true)
  camera.position.set(0, 5, 6)
  // const { animationIndex, setAnimationIndex, animations, setAnimations } =
  //   useCharacterAnimations()
  // useEffect(() => {
  //   setAnimations(names)
  // }, [names])
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(
    "models/65d86ab61277359fc9d69b3e1.glb"
  )
  console.log("animations", animations)
  const { animations: walkingAnimation } = useFBX("animations/Walking2.fbx")
  const { animations: RightTurn } = useFBX("animations/RightTurn.fbx")
  const { animations: Waving } = useFBX("animations/Waving.fbx")
  const { animations: HardLanding } = useFBX("animations/HardLanding.fbx")
  walkingAnimation[0].name = "walking"
  RightTurn[0].name = "RightTurn"
  Waving[0].name = "Waving"
  HardLanding[0].name = "HardLanding"
  console.log(Waving)
  const { actions } = useAnimations(
    [walkingAnimation[0], RightTurn[0], Waving[0], HardLanding[0]],
    group
  )

  console.log(actions)
  console.log("started", started)

  useFrame((state) => {
    // console.log(group.current)
  })
  const onLeave = () => {
    console.log("left")
    setStarted(true)
  }
  const handleHover = () => {
    console.log("hovered")
    setStarted(false)
  }
  useEffect(() => {
    if (started) {
      actions["walking"].reset().fadeIn(0.5).play()
      actions["Waving"].fadeOut(0.5).stop() // Stop waving animation if started
    } else {
      actions["Waving"].fadeIn(0.5).play() // Play waving animation if not started
      actions["walking"].fadeOut(0.5).stop() // Stop walking animation if not started
    }

    return () => {
      // Clean-up function, reset animations
      actions["Waving"].reset().fadeOut(0.5)
      actions["walking"].reset().fadeOut(0.5)
    }
  }, [started, actions])

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
          <ContactShadows
            rotation={[Math.PI / -2, 0, 0]}
            position={[0, -1.5, 0]}
            opacity={0.5}
            width={10}
            height={10}
            blur={1}
          ></ContactShadows>
          <group name="Scene">
            <group name="Armature">
              <skinnedMesh
                name="EyeLeft"
                geometry={nodes.EyeLeft.geometry}
                material={materials.Wolf3D_Eye}
                skeleton={nodes.EyeLeft.skeleton}
                morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
                morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
              />
              <skinnedMesh
                name="EyeRight"
                geometry={nodes.EyeRight.geometry}
                material={materials.Wolf3D_Eye}
                skeleton={nodes.EyeRight.skeleton}
                morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
                morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
              />
              <skinnedMesh
                name="Wolf3D_Body"
                geometry={nodes.Wolf3D_Body.geometry}
                material={materials.Wolf3D_Body}
                skeleton={nodes.Wolf3D_Body.skeleton}
              />
              <skinnedMesh
                name="Wolf3D_Hair"
                geometry={nodes.Wolf3D_Hair.geometry}
                material={materials.Wolf3D_Hair}
                skeleton={nodes.Wolf3D_Hair.skeleton}
              />
              <skinnedMesh
                name="Wolf3D_Head"
                geometry={nodes.Wolf3D_Head.geometry}
                material={materials.Wolf3D_Skin}
                skeleton={nodes.Wolf3D_Head.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
              />
              <skinnedMesh
                name="Wolf3D_Outfit_Bottom"
                geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
                material={materials.Wolf3D_Outfit_Bottom}
                skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
              />
              <skinnedMesh
                name="Wolf3D_Outfit_Footwear"
                geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
                material={materials.Wolf3D_Outfit_Footwear}
                skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
              />
              <skinnedMesh
                name="Wolf3D_Outfit_Top"
                geometry={nodes.Wolf3D_Outfit_Top.geometry}
                material={materials.Wolf3D_Outfit_Top}
                skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
              />
              <skinnedMesh
                name="Wolf3D_Teeth"
                geometry={nodes.Wolf3D_Teeth.geometry}
                material={materials.Wolf3D_Teeth}
                skeleton={nodes.Wolf3D_Teeth.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
              />
              <primitive object={nodes.Hips} />
            </group>
          </group>
        </group>

        <mesh position={[0, -0.75, 1]}>
          <boxGeometry args={[1, 0.08, 3]} />
          <meshStandardMaterial color="red" />
        </mesh>
      </group>
    </>
  )
}
useGLTF.preload("models/65d86ab61277359fc9d69b3e1.glb")
