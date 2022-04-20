import {useState} from 'react';
import {createdId} from './lib/createdId';

function useTags() { //封装一个自定义的Hook
  const [tags, setTags] = useState<{id: number, name: string}[]>([
    {id: createdId(), name: '衣'},
    {id: createdId(), name: '食'},
    {id: createdId(), name: '住'},
    {id: createdId(), name: '行'},
  ])
  //es6写法,将数组通过对象return出去
  return {tags, setTags}
}

export {useTags}