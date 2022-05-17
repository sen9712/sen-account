import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useTags} from '../hooks/useTags';
import Layout from '../component/Layout';
import Icon from '../component/Icon';
import {Button} from '../component/Button';
import styled from 'styled-components';
import {FileInput} from '../component/FileInput';
import { Center } from 'component/Center';
import { Space } from 'component/Space';


const Topbar = styled.header`
  display:flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background:white;
`

const InputWrapper = styled.div`
  background:white;
  padding: 0 16px;
  margin-top: 8px;
`;

const Tag: React.FC = () => {
  const {findTag, updateTag, deleteTag} = useTags()
  const  navigate = useNavigate()
  const {id = ''} = useParams<'id'>();
  const tag = findTag(id)
  const tagContent = (tag: { id: number; name: string }) => (
    <div>
      <InputWrapper>
        <FileInput label="标签名" type="text" placeholder="标签名"
               value={tag.name}
               onChange={(e) => {
                 updateTag(tag.id, {name: e.target.value});
               }}
        />
      </InputWrapper>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Button
          onClick={() => {
          deleteTag(tag.id);
        }}
        >删除标签</Button>
      </Center>
    </div>
  );

  const onClickBack = () => {
    navigate(-1)
  }

  return(
    <Layout>
      <Topbar>
        <Icon name='left' onClick={onClickBack}/>
        <span>编辑标签</span>
        <Icon/>
      </Topbar>
      {/* eslint-disable-next-line react/jsx-no-undef */}
      {tag ? tagContent(tag) : <Center>tag 不存在</Center>}
    </Layout>
  )
}
export {Tag}