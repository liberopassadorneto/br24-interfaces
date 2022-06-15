import { Button, Modal } from 'antd';
import 'antd/dist/antd.css';
import { useState } from 'react';
import { CustomizingPlan } from './components/CustomizingPlan';

function App() {
  const [isShowModal, setIsShowModal] = useState(false);

  function handleShowModal() {
    setIsShowModal(!isShowModal);
  }

  return (
    <>
      <Button type="primary" onClick={handleShowModal}>
        Open Modal
      </Button>

      <Modal
        width={720}
        visible={true}
        footer={null}
        bodyStyle={{ padding: '40px' }}
      >
        <CustomizingPlan />
      </Modal>
    </>
  );
}

export default App;
