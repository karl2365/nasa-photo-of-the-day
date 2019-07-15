import React from "react";
import styled from "styled-components";

const CopyDiv = styled.div`
  margin: 10px 0;
  font-size: 1.3rem;
  color: #115599;
`;
export default function Copy(props) {
  return <CopyDiv>Copyright &copy; {props.data.copyright}</CopyDiv>;
}
