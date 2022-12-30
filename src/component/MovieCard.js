import React from "react";

export default function MovieCard({ movie }) {
  return (
    <div className="card">
      <img src={movie.poster} alt="" />
      <div className="card-contet">
        <div className="card-contet-title">
          <h2>{movie.title}</h2>
          <span style={{ display: "flex" }}>
            {movie.rating}{" "}
            <img
              style={{ width: "20px" }}
              src="https://cdn-icons-png.flaticon.com/512/2107/2107957.png"
              alt=""
            />
          </span>
        </div>
        <div>{movie.description}</div>
      </div>
    </div>
  );
}
