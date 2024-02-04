function About() {
  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src="./img/img1.png" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">ABOUT</h2>
            <p className="main-p">
            At Lambda, we focus on navigating the complexities of the real estate market to generate substantial returns for our investors. Our commitment to excellence, coupled with a forward-thinking investment strategy, has positioned us as a trusted partner in the realm of real estate.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
