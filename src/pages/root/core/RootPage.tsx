import React from 'react';
import { Outlet } from 'react-router-dom';
// import { Container } from './styles';

const RootPage: React.FC = () => {
    return (<>
        <Outlet />
    </>);
}

export default RootPage;