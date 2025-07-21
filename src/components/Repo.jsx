/* eslint-disable react/prop-types */
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Repo({
  ownerName, avatar, repoName, description, stars, issues
}) {
  return (
    <li className="repo">
      <LazyLoadImage effect="blur" src={avatar} alt={ownerName} />
      <div className="content">
        <h2 className="repo-name">{repoName}</h2>
        <p className="desc">
          {description === null ? "There is no description" : description}
        </p>
        <div>
          <span className="stars">
            Stars:
            {` ${stars}`}
          </span>
          <span className="issues">
            Issues:
            {` ${issues}`}
          </span>
        </div>
        <span className="owner-name">
          A month ago by
          {` ${ownerName}`}
        </span>
      </div>
    </li>
  );
}
export default Repo;
