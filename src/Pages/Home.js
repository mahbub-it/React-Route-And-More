import { Helmet} from "react-helmet-async";
import Header from "../Components/Header";

function Home(){
  return (
   <>

   {/* Navigation */}
   <Header />

   <Helmet>
    <title>Home</title>
   </Helmet>

      <div className="jumbotron feature">
        <div className="container">

          <div id="feature-carousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#feature-carousel" data-slide-to="0" className="active"></li>
              <li data-target="#feature-carousel" data-slide-to="1"></li>
              <li data-target="#feature-carousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <a href="#">
                  <img className="img-responsive" src="images/01.png" alt="01.png" />
                </a>
                <div className="carousel-caption"> 
                  <h3>Dramatically Engage</h3>
                  <p>Objectively innovate empowered manufactured products whereas parallel platforms.</p>
                </div>
              </div>
              <div className="item">
                <a href="#">
                  <img className="img-responsive" src="images/02.png" alt="02.png" />
                </a>
                <div className="carousel-caption">
                  <h3>Efficiently Unleash</h3>
                  <p>Dramatically maintain clicks-and-mortar solutions without functional solutions.</p>
                </div>
              </div>
              <div className="item">
                <a href="#">
                  <img className="img-responsive" src="images/03.png" alt="03.png" />
                </a>
                <div className="carousel-caption">
                  <h3>Proactively Pontificate</h3>
                  <p>Holistically pontificate installed base portals after maintainable products.</p>
                </div>
              </div>
            </div>
            <a className="left carousel-control" href="#feature-carousel" role="button" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#feature-carousel" role="button" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>

        </div>
      </div>


      <div className="container-fluid">

        {/* Left Column */}
        <div className="col-sm-3">

          {/* List-Group Panel */}
          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title"><span className="glyphicon glyphicon-random"></span> Completely Synergize</h1>
            </div>
            <div className="list-group">
              <a href="#" className="list-group-item">Resource Taxing</a>
              <a href="#" className="list-group-item">Premier Niche Markets <span className="badge">New</span></a>
              <a href="#" className="list-group-item">Dynamically Innovate</a>
              <a href="#" className="list-group-item">Objectively Innovate</a>
              <a href="#" className="list-group-item">Proactively Envisioned</a>
            </div>
          </div>

          {/* Text Panel */}
          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title"><span className="glyphicon glyphicon-cog"></span> Dramatically Engage</h1>
            </div>

            <div className="panel-body">
              <p>Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate
                extensible testing procedures for reliable supply chains. Dramatically engage top-line web services
                vis-a-vis cutting-edge deliverables.</p>
              <p><button className="btn btn-default">Engage</button></p>
            </div>
          </div>

        </div>{/* /Left Column */}


        {/* Center Column */}
        <div className="col-sm-6">

          {/* Alert */}
          <div className="alert alert-danger alert-dismissible" role="alert">
            <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span
              aria-hidden="true">&times;</span></button>
            <strong>Synergize:</strong> Seamlessly visualize quality intellectual capital!
          </div>

          {/* Articles */}
          <div className="row">
            <article className="col-xs-12">
              <div className="media">
                <div className="media-left">
                  <a href="#">
                    <img className="media-object" src="holder.js/120x120" alt="" />
                  </a>
                </div>
                <div className="media-body">
                  <h2 className="media-heading"><a href="#">Premier Niche Markets</a></h2>
                  <p>Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate
                    proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer
                    service through sustainable potentialities.</p>

                  <ul className="list-inline">
                    <li><a href="#"><span className="glyphicon glyphicon-comment"></span> 2 Comments</a></li>
                    <li><a href="#"><span className="glyphicon glyphicon-share"></span> 8 Shares</a></li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
          <hr />
          <div className="row">
            <article className="col-xs-12">
              <div className="media">
                <div className="media-left">
                  <a href="#">
                    <img className="media-object" src="holder.js/120x120" alt="" />
                  </a>
                </div>
                <div className="media-body">
                  <h2 className="media-heading"><a href="#">Proactively Envisioned</a></h2>
                  <p>Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing.
                    Holistically pontificate installed base portals after maintainable products. Proactively envisioned
                    multimedia based expertise and cross-media growth strategies.</p>

                  <ul className="list-inline">
                    <li><a href="#"><span className="glyphicon glyphicon-comment"></span> 12 Comments</a></li>
                    <li><a href="#"><span className="glyphicon glyphicon-share"></span> 18 Shares</a></li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
          <hr />
          <div className="row">
            <article className="col-xs-12">
              <div className="media">
                <div className="media-left">
                  <a href="#">
                    <img className="media-object" src="holder.js/120x120" alt="" />
                  </a>
                </div>
                <div className="media-body">
                  <h2 className="media-heading"><a href="#">Completely Synergize</a></h2>
                  <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate
                    one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service
                    for state of the art customer service.</p>

                  <ul className="list-inline">
                    <li><a href="#"><span className="glyphicon glyphicon-comment"></span> 23 Comments</a></li>
                    <li><a href="#"><span className="glyphicon glyphicon-share"></span> 22 Shares</a></li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
          <hr />
        </div>{/* /Center Column */}


        {/* Right Column */}
        <div className="col-sm-3">

          {/* Form */}
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">
                <span className="glyphicon glyphicon-log-in"></span>
                Log In
              </h3>
            </div>
            <div className="panel-body">
              <form>
                <div className="form-group">
                  <input type="text" className="form-control" id="uid" name="uid" placeholder="Username" />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" id="pwd" name="pwd" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-default">Log In</button>
              </form>
            </div>
          </div>

          {/* Progress Bars */}
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">
                <span className="glyphicon glyphicon-scale"></span>
                Dramatically Engage
              </h3>
            </div>
            <div className="panel-body">
              <div className="progress">
                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="100" aria-valuemin="0"
                  aria-valuemax="100" style={{ width: "100%" }}>
                  100% Proactively Envisioned
                </div>
              </div>
              <div className="progress">
                <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="80" aria-valuemin="0"
                  aria-valuemax="100" style={{ width: "80%" }}>
                  80% Objectively Innovated
                </div>
              </div>
              <div className="progress">
                <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="45" aria-valuemin="0"
                  aria-valuemax="100" style={{ width: "45%" }}>
                  45% Portalled
                </div>
              </div>
              <div className="progress">
                <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="35" aria-valuemin="0"
                  aria-valuemax="100" style={{ width: "35%" }}>
                  35% Done
                </div>
              </div>
            </div>
          </div>

          {/* Text Panel */}
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">
                <span className="glyphicon glyphicon-bullhorn"></span>
                Active Predomination
              </h3>
            </div>
            <div className="panel-body">
              <p>Proactively envisioned multimedia based expertise and cross-media growth strategies.</p>
              <div className="btn-group" role="group">
                <button type="button" className="btn btn-default">Resource</button>
                <button type="button" className="btn btn-default">Envision</button>
                <button type="button" className="btn btn-default">Niche</button>
              </div>
            </div>
          </div>


        </div>{/* /Right Column */}

      </div>{/* /container-fluid */}

      <footer>
        <div className="footer-blurb">
          <div className="container">
            <div className="row">
              <div className="col-sm-3 footer-blurb-item">
                <h3><span className="glyphicon glyphicon-text-size"></span> Dynamic</h3>
                <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C
                  users after installed base benefits. Dramatically visualize customer directed convergence without
                  revolutionary ROI.</p>
                <p><a className="btn btn-default" href="#">Procrastinate</a></p>
              </div>
              <div className="col-sm-3 footer-blurb-item">
                <h3><span className="glyphicon glyphicon-wrench"></span> Efficient</h3>
                <p>Dramatically maintain clicks-and-mortar solutions without functional solutions. Efficiently unleash
                  cross-media information without cross-media value. Quickly maximize timely deliverables for real-time
                  schemas. </p>
                <p><a className="btn btn-default" href="#">Unleash</a></p>
              </div>
              <div className="col-sm-3 footer-blurb-item">
                <h3><span className="glyphicon glyphicon-paperclip"></span> Complete</h3>
                <p>Professionally cultivate one-to-one customer service with robust ideas. Completely synergize resource
                  taxing relationships via premier niche markets. Dynamically innovate resource-leveling customer service
                  for state of the art customer service.</p>
                <p><a className="btn btn-default" href="#">Complete</a></p>
              </div>
              <div className="col-sm-3 footer-blurb-item">

                {/* Thumbnails */}
                <h3><span className="glyphicon glyphicon-camera"></span> Phosfluorescent</h3>
                <div className="row">
                  <div className="col-xs-6">
                    <a href="#" className="thumbnail">
                      <img src="holder.js/110x80" alt="" />
                    </a>
                  </div>
                  <div className="col-xs-6">
                    <a href="#" className="thumbnail">
                      <img src="holder.js/110x80" alt="" />
                    </a>
                  </div>
                  <div className="col-xs-6">
                    <a href="#" className="thumbnail">
                      <img src="holder.js/110x80" alt="" />
                    </a>
                  </div>
                  <div className="col-xs-6">
                    <a href="#" className="thumbnail">
                      <img src="holder.js/110x80" alt="" />
                    </a>
                  </div>
                </div>

              </div>

            </div>
            {/* /.row */}
          </div>
        </div>

        <div className="small-print">
          <div className="container">
            <p><a href="#">Terms &amp; Conditions</a> | <a href="#">Privacy Policy</a> | <a href="#">Contact</a></p>
            <p>Copyright &copy; Example.com 2015 </p>
          </div>
        </div>
      </footer>
   </> 
  )
}

export default Home;