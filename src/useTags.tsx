import {useState} from 'react';
import {createdId} from './lib/createdId';

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
  const findTag = (id: string) => {
    return tags.find((tag: Tag)=>{
      return tag.id === parseInt(id)
    })
  }

  // const findTsgIndex = (id: string) => {
  //
  // }

  const updateTag = (id: number, obj: {name: string}) => {
  // 我们不能通过const tag = findTag(id)，原因是不能直接更改tag,所以我们需要深拷贝
    // 首先要通过id找到我们需要改的tag
  // 深拷贝 tags 得到 tagsClone
    const tagsClone = JSON.parse(JSON.stringify(tags))
    const index = id -1
    tagsClone.splice(index, 1, {id: id, name: obj.name})
    setTags(tagsClone)
  }

  //es6写法,将数组通过对象return出去
  return {tags, setTags, findTag, updateTag}
}

export {useTags}