import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";
import { useEffect, useState } from 'react';

export default function Navbar(props) {
  const [c, setc] = useState('');
  const [t, st] = useState('Text_Util - Home');
  const location = useLocation();

  const changecolor = (e) => {
    setc(e.target.value);
    document.body.style.backgroundColor = e.target.value;
  }

  const titlechange = (val) => {
    st(val);
    document.title = val;
  }
  useEffect(()=>{
    document.title ='Text_Util - Home';
  },[])

  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`} data-bs-theme={`${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : 'inactive'}`} onClick={() => titlechange("Text_Util - Home")}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/typing" className={`nav-link ${location.pathname === '/typing' ? 'active' : 'inactive'}`} onClick={() => titlechange("Text_Util - Typing Test")}>Typing Speed</Link>
            </li>
          </ul>
          <input type='color' className={`m-2 color `} onChange={changecolor} />
          <div className={`form-check form-switch ${props.mode === "light" ? "" : "text-light"} `}>
            <input className="form-check-input" type="checkbox" role="switch" onClick={props.handle} id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === "dark" ? "Disable" : "Enable"} Dark mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string
};

Navbar.defaultProps = {
  title: "title"
};
