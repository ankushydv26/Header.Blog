import Card from "./component/Card";
export default function Home() {
  return (
    <div className="container">
      <Card />
      {/* <div className="row_wrap"> */}
        <div className="row">
          <div className="col col-4 min-mw-100">
            <Card />
          </div>
          <div className="col col-4 min-mw-100">
            <Card />
          </div>
          <div className="col col-4 min-mw-100">
            <Card />
          </div>
        {/* </div> */}
      </div>
    </div>
  );
}
