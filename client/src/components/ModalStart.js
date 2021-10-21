import React from "react";
import {Link} from "react-router-dom";
import "../stylesheets/components/Modal.scss";

const ModalStart = ({show, username, close}) => {
  return (
    <>
      {show?
      <div className="modal-container" onClick={()=>close()}>
        <div className="modal-box" onClick={(e) => e.stopPropagation()}>
          <header className="modal_header">
            <h2 className="modal_header-title">Welcome, {username}!</h2>
            <button className="btn-close" onClick={()=>close()}>
            <i className="close-img fas fa-times-circle"></i>
            </button>
          </header>
          <section className="modal_content">
          Since you're new here, let's start by adding in your overall goals
          </section>
          <footer className="modal_footer">
            <Link to="/goals" className="btn-submit">
              Continue
            </Link>
          </footer>
        </div>
      </div> : null}
    </>
  )
}

export default ModalStart;