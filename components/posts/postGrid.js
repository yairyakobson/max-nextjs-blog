import PostList from "./postList";

export default function PostGrid(props){
  const { posts } = props;

  return(
    <ul className="list-none m-0 p-0
    grid [grid-template-columns:repeat(auto-fill,minmax(20rem,1fr))]
    gap-6 content-center">
      {posts.map((post) =>(
        <PostList key={post.slug} post={post}/>
      ))}
    </ul>
  );
}