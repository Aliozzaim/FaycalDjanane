import React, { createContext, useContext, useState } from "react"
import PropTypes from "prop-types"
import { Select as BaseSelect } from "@mui/base/Select"
import { Option as BaseOption } from "@mui/base/Option"
import { useTheme } from "@mui/system"
import clsx from "clsx"
import UnfoldMoreRoundedIcon from "@mui/icons-material/UnfoldMoreRounded"

// // Step 1: Create Context
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

const getOptionColorClasses = ({ selected, highlighted, disabled }) => {
  let classes = ""
  if (disabled) {
    classes += " text-slate-400 dark:text-slate-700"
  } else {
    if (selected) {
      classes +=
        " bg-purple-100 dark:bg-purple-950 text-purple-950 dark:text-purple-50"
    } else if (highlighted) {
      classes +=
        " bg-slate-100 dark:bg-neutral-800 text-slate-900 dark:text-slate-300"
    }
    classes +=
      " hover:dark:bg-neutral-800 hover:bg-slate-100 hover:dark:text-slate-300 hover:text-slate-900"
    classes +=
      " focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400 focus-visible:dark:outline-purple-300"
  }
  return classes
}

const Option = React.forwardRef((props, ref) => {
  return (
    <BaseOption
      ref={ref}
      {...props}
      slotProps={{
        root: ({ selected, highlighted, disabled }) => ({
          className: `list-none p-2 rounded-lg cursor-default last-of-type:border-b-0 ${getOptionColorClasses(
            {
              selected,
              highlighted,
              disabled,
            }
          )}`,
        }),
      }}
    />
  )
})

const Button = React.forwardRef(function Button(props, ref) {
  const { ownerState, ...other } = props
  return (
    <button type="button" {...other} ref={ref}>
      {other.children}
      <UnfoldMoreRoundedIcon />
    </button>
  )
})

Button.propTypes = {
  children: PropTypes.node,
  ownerState: PropTypes.object.isRequired,
}

// // Step 3: Custom Hook to access state
// export const useSelect = () => {
//   return useContext(SelectContext)
// }

export default function UnstyledSelectBasic({ handleSelectedValueChange }) {
  const isDarkMode = useTheme()
  const [selectedValue, setSelectedValue] = useState("Change Animation")

  const handleChange = (event) => {
    const newValue = event.target.childNodes[0].nodeValue
    console.log(event.target.childNodes[0].nodeValue)
    setSelectedValue(newValue)
    handleSelectedValueChange(newValue)
  }
  return (
    <div className={isDarkMode ? "dark" : ""}>
      <Select
        className=" mr-[-800px]"
        defaultValue={selectedValue}
        onChange={handleChange} // Handle change using context function
      >
        <Option disabled value={"Change Animation"}>
          Change Animation
        </Option>
        <Option value={"hi"}>Wave</Option>
        <Option value={"lookingFor"}>Look for</Option>
        <Option value={"pointing"}>Pointing</Option>
        <Option value={"show"}>Show</Option>
        {/* //  <Option value={"walk"}>Walk</Option> */}
        <Option value={"Warm up"}>Warm up</Option>
      </Select>
    </div>
  )
}

const resolveSlotProps = (fn, args) =>
  typeof fn === "function" ? fn(args) : fn

const Select = React.forwardRef(function CustomSelect(props, ref) {
  // Replace this with your app logic for determining dark modes
  const isDarkMode = useTheme()

  return (
    <BaseSelect
      ref={ref}
      {...props}
      className={clsx("CustomSelect", props.className)}
      slots={{
        root: Button,
      }}
      slotProps={{
        ...props.slotProps,
        root: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.root,
            ownerState
          )
          return {
            ...resolvedSlotProps,
            className: clsx(
              `relative text-sm font-sans box-border w-80 px-3 py-2 rounded-lg text-left bg-white dark:bg-neutral-900 border border-solid border-slate-200 dark:border-neutral-700 text-slate-900 dark:text-neutral-300 transition-all hover:bg-slate-50 dark:hover:bg-neutral-800 outline-0 shadow-md shadow-slate-100 dark:shadow-slate-900 ${
                ownerState.focusVisible
                  ? "focus-visible:ring-4 ring-purple-500/30 focus-visible:border-purple-500 focus-visible:dark:border-purple-500"
                  : ""
              } [&>svg]:text-base	[&>svg]:absolute [&>svg]:h-full [&>svg]:top-0 [&>svg]:right-2.5`,
              resolvedSlotProps?.className
            ),
          }
        },
        listbox: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.listbox,
            ownerState
          )
          return {
            ...resolvedSlotProps,
            className: clsx(
              `text-sm font-sans p-1.5 my-3 w-80 rounded-xl overflow-auto outline-0 bg-white dark:bg-neutral-900 border border-solid border-slate-200 dark:border-neutral-700 text-slate-900 dark:text-neutral-300 shadow shadow-slate-200 dark:shadow-neutral-900`,
              resolvedSlotProps?.className
            ),
          }
        },
        popup: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.popup,
            ownerState
          )
          return {
            ...resolvedSlotProps,
            className: clsx(
              `${isDarkMode ? "dark" : ""} z-10`,
              resolvedSlotProps?.className
            ),
          }
        },
      }}
    />
  )
})

Select.propTypes = {
  className: PropTypes.string,
  /**
   * The props used for each slot inside the Input.
   * @default {}
   */
  slotProps: PropTypes.shape({
    listbox: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    popup: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  }),
}