import React from "react";
import styled from "styled-components";

const ListComponent = styled.div`
  width: 100%;
  border: solid 1px #4a4a4a;
  padding: 8px;
  overflow: hidden;
  @media (min-width: 768px) {
    padding: 16px;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ListParagraph = styled.p`
  font-size: 2.8rem;
  margin: 0;
  font-weight: 700;
`;

const TimeParagraph = styled.p`
  margin: 0;
  font-size: 2.4rem;
`;

const Paragraph = styled.p`
  width: 100%;
  margin: 0.5rem 0 ;
  font-size: 2.4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const MessageListComponent = (props) => {
  return (
    <ListComponent>
      <Div>
        <ListParagraph>{props.title}</ListParagraph>
        <TimeParagraph>{props.time}</TimeParagraph>
      </Div>
      <Paragraph>{props.text}</Paragraph>
    </ListComponent>
  );
};

export default MessageListComponent;
