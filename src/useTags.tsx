import {useState} from 'react';
import {createdId} from './lib/createdId';
// import {Tag} from './views/Tag';

const defaultTags = [
  {id: createdId(), name: '衣'},
  {id: createdId(), name: '食'},
  {id: createdId(), name: '住'},
  {id: createdId(), name: '行'},
]

type Tag = {
  id: number
}

function useTags() { //封装一个自定义的Hook
  const [tags, setTags] = useState<{id: number, name: string}[]>(defaultTags)
  // const choose = (tag: Tag, id: string)=> {
  //   return tag.id === parseInt(id)
  // }
  const findTag = (id: string) => {
    const needTag = tags.find((tag: Tag)=>{
      return tag.id === parseInt(id)
    })
    return needTag
  }
  // const findTag = () =>
  //es6写法,将数组通过对象return出去
  return {tags, setTags, findTag}
}

export {useTags}