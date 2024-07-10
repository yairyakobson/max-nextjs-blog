import Head from "next/head";

import PostContent from "@/components/posts/details/content";
import { getPostData, getPostsFiles } from "@/helpers/postUtils";

export function getStaticPaths(){
  const postsName = getPostsFiles();
  const slugs = postsName.map(postName => postName.replace(/\.md$/, ""));
  
  return{
    paths: slugs.map((slug) =>({
      params: {
        slug: slug
      }
    })),
    fallback: false
  }
}

export function getStaticProps(ctx){
  const { params } = ctx;
  const { slug } = params;

  const postContent = getPostData(slug);

  return{
    props: {
      post: postContent
    },
    revalidate: 300
  }
}

function PostPage(props){
  return(
    <>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt}/>
      </Head>
      <PostContent post={props.post}/>
    </>
  );
}

export default PostPage;