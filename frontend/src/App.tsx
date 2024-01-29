// import { useState } from 'react'
import Header from './components/Header'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// import Clients from './components/Clients';
// import AddClientModal from './components/AddClientModal';
// import Projects from './components/Projects';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
// import Projects from './components/Projects';
import Project from './pages/Project';


// handling cache warning

const URL = 'http://localhost:6000/';

function App() {

    return (
        <BrowserRouter>
            <Header />
            <div className='container'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/projects/:id' element={<Project />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App
