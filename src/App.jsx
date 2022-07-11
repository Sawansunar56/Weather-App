import './App.css'
import Home from './components/Home.jsx'
import LocationState from './components/context/locationState.jsx'

function App() {
  
  return (
    <>
    <LocationState>
      <div className="main">
        <Home />
      </div>
    </LocationState>
    </>
      
  )
}

export default App
