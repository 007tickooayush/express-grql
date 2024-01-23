import { useState } from 'react'
import Header from './components/Header'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Clients from './components/Clients';
import AddClientModal from './components/AddClientModal';
import Projects from './components/Projects';
import { BrowserRouter } from 'react-router-dom';


// handling cache warning
const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                clients: {
                    merge(existing,incoming){
                        return incoming;
                    }
                },
                projects: {
                    merge(existing,incoming){
                        return incoming;
                    }
                },
            }
        }
    }
})

const URL = 'http://localhost:5000/graphql';
const client = new ApolloClient({
    uri: URL,
    cache,
});

function App() {

    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Header />
                <div className='container'>
                    <AddClientModal />
                    <Projects />
                    <Clients />
                </div>
            </BrowserRouter>
        </ApolloProvider>
    )
}

export default App
