import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import LoginPage from "./components/LoginPage";
import LandingPage from './components/LandingPage';
import GoalsPage from './components/GoalsPage';
import firebase from './service/firebase';
import { AuthProvider } from './contexts/AuthContext';
import './stylesheets/App.scss';
import { Container } from 'react-bootstrap';
import LoginPageBootstrap from './components/LoginPageBootstrap';

const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;

function App() {
  const [user, setUser] = useState(null);

  useEffect(()=> {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    })
  }, []);

  console.log(user);

  return (
    // <AuthProvider> 
    //   <Container className="d-flex align-items-center justify-content-center"
    //   style={{minHeight: "100vh"}}>
    //   <div className="w-100" style={{maxWidth: "400px"}}>
     <div className="main-page">
      <Router>
        <Switch>
          {user ?
            <>
             <Route path="/" exact component={()=> <LandingPage user={user} cloudName={cloudName}/>}/>
             <Route path="/goals" exact component={() => <GoalsPage cloudName={cloudName}/>}/>
            </>
            :<Route path="/" exact component={() => <LoginPage cloudName={cloudName}/>}/>          
          }
          
        </Switch>
      </Router>
          {/* {user? <LandingPage user={user} /> : <LoginPage/>} */}
      </div>
    //* </div>
    //  </Container>
    // </AuthProvider>
  );
}

export default App;
