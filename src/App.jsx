import { Canvas } from "@react-three/fiber"
import { Experience } from "./components/Experience"
import { ContactShadows, Scroll, ScrollControls } from "@react-three/drei"
import { Interface } from "./components/Interface"
import React, { Suspense, useState, useRef } from "react"
import { ScrollManager } from "./components/ScrollMenager"
import { Header } from "./components/Header"
import { MotionConfig } from "framer-motion"
import { LoadingPage } from "./components/LoadingPage"
import TracingBeam from "./components/TracingBeam"

import { Html } from "@react-three/drei"

function App() {
  const [section, setSection] = useState(0)
  const [blur, setBlur] = useState(false)
  const [loading, setloading] = useState(false)

  return (
    <>
      <Suspense fallback={<LoadingPage />}>
        <MotionConfig
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 50,
            mass: 5,
            restDelta: 0.0001,
          }}
        >
          <Header onSectionChange={setSection} setBlur={setBlur} blur={blur} />
          {/* <TracingBeam /> */}

          <Canvas
            onClick={() => setBlur(false)}
            className={`${blur ? "blur" : blur}`}
            camera={{ position: [0, 5, 5], fov: 30 }}
          >
            <color attach="background" args={["#ececec"]} />
            <ScrollControls pages={5} damping={0.1}>
              <ScrollManager section={section} onSectionChange={setSection} />
              <Experience section={section} />
              <Scroll html>
                <Interface section={section} />
              </Scroll>
            </ScrollControls>
          </Canvas>
        </MotionConfig>
      </Suspense>
    </>
  )
}

export default App
