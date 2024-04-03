import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

const BaseWrapper: React.FC = () => {
  return (<div>
    <nav>
      <Link to="/" >Home</Link>
      <Link to={`SingIn`} >SingIn</Link>
      <Link to="/SingUp" >SingUp</Link>

    </nav>
  </div>);
}

export default BaseWrapper;