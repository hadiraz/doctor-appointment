import Image from "next/image";
import React from "react";
import Photo from "@/public/assets/images/nuclear-image.jpg";
import Hospital from "@/public/assets/images/hospital-services.jpg";
import { GetStaticPaths, GetStaticProps } from "next";
import { connectToDatabase } from "@/lib/database/mongodb";
import { BlogPostType } from "@/pages/blog/index";

const BlogPost = ({ postData }: { postData: string }) => {
  const {title , body , images} : BlogPostType = JSON.parse(postData);
  
  return (
    <section className="flex flex-col w-full min-h-full max-w-7xl px-3">
      <Image
        src={images.length ? images[0] : Photo}
        alt="photo"
        className="w-full rounded-lg object-cover object-center max-h-40"
      />
      <article>
        <h3 className="text-text text-justify text-xl md:text-2xl font-extrabold mb-2 mt-6">
          {title}
        </h3>
        <div className="sm:text-lg text-[#4d4d4d] text-justify mt-3">
          {body}
        </div>
      </article>
      <div className="flex flex-col w-full mt-10">
        <p className="text-xl w-fit font-extrabold relative after:w-full after:h-[2px] after:bg-[#999999] after:absolute after:bottom-[-2px] after:left-0">
          Related posts
        </p>
        <ul className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full mt-6">
          <li className="flex w-full">
            <div className="flex group flex-col items-center justify-between py-5 px-6 rounded-xl bg-[#f3f3f3] transition-all duration-200 hover:shadow-lg hover:translate-y-1">
              <div className="w-full flex items-center justify-center">
                <Image
                  src={Hospital}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  alt="hospital"
                  className="rounded-xl shadow-lg group-hover:scale-[1.03] transition-all duration-200"
                />
              </div>
              <h3 className="w-full text-lg text-justify mt-5 font-bold text-text leading-tight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
            </div>
          </li>
          <li className="flex w-full">
            <div className="flex group flex-col items-center justify-between py-5 px-6 rounded-xl bg-[#f3f3f3] transition-all duration-200 hover:shadow-lg hover:translate-y-1">
              <div className="w-full flex items-center justify-center">
                <Image
                  src={Hospital}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  alt="hospital"
                  className="rounded-xl shadow-lg group-hover:scale-[1.03] transition-all duration-200"
                />
              </div>
              <h3 className="w-full text-lg text-justify mt-5 font-bold text-text leading-tight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
            </div>
          </li>
          <li className="flex w-full">
            <div className="flex group flex-col items-center justify-between py-5 px-6 rounded-xl bg-[#f3f3f3] transition-all duration-200 hover:shadow-lg hover:translate-y-1">
              <div className="w-full flex items-center justify-center">
                <Image
                  src={Hospital}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  alt="hospital"
                  className="rounded-xl shadow-lg group-hover:scale-[1.03] transition-all duration-200"
                />
              </div>
              <h3 className="w-full text-lg text-justify mt-5 font-bold text-text leading-tight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default BlogPost;

export const getStaticPaths: GetStaticPaths = async (context) => {
  const { db } = await connectToDatabase();
  const allSlugs = await db.collection("blog").distinct("slug");
  console.log(allSlugs);
  return {
    paths: allSlugs.map((value) => ({
      params: {
        slug: value,
      },
    })),
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const { db } = await connectToDatabase();
  if (params) {
    const singlePost = await db
      .collection("blog")
      .findOne({ slug: params.slug });
    return {
      props: {
        postData: JSON.stringify(singlePost)
      },
    };
  } else {
    return {
      props: {
        undefined: true,
      },
    };
  }
};
