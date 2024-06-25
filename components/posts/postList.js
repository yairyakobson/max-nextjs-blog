import Link from "next/link";
import Image from "next/image";

export default function PostList(props){
  const { title, image, excerpt, date, slug } = props.post;

  const imagePath = `/images/posts/${image}`;
  const linkPath = `/posts/${slug}`;

  return(
    <li className="shadow-[0_1px_4px_rgba(0,0,0,0.5)]
    bg-[#343036] text-center">
      <Link href={linkPath} className="text-zinc-200">

        <div className="w-full max-h-80 overflow-hidden flex justify-center">
          <Image className="object-cover"
          src={imagePath}
          alt={title}
          width={300}
          height={200}
          layout="responsive"/>
        </div>
        
        <div className="p-4">
          <h3 className="my-8 mx-0 text-[1.5rem] font-bold">{title}</h3>
          <time className="italic text-zinc-300">{date}</time>
          <p className="leading-6">{excerpt}</p>
        </div>
      </Link>
    </li>
  );
}