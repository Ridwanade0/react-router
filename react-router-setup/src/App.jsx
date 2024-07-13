import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"  // this home component is a page i defined 
import Praise from "./Pages/Praise"


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* To me  i think its very nessecary to define the root route to, in your on code you didnt define the root route that is why if you go to the http://localhost:3000 in the browser its blank, you didnt define the root route so there is noting to display when in that route */}
      <Route path="/praise" element={<Praise />} />
         </Routes>
  )
}

export default App