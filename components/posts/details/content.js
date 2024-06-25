import Markdown from "react-markdown";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import PostHeader from "./header";

function PostContent(props){
  const { post } = props;

  const imagePath = `/images/posts/${post.image}`

  const customRenderers = {
    image(image){
      return(
        <Image
        src={`/images/posts/${post.slug}/${image.src}`}
        alt={image.alt}
        width={600}
        height={300}/>
      )
    },
    code(code){
      const array = code.className.split("-");
      const language = array[1];
 
      return(
        <SyntaxHighlighter
        language={language}
        style={atomDark}>
          {code.children}
        </SyntaxHighlighter>
      );
    },
  }
  
  return(
    <article className="w-full max-w-[60rem] my-8 mx-auto
    text-[1.25rem] leading-8 bg-[#dfdbe6] rounded-md p-8
    md:my-8">
      <PostHeader title={post.title} image={imagePath}/>
      <Markdown components={customRenderers}>{post.content}</Markdown>
    </article>
  );
}

export default PostContent;