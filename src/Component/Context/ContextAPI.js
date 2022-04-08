import React from "react"
const ContextApi = React.createContext({
  About: null,
  Service: null,
  Work: null,
  Contact: null,
  darkMode: false,
  toggleMode: () => {},
  ScrollToSection: () => {}
})
export default ContextApi;