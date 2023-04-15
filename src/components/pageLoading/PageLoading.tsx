import React from "react";
import * as Styled from "./PageLoading.styles";

//components
import ReactLoading from "react-loading";

//theme
import { blueTheme } from "@/theme/blueTheme";

const PageLoading = () => {
  return (
    <Styled.PageLoadingContainer>
      <ReactLoading
        type="bubbles"
        color={blueTheme.colors.loading.page}
        height={80}
        width={120}
      />
    </Styled.PageLoadingContainer>
  );
};

export default PageLoading;
