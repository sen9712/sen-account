import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
    display:flex;
    align-items: center;
    > span { margin-right: 16px; white-space: nowrap; }
    > input {
      display:block;
      width: 100%;
      height: 44px;
      background: none;
      border: none;
    }
`;

type Props = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
//继承input标签的属性

const FileInput: React.FC<Props> = (props) => {
  const {label, children, ...rest} = props;//这个...rest要学习一下
  return (
    <Label>
      <span>{props.label}</span>
      <input {...rest} />
    </Label>
  );
};

export {FileInput};