import Layout from "../components/Layout";

export default ({statusCode}) => {
  return (
    <Layout title="Error">
        {statusCode ? `Could not load your user data. Status Code ${statusCode}` : <p>Couldn't get that page, sorry! </p> }
    </Layout>
  );
};
