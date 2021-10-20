import React, { useRef, useState } from 'react';
import { signInWithGoogle } from '../service/firebase';
import {Card, Button, Form, Alert} from 'react-bootstrap';
import '../stylesheets/App.scss';
import {Image, Transformation} from 'cloudinary-react';
import '../stylesheets/pages/LoginPage.scss';
import { useAuth } from '../contexts/AuthContext';
const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;

const LoginPageBootstrap = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const {signup} = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();
    console.log('insideHandleSubmit');
    if(passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }
    console.log('after validation');
    try{
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch(err) {
      setError('Signup failed');
    }
    setLoading(false);
  }

  return (
    <div>
            
      <header>
      <Image 
            className="logo-large"
            cloudName={cloudName}
            secure={true} 
            upload_preset="ml_default"
            publicId={'download_yzp9ff.png'} 
      ><Transformation width='100' height='100' crop="fit"/>
      </Image>
      <h1 className='header-title'>WERK.IT</h1>
      </header>
      <div className='welcome-details'>
        <h2>Welcome</h2>
        <p>Sign in to continue</p>
      </div>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef}/>
              </Form.Group>
            </Form>
            <Form>
              <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="empasswordail" ref={passwordRef}/>
              </Form.Group>
            </Form>
            <Form>
              <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef}/>
              </Form.Group>
            </Form>
            <Button 
            className="mt-2 button-signup"
            type="submit"
            size="sm"
            disabled={loading}
            >
              Sign Up
            </Button>
          </Card.Body>
          <p>Already have an account? Login</p>
          <Button
          onClick={signInWithGoogle}>
          <i className="fab fa-google"></i>
          <p>Sign in with Google</p>
          </Button>
        </Card>      
      </div>
  )
}

export default LoginPageBootstrap;