import React from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheets/components/Footer.scss';

export const Footer = () => {
  return (
    <div>
      <ul className="footer_list">
        <NavLink to="/today" className="footer_list-elem">
          <i className="footer_list-elem-icon fas fa-calendar-day"></i>
          <h4>Today</h4>
        </NavLink>
        <NavLink to="/trends" className="footer_list-elem">
          <i className="footer_list-elem-icon fas fa-poll"></i>
          <h4>Trends & History</h4>
        </NavLink>
        <NavLink to="/goals" className="footer_list-elem">
          <i className="footer_list-elem-icon fas fa-bullseye"></i>
          <h4>Goals</h4>
        </NavLink>
        <NavLink to="/settings" className="footer_list-elem">
          <i className="footer_list-elem-icon fas fa-cog"></i>
          <h4>Settings</h4>
        </NavLink>
      </ul>
    </div>
  )
}

export default Footer;
