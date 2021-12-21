/*
 * @Author: your name
 * @Date: 2021-12-09 11:58:46
 * @LastEditTime: 2021-12-21 17:32:04
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \my-app\src\App.tsx
 */
import { Routes, Route, Outlet, Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

const Nav = styled.nav`
  border: 1px solid blue;
  > ul {
    display: flex;
    > li {
      width: 33.3333%;
      text-align: center;
      padding: 16px;
    }
  }
`;


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Tags />} />
        <Route path="money" element={<Money />} />
        <Route path="statistics" element={<Statistics />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <Wrapper>
      <Main>
        <Outlet />
      </Main>
      <Nav>
        <ul>
          <li>
            <Link to="/">标签页</Link>
          </li>
          <li>
            <Link to="/money">记账页</Link>
          </li>
          <li>
            <Link to="/statistics">统计页</Link>
          </li>
        </ul>
      </Nav>
    </Wrapper>
  );
}

function Tags() {
  return (
    <div>
      <h2>标签页</h2>
    </div>
  );
}

function Money() {
  return (
    <div>
      <h2>记账页</h2>
    </div>
  );
}

function Statistics() {
  return (
    <div>
      <h2>统计页</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>错误访问</h2>
      <p>
        <Link to="/">返回首页</Link>
      </p>
    </div>
  );
}

export default App;