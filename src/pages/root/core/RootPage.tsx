import React from 'react';
import { Outlet } from 'react-router-dom';
import BaseWrapper from '../../../components/BaseWrapper/core/BaseWrapper';

// import { Container } from './styles';

const RootPage: React.FC = () => {
    return (<>
        <BaseWrapper />
        <Outlet />
    </>);
}

export default RootPage;