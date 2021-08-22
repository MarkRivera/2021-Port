import FsLightbox from "fslightbox-react";
import React, { useState } from "react";
import * as Icon from "react-feather";
import ProgressiveImage from "react-progressive-image";
import ClipLoader from "react-spinners/ClipLoader";

const override = `
  display: block;
  margin: 0 auto;
  border-color: #0d6efd;
`;

function Portfolio(props) {
  const [toggler, setToggler] = useState(false);
  let [color, setColor] = useState("#0d6efd");
  const { title, subtitle, imageUrl, largeImageUrl, url, git } = props.content;

  const handleToggler = value => {
    setToggler(value);
  };

  return (
    <div className="mi-portfolio mi-portfolio-visible">
      <div className="mi-portfolio-image">
        {/* <img src={imageUrl} alt={title} /> */}
        <ProgressiveImage src={imageUrl} delay={3000}>
          {(src, loading) =>
            loading ? (
              <ClipLoader
                color={color}
                loading={loading}
                css={override}
                size={150}
              />
            ) : (
              <img
                style={{ opacity: loading ? 0.5 : 1 }}
                src={src}
                alt={title}
              />
            )
          }
        </ProgressiveImage>
        <ul>
          {!largeImageUrl ? null : (
            <li>
              <button onClick={() => handleToggler(!toggler)}>
                <Icon.ZoomIn />
              </button>
            </li>
          )}
          {url ? (
            <li>
              <a rel="noopener noreferrer" target="_blank" href={url}>
                <Icon.Link />
              </a>
            </li>
          ) : null}
          {git ? (
            <li>
              <a rel="noopener noreferrer" target="_blank" href={git}>
                <Icon.GitHub />
              </a>
            </li>
          ) : null}
        </ul>
      </div>
      {!url ? (
        <h5>{title}</h5>
      ) : (
        <h5>
          <a rel="noopener noreferrer" target="_blank" href={url}>
            {title}
          </a>
        </h5>
      )}
      {subtitle ? <h6>{subtitle}</h6> : null}
      {!largeImageUrl ? null : (
        <FsLightbox toggler={toggler} sources={largeImageUrl} />
      )}
    </div>
  );
}

export default Portfolio;
