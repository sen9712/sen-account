import { Link } from "react-router-dom";

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

export default NoMatch