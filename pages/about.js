import Layout from '../components/Layout'
import store from '../store/index';
import withRedux from 'next-redux-wrapper'


const About = () => (
  <Layout title='About'>
    <p>A JS programmer</p>
    <img src="/static/javascript-logo.png" alt="logo" height="200px" />
  </Layout>
);


export default withRedux(store)(About);
