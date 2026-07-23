import "./PageHeader.css";

function PageHeader({ heading, subtext }) {
  return (
    <div className="page-header container">
      <h1 className="page-header__heading">{heading}</h1>
      {subtext && <p className="page-header__subtext">{subtext}</p>}
    </div>
  );
}

export default PageHeader;
