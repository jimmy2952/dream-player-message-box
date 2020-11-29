import React, { useCallback, useContext } from "react";
import { Link } from "react-router-dom";

import { ShowContext } from "./show-context"
import styled from "styled-components";

const MessageDetailContainer = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 50%;
    display: block;
    padding: 16px;
    padding: 8px;
    overflow: auto;
  }
`;

const MessageTitle = styled.p`
  font-size: 2.8rem;
  margin: 1rem 0;
`;

const Paragraph = styled.p`
  margin: 0;
  font-size: 2.8rem;
`;

const BackP = styled.p`
  font-size: 2.8rem;
  margin: 1rem 0;
  @media (min-width: 768px) {
    display: none;
  }

`

const MessageDetailComponent = (props) => {
  const show = useContext(ShowContext)
  const { title, text } = props.location.state
  return (
    <MessageDetailContainer>
      <Link to="/"><BackP onClick={show.showListHandler}>返回上一頁</BackP></Link>
      <MessageTitle>{title}</MessageTitle>
      <Paragraph>
        {text}
      </Paragraph>
    </MessageDetailContainer>
  );
};

export default MessageDetailComponent;
