import Card from "./component/Card";
export default function Home() {
  return (
    <div className="container">
      <Card
        label="Product Review"
        title="Best Selling Products in the Market"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, explicabo."
        href={ "Read More"}
      />
      {/* <div className="row_wrap"> */}
      <div className="row">
        <div className="col col-4 min-mw-100">
          <Card
            label="Product Review"
            title="Best Selling Products in the Market"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, explicabo."
            href={ "Read More"}
          />
        </div>
        <div className="col col-4 min-mw-100">
          <Card
            label="Product Review"
            title="Best Selling Products in the Market"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, explicabo."
            href={ "Read More"}
          />
        </div>
        <div className="col col-4 min-mw-100">
          <Card
            label="Product Review"
            title="Best Selling Products in the Market"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, explicabo."
            href={ "Read More"}
          />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
