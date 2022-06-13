import {
  Button as AntdButton,
  Card as AntdCard,
  Icon as AntdIcon,
  Tag as TagAntd,
  Typography as AntdTypo,
} from 'antd';
import styled from 'styled-components';

export const Card = styled(AntdCard)`
  height: 100%;
  border-radius: 8px;
  background: ${({ dark }) => (dark ? '#24304BE5' : '#fff')};
  color: '#121214';
`;

export const CardGridWithDivider = styled(AntdCard.Grid)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-shadow: none;
  border-bottom: 1px solid ${({ dark }) => (dark ? '#575C66' : '#EEF0F5')};
  border-radius: 0px;
`;

export const Price = styled(AntdTypo.Text)`
  font-size: 46px;
  line-height: 54px;
  font-weight: 500;
  color: ${({ dark }) => (dark ? '#fff' : '#575C66')};
`;

export const BillingCycle = styled(AntdTypo.Text)`
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  color: ${({ dark }) => (dark ? '#fff' : '#575C66')};
  opacity: 0.8;
`;

export const Title = styled(AntdTypo.Text)`
  font-size: 24px;
  line-height: 32px;
  font-weight: 500;
  color: ${({ dark }) => (dark ? '#fff' : '#575C66')};
`;

export const Tag = styled(TagAntd)`
  font-size: 12px;
  line-height: 20px;
  font-weight: 500;
  border-radius: 8px;
  border: 1px solid ${({ dark }) => (dark ? '#DCF296' : '#fff')};
  background: ${({ dark }) => (dark ? '#DCF296' : '#fff')};
  color: ${({ dark }) => (dark ? '#232529' : '#fff')};

  &:hover {
    opacity: 1;
  }
`;

export const Description = styled(AntdTypo.Text)`
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  color: #575c66;
  color: ${({ dark }) => (dark ? '#fff' : '#575C66')};
`;

export const Feature = styled(AntdTypo.Text)`
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  color: ${({ dark }) => (dark ? '#fff' : '#575C66')};
`;

export const Icon = styled(AntdIcon)`
  margin-right: 8px;
  color: ${({ dark }) => (dark ? '#C5EA52' : '#575C66')};
`;

export const Button = styled(AntdButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 1px solid #c5ea52;
  border-radius: 8px;
  padding: 24px 48px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  background: ${({ dark }) => (dark ? '#C5EA52' : '#fff')};
  color: ${({ dark }) => (dark ? '#262626' : '#262626')};
  &:hover {
    color: #232529;
    background: ${({ dark }) => (dark ? '#a8d61a' : '#C5EA52')};
    border: 1px solid ${({ dark }) => (dark ? '#a8d61a' : '#C5EA52')};
  }
`;
