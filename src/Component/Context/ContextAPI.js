import React from "react"
const ContextApi = React.createContext({
  About: null,
  Service: null,
  Work: null,
  Contact: null,
  ScrollToSection: () => {}
})
export default ContextApi;