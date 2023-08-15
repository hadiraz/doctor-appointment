import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPostType } from "@/pages/blog";
import Hospital from "@/public/assets/images/hospital-services.jpg";
const BlogItems = ({ postData }: { postData: BlogPostType }) => {
  return (
    <div className="flex group flex-col items-center justify-between py-5 px-6 rounded-xl bg-[#f3f3f3] transition-all duration-200 hover:shadow-lg hover:translate-y-1">
      <div className="w-full flex items-center justify-center">
        <Image
          src={postData.images.length ? postData.images[0] : Hospital}
          style={{ objectFit: "cover", objectPosition: "center" }}
          alt="hospital"
          className="rounded-xl shadow-lg group-hover:scale-[1.03] transition-all duration-200"
        />
      </div>
      <article className="flex flex-col w-full mt-5 px-1">
        <Link href={`/blog/${postData.slug}`}>
          <h3 className="w-full text-lg font-bold text-text leading-tight">
            {postData.title}
          </h3>
        </Link>
        <p className="flex w-full break-words text-sm mt-2 text-[#6f6f6f] text-justify">
          {postData.body}
        </p>
      </article>
    </div>
  );
};

export default BlogItems;
