import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Route, Switch, BrowserRouter, NavLink } from "react-router-dom";

import MessageListComponent from "./MessageListComponent";
import MessageDetailComponent from "./MessageDetailComponent";
import { ShowContext } from "./show-context";
import "./App.css";

const data = [
  {
    id: "A",
    title: "訊息A",
    time: "2020-01-02",
    text:
      "快車熟悉很多人傳播台南房地產十年消除，下一頁有很多，欣賞一座版面認證條件不過行情看看而在字元傳說答案，今後銀行，辦公室證券根據評分請問競爭表演起點，適應內存出發很快則是男女偉大身體檢測笑容人口",
  },
  {
    id: "B",
    title: "訊息B",
    time: "2020-02-08",
    text:
      "灌水版本來看想到房價高中歡迎，訓練不必傢俱一款快車，湖口可用。性別印度一時部分連續家庭因為渠道發佈積分，處理器娛樂內部就要報名內部面議趨勢台北基於體會並非其它",
  },
  {
    id: "C",
    title: "訊息C",
    time: "2020-05-22",
    text:
      "來電條款時間空氣合適傳奇塑膠毫不隱藏財產，不好意思性格超市主任房東不對高校對不起性質最快臺灣民眾，網咖博士閲讀本類連續故障你是小遊戲近年來套件勝利給予男生所。",
  },
  {
    id: "D",
    title: "訊息D",
    time: "2020-06-02",
    text:
      "搜尋考慮訓練多多斗內數碼相機一絲照片職業大部分，競爭階段採用經濟專區所說心靈國際適用信譽光碟容易，留學管理員我的您可以學校同時房屋親愛的當前其他的",
  },
  {
    id: "E",
    title: "訊息E",
    time: "2020-07-15",
    text:
      "處理器娛樂內部就要報名內部面 議趨勢台北基於體會並非其它，來電條款時間空氣合適傳奇塑膠毫不隱藏財產， 不好意思性格超市主任房東不對高校對不起性質最快臺灣民眾",
  },
  {
    id: "F",
    title: "訊息F",
    time: "2020-04-21",
    text:
      "競爭階段採用經濟專區所說心靈國際適用信譽光碟容 易，留學管理員我的您可以學校同時房屋親愛的當前其他的，觀看之中部落格， 眼神面前暴力網頁課程權力輔助超過",
  },
];

const Container = styled.div`
  width: 100vw;
  border: 1px solid #4a4a4a;
  display: flex;
  justify-content: space-between;
  @media (min-width: 768px) {
    width: 60vw;
    height: 80vh;
  }
`;

const MessageListContainer = styled.div`
  overflow: auto;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

const MessageListTopDiv = styled.div`
  border: solid 1px #4a4a4a;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    padding: 16px;
  }
`;

const ListParagraph = styled.p`
  font-size: 3rem;
  margin: 0;
`;

const TimeParagraph = styled.p`
  font-size: 2.4rem;
  margin: 0;
`;

const App = () => {
  const [showList, setShowList] = useState(true);
  console.log(window.innerHeight);
  useEffect(() => {
    setShowList(true);
  }, []);
  const showListHandler = () => {
    if (window.innerHeight > 768) {
      return;
    } else {
      setShowList(true);
    }
  };

  return (
    <ShowContext.Provider
      value={{
        showList: showList,
        showListHandler: showListHandler,
      }}
    >
      <BrowserRouter>
        <Container>
          {showList && (
            <MessageListContainer
              onClick={() => {
                if (window.innerHeight > 768) {
                  return;
                } else {
                  setShowList(false);
                }
              }}
            >
              <MessageListTopDiv>
                <ListParagraph>訊息列表</ListParagraph>
                <TimeParagraph>時間排序</TimeParagraph>
              </MessageListTopDiv>
              {data.map((item) => {
                return (
                  <NavLink
                    to={{
                      pathname: `/${item.id}`,
                      state: {
                        title: item.title,
                        time: item.time,
                        text: item.text,
                      },
                    }}
                    activeStyle={{
                      backgroundColor: "#dddddd",
                    }}
                    key={Math.random()}
                  >
                    <MessageListComponent
                      title={item.title}
                      time={item.time}
                      text={item.text}
                    />
                  </NavLink>
                );
              })}
            </MessageListContainer>
          )}
          <Switch>
            <Route path="/:id" component={MessageDetailComponent} />
          </Switch>
        </Container>
      </BrowserRouter>
    </ShowContext.Provider>
  );
};

export default App;
