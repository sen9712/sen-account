import React from 'react';
import { useParams } from "react-router-dom";
import {useTags} from '../useTags';
import Layout from '../component/Layout';
import Icon from '../component/Icon';
import {Button} from '../component/Button';
import styled from 'styled-components';


const Topbar = styled.header`
  display:flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background:white;
`

const Tag: React.FC = () => {
  const {findTag} = useTags()
  const {id = ''} = useParams<'id'>();
  const tag = findTag(id)
  return(
    <Layout>
      <Topbar>
        <Icon name='left' />
        <span>编辑标签</span>
        <Icon/>
      </Topbar>
      <div>
        {tag && tag.name}
      </div>
      <div>
        <label>
          <span>备注</span>
          <input
            type="text"
            placeholder="标签名"
          />
        </label>
      </div>
      <div>
        <Button>删除标签</Button>
      </div>
    </Layout>
  )
}
export {Tag}