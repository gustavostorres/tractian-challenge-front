import styled from 'styled-components';
import { FaBolt } from 'react-icons/fa';
import { IoAlertCircleOutline } from "react-icons/io5";

interface IconProps {
  status?: 'operating' | 'alert' | null;
}

interface BorderedTextProps extends IconProps {
  status?: 'operating' | 'alert' | null;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.3rem;
  border: 0.05rem solid #ccc;
  padding: 10px;
  border-radius: 0.3rem;
  margin-left: 0.3rem;
  margin-right: 0.3rem;
  height: 41rem;
  background-color: white;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BoldText = styled.span`
  margin-left: 1.7rem;
  font-weight: bold;
`;

export const SecundaryText = styled.span`
  opacity: 0.7;
`;

export const BorderedText1 = styled.span<BorderedTextProps>`
  display: inline-flex;
  padding: 0.3rem;
  border: 1px solid ${(props) => props.status === 'operating' ? '#27ADFF' : '#ccc'};
  border-radius: 0.3rem;
  color: ${(props) => props.status === 'operating' ? 'white' : '#77818C'};
  font-size: 0.8rem;
  background-color: ${(props) => props.status === 'operating' ? '#27ADFF' : 'white'};
`;

export const BorderedText2 = styled.span<BorderedTextProps>`
  display: inline-flex;
  padding: 0.3rem;
  border: 1px solid ${(props) => props.status === 'alert' ? '#27ADFF' : '#ccc'};
  border-radius: 0.3rem;
  color: ${(props) => props.status === 'alert' ? 'white' : '#77818C'};
  font-size: 0.8rem;
  background-color: ${(props) => props.status === 'alert' ? '#27ADFF' : 'white'};
  margin-left: 0.8rem;
  margin-right: 2.7rem;
`;

export const EnergyIcon = styled(FaBolt)<IconProps>`
  margin-right: 0.3rem;
  color: ${(props) => props.status === 'operating' ? 'white' : '#27ADFF'};
  background-color: ${(props) => props.status === 'operating' ? '#27ADFF' : 'white'};
  border: ${(props) => props.status === 'operating' ? 'none' : 'white'};
  padding: 0.2rem;
`;

export const CriticalIcon = styled(IoAlertCircleOutline)<IconProps>`
  margin-right: 0.3rem;
  color: ${(props) => props.status === 'alert' ? 'white' : '#27ADFF'};
  background-color: ${(props) => props.status === 'alert' ? '#27ADFF' : 'white'};
  border: ${(props) => props.status === 'alert' ? 'none' : 'white'};
  padding: 0.2rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1rem;
  width: 100%;
`;
