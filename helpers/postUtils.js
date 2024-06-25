import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postDir = path.join(process.cwd(), "post-database");

export function getPostsFiles(){
  const postFiles = fs.readdirSync(postDir);
  return postFiles;
}

export function getPostData(postIdentifier){
  const postSlug = postIdentifier.replace(/\.md$/, ""); // Removes the file extension
  const filePath = path.join(postDir, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8"); // Reads the content of a file
  const {data, content} = matter(fileContent);

  const [day, month, year] = data.date.split('/').map(num => parseInt(num, 10));
  const parsedDate = new Date(year, month - 1, day);

  const postData = {
    slug: postSlug,
    ...data,
    date: parsedDate.toISOString(),
    content
  };

  return postData;
}

export function getAllPosts(){
  const posts = getPostsFiles(); // Synchronously reads all our data

  const allPosts = posts.map(post =>{
    return getPostData(post);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>{
    if(postA.date > postB.date) return -1;
    if(postA.date < postB.date) return 1;
    if(postA.title.toLowerCase() > postB.title.toLowerCase()) return 1;
    if(postA.title.toLowerCase() < postB.title.toLowerCase()) return -1;
    
    return 0;
  });

  return sortedPosts;
}

export function getFeaturedPosts(){
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter(post => post.isFeatured);

  return featuredPosts;
}