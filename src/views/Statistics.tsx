import Layout from "component/Layout";
import {CategorySection} from './Money/CategorySection';
import {useState} from 'react';
import styled from 'styled-components';
import {useRecords} from '../hooks/useRecords';
import day from 'dayjs'
import {useTags} from '../hooks/useTags';

const CategoryWrapper = styled.div`
  background-color: white;
`
const Item = styled.div`
  display:flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  > .note{
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`;
const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`;


function Statistics() {
  const [category, setCategory] = useState<'-' | '+'>('-')
  const {records} = useRecords()
  const {getTagName} = useTags()
  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection
          value={category}
          onChange={value => setCategory(value)}
        />
      </CategoryWrapper>
      <div>
        {
          records.map((r,index )=>{
            return (
              <Item key={index}>
                <div className="tags oneLine">
                  {r.tagsId.map((tagsId, index_1) => <span key={index_1}>{getTagName(tagsId)}</span>)}
                </div>
                {/*备注部分*/}
                {r.note && <div className="note">
                  {r.note}
                </div>}
                <div className="amount">
                ￥{r.amount}
              </div>
                {/*{day(r.createdAt).format('YYYY年MM月DD日')}*/}
              </Item>
            )
          })
        }
      </div>
    </Layout>
  );
}

export default Statistics