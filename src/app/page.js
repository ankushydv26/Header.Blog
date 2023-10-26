import Card from "./component/Card";
import { config } from "./config";

const fetchBlogs = async (pramas) => {
  try {
    const reqOptions = {
      headers: { Authorization: `Bearer ${process.env.API_TOKEN}` },
    };
    const request = await fetch(
      `${config.api}/api/blogs?populate=*&${pramas}`,
      reqOptions
    );
    const response = await request.json();
    console.log("response", response, reqOptions);
    return response;
  } catch (error) {
    console.log(error);
  }
};
const Home = async () => {
  const [isFeaturedBlogs, blog] = await Promise.all([
    fetchBlogs(`filters[isFeatured][$eq]=true`),
    fetchBlogs(`filters[isFeatured][$eq]=false`),
  ]);

  console.log("Isfeat" , isFeaturedBlogs.data)
  
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
        <div className="col col-4 min-mw-100">
          <Card
            label="Opinions"
            title="Best Selling Products in the Market"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, explicabo."
            href={"Read More"}
          />
        </div>
        <div className="col col-4 min-mw-100">
          <Card
            label="Travel Guides"
            title="Best Selling Products in the Market"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, explicabo."
            href={"Read More"}
          />
        </div>
        <div className="col col-4 min-mw-100">
          <Card
            label="Opinions"
            title="Best Selling Products in the Market"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, explicabo."
            href={"Read More"}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
