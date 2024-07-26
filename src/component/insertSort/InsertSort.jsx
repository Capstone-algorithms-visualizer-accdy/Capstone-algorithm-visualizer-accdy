import React from "react";
import "./insertSort.css"; // Import CSS file
import { Link } from "react-router-dom";

export const InsertSortButton = ({ onClick, isActive }) => (
  <button onClick={onClick} className={`insert-btn ${isActive ? 'active' : ''}`}>
    Insert Sort
  </button>
);

const InsertSort = () => {
  const InsertVideo = process.env.PUBLIC_URL + "./mp4/insertsort.mp4";

  return (
    <section className="section-container">
      <div className="insert-video-container">
        <video className="insert-vid" src={InsertVideo} autoPlay loop muted />
      </div>
      <p className="insert-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit
        amet, consectetur adipisicing elit.
        <Link to="/sorting" className="bubble-link"> Learn more</Link>

      </p>
    </section>
  );
};

export default InsertSort;
