import React from 'react';
import Layout from '../components/Layout';
import {useSelector} from "react-redux";

const Index = ({custom}) => {
    const foo = useSelector((state) => state.foo);

      return (
        <Layout title='Home'>
            <div>Prop from Redux {foo}</div>
            <div>Prop from getInitialProps {custom}</div>
        </Layout>
      )
}

Index.getInitialProps = ({store, isServer, pathname, query}) => {
    store.dispatch({type: 'FOO', payload: 'sdcsdc'});
    return {custom: 'custom'}; 
  };

  export default Index;