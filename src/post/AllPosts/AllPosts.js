//import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
} from "@material-ui/core";
//import { client } from "../../api";
//import axios from "axios";
//import { withStyles } from "@material-ui/styles";
import { useLocation  } from "react-router-dom";

function AllPosts() {

    const location = useLocation();
    const params = new URLSearchParams(location.hash);
    console.log('location', params);

    return (
      <div style={{ height: '100vh'}}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center">
            This is All post page
          </Typography>
        </Container>
      </div>
    );
}
//   const [allPosts, setAllPosts] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5001/all-posts")
//       .then((posts) => setAllPosts(posts.data));
//   }, []);

//   return (
//     <Container>
//       {allPosts && allPosts.map((post, key) => <div>{post.title}</div>)}
//     </Container>
//   );
// }

export default AllPosts;
