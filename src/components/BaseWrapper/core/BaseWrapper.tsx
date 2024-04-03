import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../style/BaseWrapper.css';
// import { Container } from './styles';

const BaseWrapper: React.FC = () => {
  return (<div>
    <nav className='base-wrapper-nav'>
      <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/" defaultChecked >Home</NavLink>
      <div className='endblock'>
        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/SingIn" >SingIn</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/SingUp" >SingUp</NavLink>
      </div>

    </nav>
    <div>
      <Outlet />
    </div>
  </div>);
}

export default BaseWrapper;