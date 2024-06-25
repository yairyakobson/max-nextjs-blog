import FeaturedPosts from "@/components/homepage/featuredPosts";
import Hero from "@/components/homepage/hero";
import { getFeaturedPosts } from "@/helpers/postUtils";
import Head from "next/head";

export function getStaticProps(){
  const featuredPosts = getFeaturedPosts();
  
  const formattedPosts = featuredPosts.map(post =>{
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

function HomePage(props){
  return(
    <>
      <Head>
        <title>Welcome to Max's blog</title>
        <meta name="description"
        content="Your blog for everything programming"/>
      </Head>
      <Hero/>
      <FeaturedPosts posts={props.posts}/>
    </>
  );
}

export default HomePage;