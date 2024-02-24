import { Canvas } from "@react-three/fiber"
import { Experience } from "./components/Experience"
import { ContactShadows, Scroll, ScrollControls } from "@react-three/drei"
import { Interface } from "./components/Interface"
function App() {
  return (
    <Canvas camera={{ position: [0, 5, 5], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <ScrollControls pages={5} damping={0.1}>
        <Experience />
        <Scroll html>
          <Interface />
        </Scroll>
      </ScrollControls>
    </Canvas>
  )
}

export default App
