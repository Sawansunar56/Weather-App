import './App.css'
import Home from './components/Home'
import LocationState from './components/context/locationState'

function App() {
  
  return (
    <>
    <LocationState>
      <div className="App d-flex justify-content-center" style={{height: '90vh'}}>
        <Home />
      </div>
    </LocationState>
    </>
      
  )
}

export default App
