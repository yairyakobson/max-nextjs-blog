import Image from "next/image";

function PostHeader(props){
  const { title, image } = props;

  // return(
  //   <header className="pb-8 border-b-8 border-b-solid border-[#a07aaa] flex flex-col-reverse justify-between items-center gap-4
  //   md:my-8 md:mx-0 md:flex-row md:items-end">
  //     <h1 className="text-[2.4rem] text-[#5a097a] m-0 leading-[initial] text-center
  //     md:text-left md:text-[4rem] mb-auto">{title}</h1>
  //     <Image className="object-cover w-[200px] h-[120px]"
  //     src={image}
  //     alt={title}
  //     width={200}
  //     height={150}/>
  //   </header>
  // );

  return(
    <header className="pb-8 border-b-8 border-b-solid border-[#a07aaa] my-6 mx-auto flex flex-row justify-between items-center gap-4
    md:my-8 md:mx-0 md:flex-row md:items-end">
      <h1 className="text-[3.5rem] text-[#5a097a] leading-[initial] text-keft mb-auto
        sm:mx-0 sm:text-[2.6rem]
        md:text-[3rem]">
        {title}
      </h1>
      <Image className="object-cover w-[200px] h-[120px] px-auto"
        src={image}
        alt={title}
        width={200}
        height={150} />
    </header>
  );
  
}

export default PostHeader;