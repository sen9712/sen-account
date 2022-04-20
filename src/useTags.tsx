import {useState} from 'react';

function useTags() { //封装一个自定义的Hook
  const [tags, setTags] = useState<{id: number, name: string}[]>([
    {id: 1, name: '衣'},
    {id: 2, name: '食'},
    {id: 3, name: '住'},
    {id: 4, name: '行'},
  ])
  //es6写法,将数组通过对象return出去
  return {tags, setTags}
}

export {useTags}