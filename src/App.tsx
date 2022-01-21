import Tags from 'views/Tags';
import Money from 'views/Money';
import Statistics from 'views/Statistics';
import NoMatch from 'views/NoMatch'
import { Routes, Route } from "react-router-dom";




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

export default App;