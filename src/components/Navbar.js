import React from 'react';



export default function Navbar(props) {

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} ` }>
        <div className={`container-fluid`}>
          <a className="navbar-brand " href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href='#'>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='#'>{props.aboutText}</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Option 1</a></li>
                  <li><a className="dropdown-item" href="#">Option 2</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Other Options</a></li>
                </ul>
              </li>
            </ul>
            <div className="d-flex">
            <button className=" btn bg-light rounded mx-2" onClick={props.toggleLightMode} style={{ height: '30px', width: '30px', cursor: 'pointer', display: props.mode==='dark'?'flex':'none' }}></button>
              <button className="btn bg-dark rounded mx-2" onClick={props.toggleDarkMode} style={{ height: '30px', width: '30px', cursor: 'pointer', display: props.mode==='light'?'flex':'none'  }}></button>
            </div>

            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className={`btn btn-outline-${props.mode=='light'?'dark':'light'}`} type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

    </>
  )
}


Navbar.defaultProps = {
  title: 'Your title',
  aboutText: 'About Us'
}