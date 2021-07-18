import { useState } from 'react'
import './App.css';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Signin from './components/Signin/Signin'
import Register from './components/Register/Register'
import Rank from './components/Rank/Rank'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import Particles from 'react-particles-js';

// import Clarifai from 'clarifai'

// const app = new Clarifai.App({
//   apikey: '38fcc7d50a6348069eac42efa5e459c7'
// })

function App() {  
  const [input, setInput] = useState('')
  const [route, setRoute] = useState('Signin')
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [temp, setTemp] = useState('')

  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [entries, setEntries] = useState(0)
  const [joined, setJoined] = useState('')

  //let temp = '';

  const loadUser = (user) => {
      setId(user.id);
      setName(user.name);
      setEmail(user.email);
      setEntries(user.entries);
      setJoined(user.joined);
      console.log(user);
  }

  const onInputChange = (event) => {
    // console.log(event.target.value);
    if(event.target.value != ''){
      setTemp(event.target.value);
    }
  }

  // componentDidMount() {
  //   fetch('http://localhost:5000/')
  //     .then(response => response.json())
  //     .then(console.log)
  // }

  // const expressConnect = () => {
  //   // console.log('was');
  //   fetch('http://localhost:5000')
  //     .then(response => response.json())
  //     .then(console.log)
  // }

  const onRouteChange = (Route) => {
    if(Route === 'signout') {
      setIsSignedIn(false);
      
      // setRoute('home')
    }else if(Route === 'home') {
      setIsSignedIn(true)
    }else if(Route === "Signin"){
      setIsSignedIn(false)
      setInput('');
    }
        setRoute(Route)
    // console.log(isSignedIn, Route)
  }

  const onButtonSubmit = () => {
    console.log('temp',temp)
    if(1){
      console.log('id', id);
      fetch('https://fierce-refuge-33724.herokuapp.com/image', {
        method: 'put',
        headers: {'content-Type': 'application/json'},
        body: JSON.stringify({
          id: id
        })
      })
      .then(response => response.json())
      .then(entries => {
        // console.log('res',entries)
        setEntries(entries)
      })
        
        // ;
      
    }

    setInput(temp)
  }
  
  return (
    <div className="App">
      {/* {expressConnect()} */}
      
      <Particles 
    params={{
	    "particles": {
	        "number": {
	            "value": 100
	        },
	        "size": {
	            "value": 4
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true, 
	                "mode": "repulse"
	            }
	        }
	    }
	}} className="particles" />
      <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange}/>
      { route === 'home' ?
        <div>
        <Logo />
        <Rank name={name} entries={entries}/>
        <ImageLinkForm 
            onInputChange={onInputChange}
            onButtonSubmit={onButtonSubmit}/>
        <FaceRecognition applySrc={input}/>
      </div> :
      (route === "Signin" ?
      <Signin onRouteChange={onRouteChange} loadUser={loadUser}/> :
      <Register onRouteChange={onRouteChange} loadUser={loadUser}/>
      )}
    </div>
  );
}

export default App;
