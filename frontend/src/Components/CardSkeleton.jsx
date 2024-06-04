import React from "react";
import Skeleton from "react-loading-skeleton";

const CardSkeleton = ({ total }) => {
  return Array(total)
    .fill(0)
    .map((item, i) => (
      <div className="men-product-card skeleton-card" key={i} >
        <div className="men-product-image skeleton-image ">
          <Skeleton width={200} height={100} />
        </div>
        <div className="product-description">
          <Skeleton count={3} />
          <div className="skeleton">
            <div className="skeleton-left">
              <Skeleton height={35} />
            </div>
            <div className="skeleton-right">
              <Skeleton height={35} />
            </div>
          </div>
        </div>
      </div>
    ));
};

export default CardSkeleton;
