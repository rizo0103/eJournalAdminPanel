import React from 'react';
import './style.css';
import Sidebar from '../temps/Sidebar';

const Main: React.FC = () => {
    return (
        <main className='main-container'>
            <Sidebar />
        </main>
    );
};

export default Main;
