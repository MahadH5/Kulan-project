import { useState } from "react";
import "./ProgressiveImage.css";

function ProgressiveImage({ src, alt, className = "" }) {
  const [status, setStatus] = useState("loading");

  return (
    <div className={`progressive-image ${className}`}>
      {status !== "loaded" && (
        <div
          className={`progressive-image__placeholder ${
            status === "error" ? "progressive-image__placeholder--error" : ""
          }`}
          aria-hidden="true"
        >
          {status === "error" && (
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
          )}
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`progressive-image__img ${
          status === "loaded" ? "progressive-image__img--visible" : ""
        }`}
        onLoad={() => setStatus("loaded")}
        onError={() => setStatus("error")}
      />
    </div>
  );
}

export default ProgressiveImage;
