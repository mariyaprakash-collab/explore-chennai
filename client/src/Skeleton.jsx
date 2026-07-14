import "./skeleton.css";

function Skeleton() {
  return (
    <div className="container">
    <div className="skeleton-card">
      <div className="skeleton-image"></div>

      <div className="skeleton-title"></div>

      <div className="skeleton-text"></div>
      <div className="skeleton-tips"></div>
      <div className="skeleton-location"></div>
    </div>
    </div>
  );
}

export default Skeleton;