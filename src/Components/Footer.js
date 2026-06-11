import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    {/* Footer */}
    <footer>
        <div className="footer-blurb">
          <div className="container">
            <div className="row">
              <div className="col-sm-3 footer-blurb-item">
                <h3><span className="glyphicon glyphicon-text-size"></span> Dynamic</h3>
                <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C
                  users after installed base benefits. Dramatically visualize customer directed convergence without
                  revolutionary ROI.</p>
                <p><Link className="btn btn-default" to="/">Procrastinate</Link></p>
              </div>
              <div className="col-sm-3 footer-blurb-item">
                <h3><span className="glyphicon glyphicon-wrench"></span> Efficient</h3>
                <p>Dramatically maintain clicks-and-mortar solutions without functional solutions. Efficiently unleash
                  cross-media information without cross-media value. Quickly maximize timely deliverables for real-time
                  schemas. </p>
                <p><Link className="btn btn-default" to="#">Unleash</Link></p>
              </div>
              <div className="col-sm-3 footer-blurb-item">
                <h3><span className="glyphicon glyphicon-paperclip"></span> Complete</h3>
                <p>Professionally cultivate one-to-one customer service with robust ideas. Completely synergize resource
                  taxing relationships via premier niche markets. Dynamically innovate resource-leveling customer service
                  for state of the art customer service.</p>
                <p><Link className="btn btn-default" to="#">Complete</Link></p>
              </div>
              <div className="col-sm-3 footer-blurb-item">

                {/* Thumbnails */}
                <h3><span className="glyphicon glyphicon-camera"></span> Phosfluorescent</h3>
                <div className="row">
                  <div className="col-xs-6">
                    <Link to="/home" className="thumbnail">
                      <img src="holder.js/110x80" alt="" />
                    </Link>
                  </div>
                  <div className="col-xs-6">
                    <Link to="/home" className="thumbnail">
                      <img src="holder.js/110x80" alt="" />
                    </Link>
                  </div>
                  <div className="col-xs-6">
                    <Link to="/home" className="thumbnail">
                      <img src="holder.js/110x80" alt="" />
                    </Link>
                  </div>
                  <div className="col-xs-6">
                    <Link to="/home" className="thumbnail">
                      <img src="holder.js/110x80" alt="" />
                    </Link>
                  </div>
                </div>

              </div>

            </div>
            {/* row end */}
          </div>
        </div>

        <div className="small-print">
          <div className="container">
            <p><Link to="#">Terms &amp; Conditions</Link> | <Link to="#">Privacy Policy</Link> | <Link to="#">Contact</Link></p>
            <p>Copyright &copy; Example.com 2015 </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer