import { Col, Divider, Radio as AntdRadio, Row } from 'antd';
import {
  CancelButton,
  CancelButtonLabel,
  ConfirmButton,
  ConfirmButtonLabel,
  CounterButton,
  CounterNumber,
  InfoTitle,
  IntegratorLabel,
  PlanDescription,
  PlanTitle,
  Radio,
  RadioInfo,
  RadioLabel,
  RadioOffer,
  TotalAmount,
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

      <Divider className="mt-0 mb-2" />

      <Col>
        <Row gutter={[0, 16]}>
          <Col>
            <InfoTitle>Billing Period</InfoTitle>
          </Col>

          <Col>
            <AntdRadio.Group className="d-flex flex-column">
              <Row gutter={[0, 8]}>
                <Col>
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
                </Col>
                <Col>
                  <Row type="flex" align="middle">
                    <Col span={12}>
                      <Radio value={2}>
                        <RadioLabel>Pay Annually</RadioLabel>
                      </Radio>
                    </Col>
                    <Col span={12}>
                      <RadioInfo>
                        $450 <RadioOffer>~ 2 months free</RadioOffer>
                      </RadioInfo>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </AntdRadio.Group>
          </Col>
        </Row>
      </Col>

      <Col>
        <Row gutter={[0, 16]}>
          <Col>
            <InfoTitle>Additional Numbers</InfoTitle>
          </Col>
          <Col>
            <Row gutter={[0, 16]}>
              <Col>
                <Row>
                  <Col span={12}>
                    <IntegratorLabel>Br24's Integrator</IntegratorLabel>
                  </Col>
                  <Col span={12}>
                    <CounterButton icon="plus" />
                    <CounterNumber className="mx-4">3</CounterNumber>
                    <CounterButton icon="minus" />
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col span={12}>
                    <IntegratorLabel>API Oficial</IntegratorLabel>
                  </Col>

                  <Col span={12}>
                    <CounterButton icon="plus" />
                    <CounterNumber className="mx-4">2</CounterNumber>
                    <CounterButton icon="minus" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>

      <Col className="my-3">
        <Row type="flex" align="middle">
          <Col span={12}>
            <InfoTitle>Total</InfoTitle>
          </Col>
          <Col span={12}>
            <TotalAmount>$129.00</TotalAmount>
          </Col>
        </Row>
      </Col>

      <Col>
        <Row>
          <Col span={12}>
            <CancelButton>
              <CancelButtonLabel>Cancel</CancelButtonLabel>
            </CancelButton>
          </Col>
          <Col span={12}>
            <ConfirmButton>
              <ConfirmButtonLabel>Confirm</ConfirmButtonLabel>
            </ConfirmButton>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
