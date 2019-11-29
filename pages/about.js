import { Component } from "react";
import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";

export default class About extends Component {
  static async getInitialProps() {
    const res = await fetch("http://api.github.com/users/Dmytro9");
    const data = await res.json();
    return { user: data };
  }

  render() {
    const data = this.props.user;

    return (
      <Layout title="About">
        <p>{data.name}</p>
        <img src={data.avatar_url} alt="logo" height="200px" />
      </Layout>
    );
  }
}
