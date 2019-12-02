import Layout from '../components/Layout';
import { withRouter } from 'next/router';


const Post = ({router}) => {
    return (
      <Layout title={router.query.title}>
          <p style={{width: '80vw'}}>Lorem ipsum text...</p>
      </Layout>
    );
  };

  export default withRouter(Post); 