import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import LandingPage from './pages/LandingPage';
import GoalsPage from './pages/GoalsPage';
import SettingsPage from './pages/SettingsPage';
import TodayPage from './pages/TodayPage';
import TrendsPage from './pages/TrendsPage';
import Footer from './components/Footer';
import firebase from './service/firebase';
import { AuthProvider } from './contexts/AuthContext';
import './stylesheets/App.scss';
import { Container } from 'react-bootstrap';
import LoginPageBootstrap from './pages/LoginPageBootstrap';

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
             <Route path="/trends" exact component={() => <TrendsPage cloudName={cloudName}/>}/>
             <Route path="/today" exact component={() => <TodayPage cloudName={cloudName}/>}/>
             <Route path="/settings" exact component={() => <SettingsPage cloudName={cloudName}/>}/>
             <Footer />
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
