import React, {useState} from 'react';
import { auth } from '../service/firebase';

import '../stylesheets/App.scss';
import ModalStart from '../components/ModalStart';

const LandingPage = ({ user, cloudName }) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  console.log(user);
  return (
    <main className="landing">

      <h1>Hello, <span></span>{user.displayName}</h1>
      <img src={user.photoURL} alt="" />
      <button className="button signout" onClick={() => auth.signOut()}>Sign out</button>
      <button className="landing-modal" onClick={() => toggleModal()}>
        Get started
      </button>
      <ModalStart show={modal} username={user.displayName} close={toggleModal}/>
    </main>
  )
}

export default LandingPage;