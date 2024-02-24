import { Canvas } from "@react-three/fiber"
import { Experience } from "./components/Experience"
import { ContactShadows, Scroll, ScrollControls } from "@react-three/drei"
import { Interface } from "./components/Interface"
import React, { useState } from "react"
import { ScrollManager } from "./components/ScrollMenager"
import { Header } from "./components/Header"
import { MotionConfig } from "framer-motion"

function App() {
  const [section, setSection] = useState(0)
  const [menupened, setMenuOpened] = useState(false)
  return (
    <>
      <MotionConfig
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 50,
          mass: 5,
          restDelta: 0.0001,
        }}
      >
        <Header
          onSectionChange={setSection}
          SetmenuOpened={setMenuOpened}
          menuOpened={menupened}
        />
        <Canvas camera={{ position: [0, 5, 5], fov: 30 }}>
          <color attach="background" args={["#ececec"]} />
          <ScrollControls pages={5} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Experience section={section} />
            <Scroll html>
              <Interface />
            </Scroll>
          </ScrollControls>
        </Canvas>
      </MotionConfig>
    </>
  )
}

export default App
