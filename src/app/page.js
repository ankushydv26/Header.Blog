import Card from "./component/Card";
import { config } from "./config";
import fetchBlogs from "./helper/fetch-blog";

const Home = async () => {
  const [isFeaturedBlogs, blogs] = await Promise.all([
    fetchBlogs(`filters[isFeatured][$eq]=true`),
    fetchBlogs(`filters[isFeatured][$eq]=false`)
  ]);

  return (
    <div className="container">
      {isFeaturedBlogs.data.map((featureBlog) => (
        <Card
          key={featureBlog.id}
          label={featureBlog.attributes.Category}
          title={featureBlog.attributes.Title}
          imageUrl={`${config.api}${featureBlog.attributes.isFeaturedImage.data.attributes.url}`}
          imageAlt="imag"
          description={featureBlog.attributes.Summary}
          href={featureBlog.attributes.Slug}
        />
      ))}

      <div className="row">
        {blogs.data.map((blog) => (
          <div className="col col-4 min-mw-100"  key={blog.id}>
            <Card
             label={blog.attributes.Category}
             title={blog.attributes.Title}
             imageUrl={`${config.api}${blog.attributes.isFeaturedImage.data.attributes.url}`}
             imageAlt="imag"
             description={blog.attributes.Summary}
             href={blog.attributes.Slug}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
