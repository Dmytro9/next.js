import Layout from '../components/Layout';
import Link from "next/link";


const Post = ({url}) => {
    return (
      <Layout title={url.query.title}>
          <p>Lorem ipsum text</p>
      </Layout>
    );
  };

  export default Post; 