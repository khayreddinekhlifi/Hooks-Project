import React from "react";
import { useState } from "react";
export default function Navbar(searsh, setsearsh) {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="left-nav">
        <img
          src="https://imgix.bustle.com/uploads/image/2017/8/29/c8c8077a-10fc-44d5-93f0-da4e592a299e-netflix-logo-print_pms.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg"
          alt=""
        />
        <ul>
          <li>Tv shows</li>
          <li>movies</li>
          <li>Recently Added</li>
          <li>My list</li>
        </ul>
      </div>
      <div className="searsh">
        {open && <input type="text"  onChange={(e)=>e.target.value}/>}
        <img
          src="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-find-icon-png-image_854997.jpg"
          alt=""
          onClick={() => setOpen(!open)}
        />
      </div>
    </div>
  );
}
