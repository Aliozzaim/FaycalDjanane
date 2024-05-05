// import React, { useEffect, useRef, useState } from "react"
// const SelectContext = createContext()

// // Step 2: Create Provider
// export const SelectProvider = ({ children }) => {
//   const [selectedValue, setSelectedValue] = useState("hi") // Default selected value

//   // Step 3: Manage State with a Custom Hook
//   const handleChange = (event) => {
//     console.log(event.target.childNodes[0].nodeValue)
//     setSelectedValue(event.target.childNodes[0].nodeValue)
//   }

//   return (
//     <SelectContext.Provider value={{ selectedValue, handleChange }}>
//       {children}
//     </SelectContext.Provider>
//   )
// }
