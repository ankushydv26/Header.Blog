import getCategoryColor from "../helper/getCategory-color";
import Image from "next/image";
import styles from "./styles.module.sass";
import fetchBlogs from "../helper/fetch-blog";
import {config} from "../config"

const BlogDetails = async(props) => {
  const blogs = await fetchBlogs(`filters[slug][$eq]=${props.params.slug}`)
console.log("props.params.slug" ,props.params.slug)
  if(blogs.data.length === 0) return null;
  const blog = blogs.data[0] 

  console.log("blogs-slu" , blog)
  return (
    <>
      <div className="container pb-80">
        <div className="col col-9">
          <div className={` mb-10  c-${getCategoryColor(blog.attributes.Category)} h6`}>
            {blog.attributes.Category}
          </div>
          <div
            className={` mb-50 h3`}
          >{blog.attributes.Title}</div>
        </div>
        <Image
          src={`${config.api}${blog.attributes.isFeaturedImage.data.attributes.url}`}
          className={`${styles.featureImage} mb-50`}
          alt="headphone"
          width={1000}
          height={500}
        />
        <div className="row">
          <div className="col col-7">
            {blog.attributes.Content}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
