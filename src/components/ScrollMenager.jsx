import { useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export const ScrollManager = (props) => {
  const { section, onSectionChange } = props
  const data = useScroll()
  const lastScroll = useScroll()
  const isAnimating = useRef(false)

  // data.fill.classList.add("top-0")
  // data.fill.classList.add("abosolute")

  useEffect(() => {
    // console.log("scroll", data.scroll.current)
    // console.log("data.pages", data.pages)
    gsap.to(data.el, {
      duration: 1,
      scrollTop: section * data.el.clientHeight,
      ease: "power3.inOut",
      onStart: () => (isAnimating.current = true),
      onComplete: () => (isAnimating.current = false),
    })
  }, [section, data.scroll.current])

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
    if (curSection) {
      // Check if scrolling down and at the top of page 2
      if (
        data.scroll.current > lastScroll.current &&
        data.scroll.current < 1 / (data.pages - 2)
      ) {
        onSectionChange(2)
      }
    }

    // Logic for Page 3
    if (curSection === 2 || curSection === 3) {
      // Check if scrolling down and at the top of page 3
      if (
        data.scroll.current > lastScroll.current &&
        data.scroll.current < 3 / (data.pages - 1)
      ) {
        onSectionChange(3)
      }
      // Check if scrolling up and at the bottom of page 2
      if (
        data.scroll.current < lastScroll.current &&
        data.scroll.current > 2 / (data.pages - 1)
      ) {
        onSectionChange(1)
      }
    }
    // Logic for Page 4
    if (curSection === 3 || curSection == 4) {
      // Check if scrolling down and at the top of page 4
      if (
        data.scroll.current > lastScroll.current &&
        data.scroll.current < 4 / (data.pages - 1)
      ) {
        onSectionChange(4)
      }
      // Check if scrolling up and at the bottom of page 3
      if (
        data.scroll.current < lastScroll.current &&
        data.scroll.current > 3 / (data.pages - 1)
      ) {
        onSectionChange(2)
      }
    }
    if (curSection === 4) {
      // Check if scrolling down and at the top of page 5
      if (
        data.scroll.current > lastScroll.current &&
        data.scroll.current < 5 / (data.pages - 1)
      ) {
        onSectionChange(5)
      }
      // Check if scrolling up and at the bottom of page 4
      if (
        data.scroll.current < lastScroll.current &&
        data.scroll.current > 4 / (data.pages - 1)
      ) {
        onSectionChange(3)
      }
    }
    lastScroll.current = data.scroll.current
  })
  return null
}
