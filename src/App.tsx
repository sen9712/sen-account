import { Routes, Route, Outlet, Link } from "react-router-dom";
import styled from "styled-components";
import Nav from "component/Nav";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
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
      <Nav/>
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