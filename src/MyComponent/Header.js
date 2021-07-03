import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
//Props are Js object which are passed from parent component(App.js) to child Component(Header.js))
export default function Header(props) {
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" ><h4>TODO App</h4></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            <Link className="nav-link" to="/about">About</Link>
                        </div>
                    </div>
                    { props.button? <div>
                    <button type="button" class="btn btn-dark">Dark</button>    //Javascript Ternary Operator
                    </div> :""}
                </div>
            </nav>
    )
}
Header.defaultProps = {
    title:"Todo",   //Default Title if title not paased
    button:false
}
Header.prototype = {
    title:PropTypes.String,  //This will Make sure that title is Link string and it is passed or having default value
    button:PropTypes.bool
}
