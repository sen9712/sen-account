import Layout from "component/Layout";
import { Routes, Route, Link } from "react-router-dom";




function App() {
  return (
    <Routes>
        <Route path="/" element={<Tags />}/>
        <Route path="money" element={<Money />} />
        <Route path="statistics" element={<Statistics />} />
        <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

function Tags() {
  return (
    <Layout>
    <h2>标签页</h2>
    </Layout>
  );
}

function Money() {
  return (
    <Layout>
    <h2>记账页</h2>
    </Layout>
  );
}

function Statistics() {
  return (
    <Layout>
    <h2>统计页</h2>
    </Layout>
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