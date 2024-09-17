import styled from 'styled-components';
import { CiBoxes } from 'react-icons/ci';

interface isHighlighted {
  isSelected: boolean;
}

export const HeaderContainer = styled.div`
  display: flex;
  background-color: #17192D;
  padding: 0.5rem;
`;

export const Logo = styled.img`
  margin-left: 0.6rem;
  height: 1.8rem;
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: flex-end;
`;

export const BorderText = styled.span<isHighlighted>`
  display: flex;
  align-items: center;
  padding: 0.3rem 0.5rem;
  border-radius: 0.3rem;
  background-color: ${props => (props.isSelected ? '#2188FF' : '#023B78')};
  color: ${props => (props.isSelected ? 'white' : 'black')};
  font-size: 0.8rem;
  margin-right: 1rem;
  cursor: pointer;
`;

export const Icon = styled(CiBoxes)`
  margin-right: 0.3rem;
`;
