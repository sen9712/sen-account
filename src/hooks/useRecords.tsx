import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

// type newRecordItem = {
//   tagsId: number[]
//   note: string
//   category: '+' | '-'
//   amount: string
// }
//
// type RecordItem = newRecordItem & {
//   createdAt: string
// }
type RecordItem = {
  tagsId: number[]
  note: string
  category: '+' | '-'
  amount: string
  createdAt: string
}

type newRecordItem = Omit<RecordItem, 'createdAt'>


export const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([])
  //首次加载从localStorage里面读取一下
  useEffect(() => {
     setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'))
  }, [])
  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records))
  }, [records])

  const addRecords = (newRecord: newRecordItem) => {
    const record = {...newRecord, createdAt: (new Date()).toISOString()}
    setRecords([...records, record])
  }

  return {records, addRecords}
}