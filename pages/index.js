import React from 'react';
import Layout from '../components/Layout';
import Link from "next/link";


const Index = () => {
    return (
    <Layout title='Home'>
        <Link href="/about">
            <a>Go to about</a>
        </Link> 
        <p>Welcome to the home page</p>
    </Layout>
    )
}

// Index.getInitialProps = ({store, isServer, pathname, query}) => {
//     store.dispatch({type: 'FOO', payload: 'sdcsdc'});
//     return {custom: 'custom'}; 
//   };

  export default Index;