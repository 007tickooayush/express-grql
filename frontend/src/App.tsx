import { useState } from 'react'
import Header from './components/Header'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';


const URL = 'http://localhost:5000/graphql';
const client = new ApolloClient({
    uri: URL,
    cache: new InMemoryCache()
});

function App() {
    const [count, setCount] = useState(0)

    return (
        <ApolloProvider client={client}>
            <Header />
            <div className='container'>
                <h1>Hello World</h1>
            </div>
        </ApolloProvider>
    )
}

export default App
