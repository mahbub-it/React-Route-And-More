import React from 'react'
import { Link } from 'react-router-dom'
import TextPanelLeft from './TextPanel-Left'

const Sidebar = (props) => {
  return (
    <>
    {/* List-Group Panel */}
          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title"><span className="glyphicon glyphicon-random"></span> Completely Synergize</h1>
            </div>
            <div className="list-group">
              <Link to="/services/engage" className="list-group-item">Resource Taxing</Link>
              <Link to="/services/pontificate" className="list-group-item">Premier Niche Markets <span className="badge">New</span></Link>
              <Link to="/services/synergize" className="list-group-item">Dynamically Innovate</Link>
              <Link to="/services/engage" className="list-group-item">Objectively Innovate</Link>
              <Link to="/services/pontificate" className="list-group-item">Proactively Envisioned</Link>
            </div>
          </div>

          {/* Text Panel */}
          <TextPanelLeft title={props.title || "Websites Development"} description={props.description || "We build responsive and user-friendly websites for businesses and individuals. Our websites are designed to be fast, secure, and easy to use. We also offer website maintenance and support services." } button={props.button || "Discover More"}/>
          
    </>
  )
}

export default Sidebar