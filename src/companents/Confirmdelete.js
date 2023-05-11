import { Button, Modal, Space } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';
const { confirm } = Modal;

const showDeleteConfirm = (id) => {
  confirm({
    title: 'Are you sure delete this task?',
    icon: <ExclamationCircleFilled />,
    content: '',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      console.log('OK',id);
    },
    onCancel() {
      console.log('Cancel');
    },
  });
};

const Confirmdelete =({id})=>{

    return  <Button onClick={()=>{showDeleteConfirm(id)}}  >
    Delete
  </Button>
            
}

export default  Confirmdelete