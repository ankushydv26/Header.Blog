import Card from "./component/Card";
import { config } from "./config";

const fetchBlogs = async () => {
  try {
    const reqOptions = {
      headers: { Authorization: `Bearer ${process.env.API_TOKEN}` },
    };
    const request = await fetch(
      `${config.api}/api/blogs?populate=*`,
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
  const blog = await fetchBlogs();
  console.log("This", blog.data);
  return (
    <div className="container">
      <Card
        label="Product Review"
        title="Best Selling Products in the Market"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, explicabo."
        href={"Read More"}
      />
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
