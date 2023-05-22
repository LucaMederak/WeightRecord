import React from "react";

//styles
import * as Styled from "./LoadingGrid.styles";

//components
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingGrid = ({
  columns,
  rows,
}: {
  columns?: number;
  rows?: number;
}) => {
  const loadingRows = Array(rows || 4).fill("");
  const loadingRowSkeleton = Array(columns || 4).fill("");

  const skeletonDarkTheme = {
    baseColor: "rgba(208, 218, 255, 0.14)",
    highlightColor: "rgba(34, 93, 255, 0.07)",
  };

  return (
    <Styled.LoadingWrapper>
      {loadingRows.map((_, index) => (
        <Styled.LoadingRow key={index}>
          {loadingRowSkeleton.map((_, index) => (
            <Styled.LoadingRowItem key={index}>
              <Skeleton {...skeletonDarkTheme} />
            </Styled.LoadingRowItem>
          ))}
        </Styled.LoadingRow>
      ))}
    </Styled.LoadingWrapper>
  );
};

export default LoadingGrid;
