import Image from "next/image";
import React from "react";
import Photo from "@/public/assets/images/nuclear-image.jpg";
const BlogPost = () => {
  return (
    <section className="flex flex-col w-full min-h-full max-w-7xl px-3">
      <Image
        src={Photo}
        alt="photo"
        className="w-full rounded-lg object-cover object-center max-h-40"
      />
      <article>
        <h3 className="text-text text-2xl font-bold mb-2 mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
          nesciunt.
        </h3>
        <div className="text-[#4d4d4d] text-justify mt-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
          vel nobis odit quo impedit rerum! Ipsam quasi eveniet dolore
          voluptatibus. Nobis quae commodi perferendis veniam optio
          exercitationem repellat ex quisquam eius et at provident, autem
          debitis sed molestias? Obcaecati labore perferendis deleniti neque
          dolor quaerat? Odit optio magni eum esse eligendi ab accusamus, est
          fugiat consequatur assumenda exercitationem rem ea atque numquam nobis
          obcaecati ut ipsam rerum incidunt amet. Harum dolor sequi iusto! Dolor
          sequi temporibus vero tempora illo quaerat ipsum iure, a suscipit
          voluptatibus beatae maxime porro delectus aperiam doloremque
          perspiciatis est quibusdam provident aspernatur unde. Atque blanditiis
          debitis quam animi quisquam et corrupti ipsum. Molestias repellendus
          quia magni quo sint, alias fugit debitis perspiciatis, aperiam officia
          id. Accusantium eos molestias ex perspiciatis eum excepturi, quasi
          beatae. Fugit a perferendis numquam voluptatibus repellendus
          consectetur vero tempora culpa! Corrupti pariatur labore amet totam
          expedita soluta debitis optio ea dolore provident quibusdam corporis
          fugit nesciunt, reiciendis natus atque animi magnam placeat nemo ex
          omnis delectus deserunt similique. Maiores cum minus quaerat facilis
          blanditiis nihil repudiandae voluptatum illum consectetur, accusamus
          sit sunt quisquam quia eaque quod consequuntur a perferendis
          voluptatibus? Beatae, dolores dolore dignissimos voluptatum accusamus
          a illo impedit error ex harum.
        </div>
      </article>
      <div className="flex flex-col w-full mt-10">
        <p className="text-xl w-fit font-extrabold relative after:w-full after:h-[2px] after:bg-[#999999] after:absolute after:bottom-[-2px] after:left-0">Related posts</p>
        <ul className="flex flex-col w-full mt-4">
          <li className="flex w-full text-text group relative transition-all duration-200 hover:underline 
          underline-offset-2 hover:font-bold mb-3">
            {/* <span className="w-0 flex group-hover:w-full h-[2px] absolute bottom-0 left-0 bg-[#ccc]"></span> */}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, recusandae?
          </li>
          <li className="flex w-full text-text group relative transition-all duration-200 hover:underline 
          underline-offset-2 hover:font-bold mb-3">
            {/* <span className="w-0 flex group-hover:w-full h-[2px] absolute bottom-0 left-0 bg-[#ccc]"></span> */}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, recusandae?
          </li>
        </ul>
      </div>
    </section>
  );
};

export default BlogPost;
