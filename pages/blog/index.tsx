import React, { useEffect } from "react";
import Hospital from "@/public/assets/images/hospital-services.jpg";
import TitleIconContainer from "@/components/shared/TitleIconContainer";
import { GetStaticProps, GetServerSideProps } from "next/types";
import { connectToDatabase } from "@/lib/database/mongodb";
import { Document, WithId } from "mongodb";
import BlogItems from "@/components/blog/BlogItems";
export type BlogPostType = {
  _id: object;
  author: {
    name: string;
    _id: object;
  };
  title: string;
  body: string;
  images: string[];
  slug: string;
  created_date: string;
};
const Index = ({posts}: {posts:string}) => {
  return (
    <section className="flex flex-col w-full max-w-7xl">
      {/* icon must be added */}
      <div className="w-full flex items-center mb-10 px-5">
        <TitleIconContainer>
          <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
            <path d="M6 22h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3zM5 8V5c0-.805.55-.988 1-1h13v12H5V8z" />
            <path d="M8 6h9v2H8z" />
          </svg>
        </TitleIconContainer>
        <p className="flex text-2xl font-bold">Blog</p>
      </div>
      <section className="grid place-items-center gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full px-4">
        {
          JSON.parse(posts).map((value : BlogPostType)=>{
            return (
              <BlogItems postData={value} key={value.slug}/>
            )
          })
        }
      </section>
    </section>
  );
};

export default Index;


export const getStaticProps: GetStaticProps<{
  posts: string;
}> = async () => {
  const { db } = await connectToDatabase();
  const allPosts = await db.collection("blog").find({}).toArray();
    return {
      props: {
        posts: JSON.stringify(allPosts),
      },
      revalidate : 24*60*60
    };
};