import PostGrid from "../posts/postGrid";

function FeaturedPosts(props){
  return(
    <section className="w-[90%] max-w-[80rem] my-8 mx-auto">
      <h2 className="text-center my-8 font-bold text-[4rem] text-[#343036]
      sm:text-[2.5rem]
      md:text-[3rem]">Featured Posts</h2>
      <PostGrid posts={props.posts}/>
    </section>
  );
}

export default FeaturedPosts;