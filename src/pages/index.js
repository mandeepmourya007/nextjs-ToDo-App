import { Input } from 'antd';
import { useState } from 'react';

const { Search } = Input;
const add_to_list = (text, todolist, setTodolist) => {
  if (!text)
    return
  setTodolist([...todolist, { id: todolist.legth, text: text }]);

}
import { List } from 'antd';
import Confirmdelete from "../companents/Confirmdelete"


const TodoList = ({ data }) => {
  return (<List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          // avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
          title={<a href={`/edit/${item.id}`}>{item?.text}</a>}
          
          description={<Confirmdelete id ={item.id}/>}
        />
      </List.Item>
    )}
    
  />)
};

export default function Todo() {
  const [text, setText] = useState("")
  const [todolist, setTodolist] = useState([{
    id:1,
    text: 'Ant Design Title 3',
  },
  {
    id:2,
    text: 'Ant Design Title 4',
  },])



  return (
    <>
      <Search placeholder="enter task" enterButton="Add task" onChange={(e) => {
        setText(e.target.value)
      }

      } value={text}
        onSearch={() => { add_to_list(text, todolist, setTodolist); setText("") }} />
      <TodoList data={todolist} />
    </>
  )
}