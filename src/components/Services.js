import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">SERVICES</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Real Estate Investment" img="card1.png" text="Property acquisition and management. Investment strategies and returns." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Financial Consulting" img="card2.png" text="Investment highlights and summaries. Financial planning and analysis." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Property Management" img="card3.png" text="Details on the three properties owned. Rental income and projections." />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
