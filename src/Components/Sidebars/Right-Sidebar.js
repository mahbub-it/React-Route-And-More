
const RightSidebar = () => {
  return (
    <>
    {/* Right Sidebar Column Start */}
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
          {/* Right Sidebar Column End */}
    </>
  )
}

export default RightSidebar