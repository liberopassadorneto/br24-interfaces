import { Button, Modal, Row } from 'antd';
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
        visible={isShowModal}
        closeIcon={<></>}
        footer={null}
        bodyStyle={{ padding: '40px' }}
      >
        <Row
          type="flex"
          gutter={24}
          style={{
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          {/* <Col span={12}>
            <PricingCard {...basicPricingCard} />
          </Col>
          <Col span={12}>
            <PricingCard {...proPricingCard} />
          </Col> */}
          <CustomizingPlan />
        </Row>
      </Modal>
    </>
  );
}

export default App;
