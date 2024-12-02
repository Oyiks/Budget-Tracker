import Dashboard from "./Dashboard"
import GlobalStyles from "./GlobalStyles"
import Homepage from "./Homepage"
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route 
        path="/" 
        element={<Homepage />} 
        />
        <Route 
        path="/Dashboard" 
        element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App