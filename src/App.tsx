import Tags from 'views/Tags';
import Money from 'views/Money';
import Statistics from 'views/Statistics';
import NoMatch from 'views/NoMatch'
import {Routes, Route, Navigate} from 'react-router-dom';
import {Tag} from 'views/Tag';



function App() {
  return (
    <Routes>
        <Route path="tags" element={<Tags />}/>
      <Route path="/tags/:id" element={<Tag/>}/>
        <Route path="money" element={<Money />} />
        <Route path="statistics" element={<Statistics />} />
      <Route path="/" element={<Navigate to="money" />} />
        <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;