import React, { Component } from 'react'
import handlecontext from '../Context/context'
export default class Navbar extends Component {
    static contextType = handlecontext
    render() {
        const { mode, modehandle } = this.context
        return (
            <>
                <nav className={`navbar navbar-expand-lg ${mode === "white" ? "navbar-light bg-body-tertiary" : "navbar-dark bg-dark"}`}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <li className="nav-item align-items-center d-flex" >
                                    <i className={`fa-solid ${mode === "white" ? "fa-sun fa-beat-fade " : "fa-moon fa-fade"}`} style={{ color: mode === "white" ? "#FFD43B" : "white" }}
                                    ></i>

                                    <div className="ms-2 form-check form-switch">
                                        <input className="form-check-input" type="checkbox" role="switch" id="themingSwitcher" onClick={modehandle} />
                                    </div>
                                    <i className="bi bi-moon"></i>
                                </li>

                            </form>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
