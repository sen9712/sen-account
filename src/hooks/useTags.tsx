import {useEffect, useState} from 'react';
import {createdId} from '../lib/createdId';
import {useUpdate} from './useUpdate';

type Tag = {
  id: number
}

function useTags() { //封装一个自定义的Hook
  const [tags, setTags] = useState<{id: number, name: string}[]>([])
  //tags会存在undefined到空数组的情况,我们应该去处理这个操作，添加计数器去解决这个问题
  useEffect(() => {
    let localTag = JSON.parse(window.localStorage.getItem('tag') || '[]')
    if(localTag.length === 0) {
      localTag = [
        {id: createdId(), name: '衣'},
        {id: createdId(), name: '食'},
        {id: createdId(), name: '住'},
        {id: createdId(), name: '行'},
      ]
    }
    setTags(localTag)
  }, [])//组件挂载的时候执行
  useUpdate(()=>{
    window.localStorage.setItem('tag', JSON.stringify(tags))
  },[tags])
  const findTag = (id: string) => {
    return tags.find((tag: Tag)=>{
      return tag.id === parseInt(id)
    })
  }

  const updateTag = (id: number, obj: {name: string}) => {
  //  方法一
  // 我们不能通过const tag = findTag(id)，原因是不能直接更改tag,所以我们需要深拷贝
    // 首先要通过id找到我们需要改的tag
  // 深拷贝 tags 得到 tagsClone
  //   const tagsClone = JSON.parse(JSON.stringify(tags))
  //   const index = id -1
  //   tagsClone.splice(index, 1, {id: id, name: obj.name})
  //   setTags(tagsClone)

    //方法二、更好的方法
    setTags(tags.map(tag => tag.id === id ? {id, name: obj.name} : tag));
  }

  const deleteTag = (id: number) => {
    //方法一、
    // const tagsClone = JSON.parse(JSON.stringify(tags))
    // const index = id -1
    // tagsClone.splice(index, 1)
    // setTags(tagsClone)

    //方法二、更好的方法
    setTags(tags.filter(tag => tag.id !== id))
  }

  const addTag = () => {
    const tagName = window.prompt('现标签的名字为:')
    if(tagName === '') alert('内容不能为空')
    if(tagName !== null && tagName !== '') {
      setTags([...tags,{id: createdId(), name:tagName}])
    }
  }

  //es6写法,将数组通过对象return出去
  return {tags, setTags, findTag, updateTag, deleteTag, addTag}
}

export {useTags}