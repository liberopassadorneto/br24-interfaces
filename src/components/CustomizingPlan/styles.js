import {
  Button as AntdButton,
  Radio as AntdRadio,
  Typography as AntdTypo,
} from 'antd';
import styled from 'styled-components';

export const PlanTitle = styled(AntdTypo.Text)`
  font-size: 20px;
  line-height: 28px;
  font-weight: 600;
  color: #232529;
`;

export const PlanDescription = styled(AntdTypo.Text)`
  font-size: 12px;
  line-height: 20px;
  font-weight: 500;
  color: #868e9e;
`;

export const InfoTitle = styled(AntdTypo.Text)`
  font-size: 14px;
  line-height: 22px;
  font-weight: 600;
  color: #232529;
  text-transform: uppercase;
`;

export const Radio = styled(AntdRadio)`
  display: block;
  height: 30px;
  line-height: 30px;
  .ant-radio-checked .ant-radio-inner {
    border-color: #a8d61a !important ;
  }

  .ant-radio-checked .ant-radio-inner:after {
    background-color: #a8d61a;
  }

  .ant-radio:hover .ant-radio-inner {
    border-color: #a8d61a;
  }

  .ant-radio-checked .ant-radio-inner:focus {
    border-color: #a8d61a;
  }
`;

export const RadioLabel = styled(AntdTypo.Text)`
  font-size: 14px;
  line-height: 22px;
  font-weight: 00;
  color: #232529;
`;

export const RadioInfo = styled(AntdTypo.Text)`
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  color: #232529;
`;

export const RadioOffer = styled(AntdTypo.Text)`
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  color: #ff9901;
`;

export const IntegratorLabel = styled(AntdTypo.Text)`
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  color: #232529;
`;

export const CounterButton = styled(AntdButton)`
  background-color: #eef0f5;
  border-color: #eef0f5;
  color: #868e9e;
  width: 20px;
  height: 20px;
  font-size: 12px;

  &:hover,
  &:focus {
    background-color: #e5e8ef;
    border-color: #e5e8ef;
    color: #868e9e;
  }
`;

export const CounterNumber = styled(AntdTypo.Text)`
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  color: #232529;
`;

export const TotalAmount = styled(AntdTypo.Text)`
  font-size: 30px;
  line-height: 38px;
  font-weight: 600;
  color: #232529;
`;

export const CancelButton = styled(AntdButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;
  padding: 16px;
  background-color: #f5f7fa;
  border-color: #f5f7fa;
  border-radius: 8px;

  &:hover {
    background-color: #eef0f5;
    border-color: #eef0f5;
  }
`;

export const CancelButtonLabel = styled(AntdTypo.Text)`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  letter-spacing: 0.25px;
  color: #41454d;
  text-transform: uppercase;
`;

export const ConfirmButton = styled(AntdButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 40px;
  padding: 16px;
  background-color: #a8d61a;
  border-color: #a8d61a;
  border-radius: 8px;

  &:hover {
    background-color: #c5ea52;
    border-color: #c5ea52;
  }
`;

export const ConfirmButtonLabel = styled(AntdTypo.Text)`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  letter-spacing: 0.25px;
  color: #232529;
  text-transform: uppercase;
`;
