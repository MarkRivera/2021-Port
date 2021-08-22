import React from "react";

function Resume(props) {
  const {
    year,
    position,
    graduation,
    university,
    company,
    details,
    name,
    github,
    live,
  } = props.resumeData;
  return (
    <div className="mi-resume mt-30">
      <div className="mi-resume-summary">
        <h6 className="mi-resume-year">{year}</h6>
      </div>
      <div className="mi-resume-details">
        <h5>{position || graduation || name}</h5>
        <div className="resume-links-container">
          {github ? (
            <h6 className="mi-resume-company">
              <a href={github}>
                Github {github === "Protected" ? ` (Private)` : null}
              </a>
            </h6>
          ) : null}
          {live ? (
            <h6 className="mi-resume-company">
              <a href={live}> Live </a>
            </h6>
          ) : null}
        </div>
        <h6 className="mi-resume-company">{company || university}</h6>
        <ul>
          {typeof details === "string"
            ? details
            : details.map((detail, index) => (
                <li key={`${detail}&${index}`}>{detail}</li>
              ))}
        </ul>
      </div>
    </div>
  );
}

export default Resume;
