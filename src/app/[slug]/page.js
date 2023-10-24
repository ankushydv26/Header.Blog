import getCategoryColor from "../helper/getCategory-color"

const BlogDetails = () => {
  return (
    <>
      <div className="container pb-80">
      <div className={` mb-10  c-${getCategoryColor("Opinions")} h6`}>
              Opinions
        </div>
        <div className={` mb-50 h3`}>{`Best Selling Products in the Market`}</div>
      </div>
    </>
  )
}

export default BlogDetails