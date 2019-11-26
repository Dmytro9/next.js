import Layout from '../components/Layout';
import { initStore } from '../store';
import {connect} from "react-redux";
import withRedux from 'next-redux-wrapper'

const Index = ({foo, custom}) => (
    <Layout title='Home'>
        <div>Prop from Redux {foo}</div>
        <div>Prop from getInitialProps {custom}</div>
    </Layout>
)

Index.getInitialProps = ({store, isServer, pathname, query}) => {
    store.dispatch({type: 'FOO', payload: 'foo'});
    return {custom: 'custom'}; 
  };

  export default connect(state => state)(Index);