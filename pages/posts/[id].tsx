import { useEffect, useState } from "react"
import Router, { useRouter } from "next/router"
import { getPosts } from "../../util/firebase"
import NewPostForm from "../../components/NewPostForm";

const Page = ({ post }: any) => {
  const { title, poster, timestamp } = post
  return (
    <div>
      <h3>{title}</h3>
      <p>{poster}</p>
      <p>{timestamp}</p>
      <NewPostForm formOpen={true} />
    </div>
  )
}

export default Page

export async function getStaticPaths(): Promise<any> {
  const posts = await getPosts();
  console.log(posts);
  
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({params}: any): Promise<any> {
  const posts = await getPosts();
  console.log(posts);
  
  const { id } = params;
  const post = posts.find((p) => p.id === id);
  
  return {
    props: {
      post: post
    },
  };
}

