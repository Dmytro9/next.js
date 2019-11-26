import Layout from '../components/Layout';
import store from '../store';
import withRedux from 'next-redux-wrapper'

const Index = () => (
    <Layout title='Home'>
        <p>Welcome to home page</p>
    </Layout>
)

export default withRedux(store)(Index);