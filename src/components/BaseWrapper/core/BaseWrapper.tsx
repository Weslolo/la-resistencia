import React from 'react';
import { Link, Outlet } from 'react-router-dom';

// import { Container } from './styles';

const BaseWrapper: React.FC = () => {
  return (<div>
    <nav>
      <Link to="/" defaultChecked >Home</Link>
      <Link to={`/SingIn`} >SingIn</Link>
      <Link to="/SingUp" >SingUp</Link>

    </nav>
    <div>
      <Outlet />
    </div>
  </div>);
}

export default BaseWrapper;