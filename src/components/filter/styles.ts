import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 30rem;
  border-bottom: 0.05rem solid #ccc;
  padding-bottom: 0.2rem;
`;

export const SearchInput = styled.input`
  flex-grow: 1;
  font-size: 1rem;
  border: none;
  outline: none;
  opacity: 0.3;
`;

export const SearchButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const SearchIcon = styled(AiOutlineSearch)`
  color: #888;
  font-size: 1.5rem;
`;