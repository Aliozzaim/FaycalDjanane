import { useFrame } from "@react-three/fiber"
import { motion } from "framer-motion-3d"
import React, { useEffect, useState, useContext, createContext } from "react"

// const MenuContext = createContext()
// export const useMenu = () => useContext(MenuContext)
// export const MenuProvider = ({ children }) => {
//   const [mOpened, setMOpened] = useState(null)

//   return (
//     <MenuContext.Provider value={{ mOpened, setMOpened }}>
//       {children}
//     </MenuContext.Provider>
//   )
// }

export const Header = (props) => {
  const { onSectionChange, setSection, blur, setBlur } = props
  // const { mOpened, setMOpened } = useMenu()

  useEffect(() => {
    const handleScroll = () => {
      const currentSection = Math.floor(window.scrollY / window.innerHeight)
      onSectionChange(currentSection)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [onSectionChange])

  const [menuOpened, setMenuOpened] = useState(blur)

  const toggleMenu = () => {
    setMenuOpened(!blur)
    return setBlur(!blur)
  }
  const closeMenu = (scrollCoff) => {
    setMenuOpened(false)
    setBlur(false)
    return onSectionChange(scrollCoff)
  }
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640 && menuOpened) {
        setMenuOpened(false)
      }
    }
    if (!blur) {
      setMenuOpened(false)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [menuOpened, blur])

  return (
    <>
      <header className="absolute top-0 z-50 w-screen  ">
        <nav className="bg-white relative border-gray-200 px-4 min-[800px]:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen pr-[20px] max-md:pr-[0px]">
            <a href="https://flowbite.com" className="flex items-center">
              <span className="  max-md:text-[14px] self-center text-[17px] max-min-[800px]:text-[14px] font-semibold whitespace-nowrap dark:text-white">
                Faycal Djanane | Mechanical Engineer
              </span>
            </a>
            <div className="flex items-center min-[800px]:order-2">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center max-md:p-0 max-md:mr-0 p-2 ml-1 text-sm text-gray-500 rounded-lg min-[800px]:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 mr-7"
                aria-controls="mobile-menu-2"
                aria-expanded={menuOpened ? "true" : "false"}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={menuOpened ? "hidden w-6 h-6" : "w-6 h-6"}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className={menuOpened ? "w-6 h-6" : "hidden w-6 h-6"}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className={
                menuOpened
                  ? "w-full min-[800px]:flex min-[800px]:w-auto min-[800px]:order-1 absolute bottom-[-218px] z-10 !bg-white right-0 shadow-2xl    "
                  : "hidden justify-between items-center w-full min-[800px]:flex min-[800px]:w-auto min-[800px]:order-1 absolute top-[24%] right-[40px]"
              }
              id="mobile-menu-2"
            >
              <ul className="flex flex-col text-center mt-4 font-medium min-[800px]:flex-row min-[800px]:space-x-8 min-[800px]:mt-0">
                <li>
                  <button
                    onClick={() => {
                      closeMenu(0)
                    }}
                    className=" py-2 pr-4 pl-3 text-black rounded bg-primary-700 min-[800px]:bg-transparent min-[800px]:text-primary-700 min-[800px]:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      closeMenu(1.19)
                    }}
                    className=" py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 min-[800px]:hover:bg-transparent min-[800px]:border-0 min-[800px]:hover:text-primary-700 min-[800px]:p-0 dark:text-gray-400 min-[800px]:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white min-[800px]:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Education
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      closeMenu(2.45)
                    }}
                    className=" py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 min-[800px]:hover:bg-transparent min-[800px]:border-0 min-[800px]:hover:text-primary-700 min-[800px]:p-0 dark:text-gray-400 min-[800px]:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white min-[800px]:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Work
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      closeMenu(3.7)
                    }}
                    className=" py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 min-[800px]:hover:bg-transparent min-[800px]:border-0 min-[800px]:hover:text-primary-700 min-[800px]:p-0 dark:text-gray-400 min-[800px]:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white min-[800px]:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Skills
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      closeMenu(6)
                    }}
                    className=" py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 min-[800px]:hover:bg-transparent min-[800px]:border-0 min-[800px]:hover:text-primary-700 min-[800px]:p-0 dark:text-gray-400 min-[800px]:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white min-[800px]:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
