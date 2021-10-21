// import { useRef } from 'react';
import { signInWithGoogle } from '../service/firebase';
import '../stylesheets/App.scss';
import {Image, Transformation} from 'cloudinary-react';
import '../stylesheets/pages/LoginPage.scss';


const LoginPage = ({cloudName}) => {
  // const emailRef = useRef();
  // const passwordRef = useRef();
  // const passwordConfirmRef = useRef();

  return (
    <main>
      <header className="header-login">
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
      {/* <div className='form-wrapper'>
        <div className='form-wrapper-body'>
          <form>
            <div id="email" className="form-section">
              <label className="form-section-label">
              <i className="form-icon far fa-envelope"></i>
              <p>Email</p>
              </label>
              <input type="email" ref={emailRef} className="form-input"></input>
            </div>
          </form>
          <form>
            <div id="password" className="form-section">
              <label className="form-section-label">
                <i className="form-icon fas fa-unlock"></i>
                <p>Password</p>
              </label>
              <input type="password" ref={passwordRef} className="form-input"></input>
            </div>
          </form>
          <form>
            <div id="password-confirm" className="form-section">
              <label className="form-section-label">
              <i className="form-icon fas fa-lock"></i>
              <p>Password  Confirmation</p>
              </label>
              <input type="password" ref={passwordConfirmRef} className="form-input"></input>
            </div>
          </form>
        </div>
        <p>Already have an account? Login</p>
        <button className="button-signup">Sign Up</button> */}
        <button className="button-login" onClick={signInWithGoogle}>
        <Image
          className="logo-small"
          cloudName={cloudName}
          secure={true} 
          upload_preset="ml_default"
          publicId={'google-logo-png-29546_eotj5w.png'}
        >
          <Transformation width='30' height='30' crop="fit"/>
        </Image>
        <p style={{paddingLeft: '12px'}}>Sign in with Google</p></button>
        </main>
        // </div>
  )
}

export default LoginPage;