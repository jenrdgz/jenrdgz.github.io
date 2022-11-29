import {
    Link
  } from "react-router-dom";

export function Nav() {
    return (
      <div className="nav">
        <div className="title">
            Jenny Rodriguez, MA
        </div>
        <div className="rightNav">
          <Link to="/about">
            Work 
          </Link>
          <Link to="/about">
            Portfolio
          </Link>
          <Link to="/about">
            About
          </Link>
          <Link to="/about">
            Résumé
          </Link>
        </div>
      </div>  
      
    );
}