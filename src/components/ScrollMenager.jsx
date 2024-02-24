import { useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export const ScrollManager = (props) => {
  const { section, onSectionChange } = props
  const data = useScroll()
  const lastScroll = useScroll()
  const isAnimating = useRef(false)

  data.fill.classList.add("top-0")
  data.fill.classList.add("abosolute")

  useEffect(() => {
    gsap.to(data.el, {
      duration: 1,
      scrollTop: section * data.el.clientHeight,
      ease: "power3.inOut",
      onStart: () => (isAnimating.current = true),
      onComplete: () => (isAnimating.current = false),
    })
  }, [section])

  useFrame(() => {
    if (isAnimating.current) {
      lastScroll.current = data.scroll.current
      return
    }
    const curSection = Math.floor(data.scroll.current * data.pages)
    if (data.scroll.current > lastScroll.current && curSection === 0) {
      onSectionChange(1)
    }
    if (
      data.scroll.current < lastScroll.current &&
      data.scroll.current < 1 / (data.pages - 1)
    ) {
      onSectionChange(0)
    }
    // Logic for Page 2
    if (curSection === 1) {
      // Check if scrolling down and at the top of page 2
      if (data.scroll.current > lastScroll.current) {
        onSectionChange(2)
      }
    }

    // Logic for Page 3
    if (curSection === 2) {
      // Check if scrolling down and at the top of page 3
      if (data.scroll.current > lastScroll.current) {
        onSectionChange(3)
      }
      //   // Check if scrolling up and at the bottom of page 3
      //   if (data.scroll.current < lastScroll.current) {
      //     onSectionChange(2)
      //   }
      // }

      // // Logic for Page 4
      // if (curSection === 3) {
      //   // Check if scrolling down and at the top of page 4
      //   if (data.scroll.current > lastScroll.current) {
      //     // Assuming you have a function for handling Page 4 change
      //     onSectionChange(4)
      //   }
      //   // Check if scrolling up and at the bottom of page 4
      //   if (data.scroll.current < lastScroll.current) {
      //     onSectionChange(3)
      //   }
    }

    lastScroll.current = data.scroll.current
  })
  return null
}
