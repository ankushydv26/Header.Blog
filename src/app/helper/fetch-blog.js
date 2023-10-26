import { config } from "../config";

const fetchBlogs = async (params) => {
  try {
    const reqOptions = {
      headers: { Authorization: `Bearer ${process.env.API_TOKEN}` },
    };
    const request = await fetch(
      `${config.api}/api/blogs?populate=*&${params}`,
      reqOptions
    );
    const response = await request.json();
    // console.log("response", response.data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default fetchBlogs;
