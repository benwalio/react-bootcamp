import React, { Component } from "react";
import axios from "axios";

// export default class Index extends Component {
//     constructor(props) {
//         super(props);
//     }
//     static async getInitialProps() {
//         const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
//         const { data } = await res.data;
//         return { posts: data };
//     }
//   render() {
//     return (
//       <div>
//         <h1>index jawn</h1>
//         {/* {this.props.posts.map(posts =>
//         <p>{post}</p>
//         )} */}
//       </div>
//     );
//   }
// }

const Index = ({ posts }) => {
  return (
    <div>
      <h1>index jawn</h1><ul>
      {posts.map(post =>
      <li key={post.id}>{post.title}</li>
      )}</ul>
    </div>
  );
};

export default Index;

export const getServerSideProps = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const { data } = await res;
  return { props: { posts: data }};
};


