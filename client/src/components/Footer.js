import React from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheets/components/Footer.scss';

export const Footer = () => {
  return (
    <div>
      <ul className="footer_list">
        <NavLink to="/today" className="footer_list-elem">
          <div className="footer_list-elem-details">
            <i className="footer_list-elem-icon fas fa-calendar-day"></i>
            <p>Today</p>
          </div>
        </NavLink>
        <NavLink to="/trends" className="footer_list-elem">
          <div className="footer_list-elem-details">
            <i className="footer_list-elem-icon fas fa-poll"></i>
            <p>Trends</p>
          </div>
        </NavLink>
        <NavLink to="/goals" className="footer_list-elem">
          <div className="footer_list-elem-details">
            <i className="footer_list-elem-icon fas fa-bullseye"></i>
            <p>Goals</p>
          </div>
        </NavLink>
        <NavLink to="/settings" className="footer_list-elem">
          <div className="footer_list-elem-details">
            <i className="footer_list-elem-icon fas fa-cog"></i>
            <p>Settings</p>
          </div>
        </NavLink>
      </ul>
    </div>
  )
}

export default Footer;
