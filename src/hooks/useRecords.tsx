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
    if(newRecord.amount.slice(-1) === '.'){
      newRecord.amount = newRecord.amount + '0'
    }
    if (JSON.parse(newRecord.amount) <= 0) {
      alert('请输入金额');
      return false;
    }
    if (newRecord.tagsId.length === 0) {
      alert('请选择标签');
      return false;
    }
    const record = {...newRecord, createdAt: (new Date()).toISOString()}
    setRecords([...records, record])
    return true
  }

  return {records, addRecords}
}