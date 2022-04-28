import styled from 'styled-components';
import React, {ChangeEventHandler} from 'react';
import {FileInput} from '../../component/FileInput';

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 14px 16px;
  font-size: 14px;
`

type Props = {
  value: string,
  onChange: (value: string) => void
}
const NotesSection: React.FC<Props> = (props) => {
  const note = props.value
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <Wrapper>
    <FileInput label='备注' type="text" value={note} onChange={onChange}
               placeholder="请填写备注" />
    </Wrapper>
  )
}

export {NotesSection}
