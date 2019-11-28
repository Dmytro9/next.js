import { Component } from "react";
import Layout from "../components/Layout";

// export default () => (
//   <Layout title='About'>
//     <p>A JS programmer</p>
//     <img src="/static/javascript-logo.png" alt="logo" height="200px" />
//   </Layout>
// );

export default class About extends Component {
  render() {
    return (
      <Layout title="About">
        <p>A JS programmer</p>
        <img src="/static/javascript-logo.png" alt="logo" height="200px" />
      </Layout>
    );
  }
}
