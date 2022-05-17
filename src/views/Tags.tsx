import Layout from "component/Layout";
import {useTags} from '../hooks/useTags';
import styled from 'styled-components';
import Icon from '../component/Icon';
import { Link } from "react-router-dom";
import { Button } from "component/Button";
import { Center } from "component/Center";
import { Space } from "component/Space";

const TagList = styled.ol`
  font-size: 16px;
  background:white;
  > li{
    //#e5e5e7
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    margin-left: 16px;
    > a{
      padding: 12px 16px 12px 0;
      display:flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

function Tags() {
  const {tags, addTag }= useTags()
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag.id}>
            <Link to={'/tags/' + tag.id}>
              {tag.name}
              <Icon name='right'/>
            </Link>
          </li>
        )}
      </TagList>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Button onClick={addTag}>新增标签</Button>
      </Center>
    </Layout>
  );
}

export default Tags