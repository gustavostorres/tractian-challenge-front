import styled from 'styled-components';

interface TreeItemProps {
  isSelected: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  border: 0.05rem solid #ccc;
  padding: 10px;
  border-radius: 0.3rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  height: 36rem;
  width: 30rem;
  background-color: white;
`;

export const TreeItem = styled.div<TreeItemProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${props => (props.isSelected ? '#2188FF' : 'transparent')};
  color: ${props => (props.isSelected ? 'white' : 'black')};
  padding: 5px;
  margin: 2px 0;
  
  &:hover {
    background-color: ${props => (props.isSelected ? '#2188FF' : '#f0f0f0')};
  }
`;

export const TreeImage = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

export const ExpandIcon = styled.span`
  margin-left: 8px;
`;
