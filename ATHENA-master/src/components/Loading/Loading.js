import React from "react";
import styled from "styled-components";
import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";
function Loading() {
  return (
    <LoadingArea>
      <HashLoader color={"#112D4E"} loading={true} css={override} size={150} />
    </LoadingArea>
  );
}
const LoadingArea = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #DBE2EF;
`;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: #3F72AF;
`;
export default Loading;
