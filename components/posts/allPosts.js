import PostGrid from "./postGrid";

export default function AllPosts(props){
  return(
    <section className="w-[90%] max-w-[60rem] my-8 mx-auto">
      <h1 className="text-[4rem] text-zinc-800 text-center my-8 mx-auto font-bold
      sm:text-[3rem]
      md:text-[3.5rem]">All Posts</h1>
      <PostGrid posts={props.posts}/>
    </section>
  );
}