import { Col, Divider, Radio as AntdRadio, Row, Typography } from 'antd';
import {
  InfoTitle,
  PlanDescription,
  PlanTitle,
  Radio,
  RadioInfo,
  RadioLabel,
  RadioOffer,
} from './styles';

export function CustomizingPlan() {
  return (
    <Row gutter={[0, 24]}>
      <Col>
        <Row>
          <Col>
            <PlanTitle>Plan Pro | Customize your plan</PlanTitle>
          </Col>
          <Col>
            <PlanDescription>
              It already includes one Br24's integrator and one Oficial API
              numbers.
            </PlanDescription>
          </Col>
        </Row>
      </Col>

      <Divider className="my-2" />

      <Col>
        <Row gutter={[0, 8]}>
          <Col>
            <InfoTitle>Billing Period</InfoTitle>
          </Col>

          <Col>
            <AntdRadio.Group className="d-flex flex-column">
              <Row type="flex" align="middle">
                <Col span={12}>
                  <Radio value={1}>
                    <RadioLabel>Pay Monthly</RadioLabel>
                  </Radio>
                </Col>
                <Col span={12}>
                  <RadioInfo>$45 month</RadioInfo>
                </Col>
              </Row>

              <Row type="flex" align="middle">
                <Col span={12}>
                  <Radio value={2}>
                    <RadioLabel>Pay Annually</RadioLabel>
                  </Radio>
                </Col>
                <Col span={12}>
                  <RadioInfo>
                    $450 <RadioOffer>w/ 2 month free</RadioOffer>
                  </RadioInfo>
                </Col>
              </Row>
            </AntdRadio.Group>
          </Col>
        </Row>
      </Col>

      <Col>
        <Col>
          <InfoTitle>Additional Numbers</InfoTitle>
        </Col>
        <Col>
          <Row>
            <Col span={12}>Br24's Integrator</Col>
            <Col span={12}>3</Col>
          </Row>
          <Row>
            <Col span={12}>Oficial API</Col>
            <Col span={12}>2</Col>
          </Row>
        </Col>
      </Col>

      <Col>
        <Row>
          <Col span={12}>
            <InfoTitle>Total</InfoTitle>
          </Col>
          <Col span={12}>
            <Typography.Text style={{ fontSize: '12px' }}>
              $129.00 per month
            </Typography.Text>
          </Col>
        </Row>
      </Col>

      <Col>
        <Row>
          <Col span={12}>CANCEL</Col>
          <Col span={12}>CONFIRM</Col>
        </Row>
      </Col>
    </Row>
  );
}
