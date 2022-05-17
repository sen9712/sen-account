import Layout from "component/Layout";
import styled from "styled-components";
import {TagsSection} from './Money/TagsSection';
import {CategorySection} from './Money/CategorySection';
import {NotesSection} from './Money/NotesSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {useState} from 'react';
import {useRecords} from '../hooks/useRecords';

const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`
const defaultFormData = {
  tagsId: [] as number[],
  note: '',
  category: '-' as Category,
  amount: '0',
}


type Category = '-' | '+'
function Money() {
  const {addRecords} = useRecords()
  const [selected, setSelected] = useState(defaultFormData)

  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({...selected, ...obj});
  };

  const submit = () => {
    addRecords(selected)
    alert('保存成功')
    setSelected(defaultFormData)
  };

  return (
    <MyLayout>
      <TagsSection
        value={selected.tagsId}
        onChange={tagsId => onChange({tagsId})}
      />
      <NotesSection
        value={selected.note}
        onChange={note => onChange({note})}
      />
      <CategorySection
        value={selected.category}
        onChange={category => onChange({category})}
      />
      <NumberPadSection
        value={selected.amount}
        onChange={amount => onChange({amount})}
        onOk={submit}
      />
    </MyLayout>
  );
}

export default Money