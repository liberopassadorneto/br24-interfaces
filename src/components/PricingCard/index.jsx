import { Col, List, Row } from 'antd';
import {
  BillingCycle,
  Button,
  Card,
  Description,
  Feature,
  Icon,
  Price,
  Tag,
  Title,
} from './styles';

const gridStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  boxShadow: 'none',
};

export function PricingCard({
  price,
  title,
  description,
  features,
  buttonLabel,
  dark,
}) {
  return (
    <Card dark={dark} bodyStyle={gridStyle}>
      <Card.Grid style={gridStyle} hoverable={false}>
        <Row gutter={[0, 16]}>
          <Col>
            <Row>
              <Col>
                <Price dark={dark}>{price}</Price>
                <BillingCycle dark={dark}>/month</BillingCycle>
              </Col>
            </Row>
          </Col>

          <Col>
            <Row type="flex" align="middle" gutter={[16, 4]}>
              <Col>
                <Title dark={dark}>{title}</Title>
              </Col>
              <Col>
                <Tag dark={dark}>Recomendado</Tag>
              </Col>
              <Col>
                <Description dark={dark}>{description}</Description>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Grid>

      <Card.Grid style={gridStyle} hoverable={false} className="pt-2">
        <List
          size="small"
          split={false}
          dataSource={features}
          renderItem={(item) => (
            <List.Item key={item.title} style={{ justifyContent: 'start' }}>
              <Icon dark={dark} type="check" />
              <Feature dark={dark}>{item.title}</Feature>
            </List.Item>
          )}
        />
      </Card.Grid>

      <Card.Grid style={gridStyle} className="pt-2" hoverable={false}>
        <Row>
          <Col span={18}>
            <Button dark={dark}>{buttonLabel}</Button>
          </Col>
        </Row>
      </Card.Grid>
    </Card>
  );
}
