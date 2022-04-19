import {useState} from 'react';

function useTags() { //封装一个自定义的Hook
  const [tags, setTags] = useState<string[]>(['衣', '食', '主', '行'])
  //es6写法,将数组通过对象return出去
  return {tags, setTags}
}

export {useTags}