import "./App.css"
import routes from "./router"
import "./utils/responsiveness"
import { BrowserRouter, useRoutes } from "react-router-dom"

const Router = () => {
  return useRoutes(routes)
}
function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
