import { Radio as AntdRadio, Typography as AntdTypo } from 'antd';
import styled from 'styled-components';

export const PlanTitle = styled(AntdTypo.Text)`
  font-size: 20px;
  line-height: 28px;
  font-weight: 500;
  color: #000;
`;

export const PlanDescription = styled(AntdTypo.Text)`
  font-size: 12px;
  line-height: 20px;
  font-weight: 400;
  color: #868e9e;
`;

export const InfoTitle = styled(AntdTypo.Text)`
  font-size: 14px;
  line-height: 22px;
  font-weight: 500;
  color: #000;
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
  font-weight: 400;
  color: #000;
`;

export const RadioInfo = styled(AntdTypo.Text)`
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  color: #000;
`;

export const RadioOffer = styled(AntdTypo.Text)`
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  color: #08aaf2;
`;
