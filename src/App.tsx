import { Route, Routes } from "react-router"
import Header from "./components/Header"
import Home from "./pages/Home"

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<Home />}></Route>
      </Routes>
    </div>
  )
}

export default App
