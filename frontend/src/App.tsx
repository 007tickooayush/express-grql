import { useState } from 'react'
import Header from './components/Header'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Clients from './components/Clients';


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
    const [count, setCount] = useState(0)

    return (
        <ApolloProvider client={client}>
            <Header />
            <div className='container'>
                <Clients />
            </div>
        </ApolloProvider>
    )
}

export default App
