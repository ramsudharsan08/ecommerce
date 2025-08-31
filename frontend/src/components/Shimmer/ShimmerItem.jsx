import "./ShimmerItem.css";
const ShimmerItem = () => {
  return (
    <div className="shimmer-card p-2 m-2 rounded">
      <div className="shimmer-bg media rounded"></div>
      <div className="p-3">
        <div className="shimmer-bg title-line"></div>
        <div className="shimmer-bg title-line end"></div>

        <div className="shimmer-bg content-line mt-4"></div>
        <div className="shimmer-bg content-line"></div>
        <div className="shimmer-bg content-line"></div>
        <div className="shimmer-bg content-line"></div>
        <div className="shimmer-bg content-line end"></div>
      </div>
    </div>
  );
};
export default ShimmerItem;
