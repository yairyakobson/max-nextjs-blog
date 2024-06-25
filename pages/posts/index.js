import Head from "next/head";

import AllPosts from "@/components/posts/allPosts";
import { getAllPosts } from "@/helpers/postUtils";

export function getStaticProps(){
  const allPosts = getAllPosts();
  
  const formattedPosts = allPosts.map(post =>{
    const dateObject = new Date(post.date);
    const formattedDate = dateObject.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  
    return{
      ...post,
      date: formattedDate
    };
  });

  return{
    props: {
      posts: formattedPosts
    }
  }
}

function AllPostsPage(props){
  return(
    <>
      <Head>
        <title>All Posts</title>
        <meta name="description"
        content="A list of posts by Max"/>
      </Head>
      <AllPosts posts={props.posts}/>
    </>
  );
}

export default AllPostsPage;