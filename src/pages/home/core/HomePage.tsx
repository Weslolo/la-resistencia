import React from 'react';
import BaseWrapper from '../../../components/BaseWrapper/core/BaseWrapper';
import { Outlet } from 'react-router-dom';

// import { Container } from './styles';

const HomePage: React.FC = () => {
    return (
        <div>
            <BaseWrapper />
            <Outlet />
        </div>);
}

export default HomePage;