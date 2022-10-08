import React from "react";
import { Link } from "react-router-dom";

function HeaderCatatan() {
  
  return (
    <>
      <h1>
        <Link to="/">Aplikasi Catatan </Link>
      </h1>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/arsip">Arsip</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default HeaderCatatan;
