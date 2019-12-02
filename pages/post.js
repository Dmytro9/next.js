import Layout from '../components/Layout';
import { WithRouter, withRouter } from 'next/router';


const Post = ({router}) => {
    return (
      <Layout title={router.query.title}>
          <p>Lorem ipsum text...</p>
      </Layout>
    );
  };

  export default withRouter(Post); 