import React from 'react'
import { Link } from 'react-router-dom'

const Post = (props) => {
  return (
    <>
    {/* Articles */}
          <div className="row">
            <article className="col-xs-12">
              <div className="media">
                <div className="media-left">
                  <Link to="/home">
                    <img className="media-object" src="holder.js/120x120" alt="" />
                  </Link>
                </div>
                <div className="media-body mb-3 pb-3">
                  <h2 className="media-heading"><Link to="/home">{props.title}</Link></h2>
                  <p>{props.description}</p>
                  <p>
                    <button className='pull-left'>Read More...</button>
                  </p>
                  <br /><br />
                  <p className='pull-right'>
                    <span className='label label-default'>keyword</span>
                    <span className='label label-default'>tag</span>
                    <span className='label label-default'>post</span>
                  </p>
                  <ul className="list-inline">
                    <li>
                      <Link to="/home">{props.time}</Link>
                    </li> 
                    <li><Link to="/home"><span className="glyphicon glyphicon-comment"></span> {props.comment_count} Comments</Link></li>
                    <li><Link to="/home"><span className="glyphicon glyphicon-share"></span> {props.share_count} Shares</Link></li>
                  </ul>
                </div>
                <hr />
              </div>
            </article>
          </div>
    </>
  )
}

export default Post
