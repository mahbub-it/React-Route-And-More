import React from 'react'

const TextPanelLeft = (props) => {
  return (
    <>
    <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title"><span className="glyphicon glyphicon-cog"></span> {props.title}</h1>
            </div>

            <div className="panel-body">
              <p>{props.description}</p>
              <p><button className="btn btn-default">{props.button}</button></p>
            </div>
          </div>
    </>
  )
}

export default TextPanelLeft