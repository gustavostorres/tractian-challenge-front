import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  border: 0.05rem solid #ccc;
  padding: 10px;
  border-radius: 0.3rem;
  margin-right: 0.5rem;
  height: 36rem;
  width: 300rem;
  background-color: white;
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 1rem;
  width: 60rem;
  border: none;
  border-bottom: 0.05rem solid #ccc;
  padding-bottom: 0.5rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 1rem;
  width: 60rem;
  flex-wrap: wrap;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(50% - 1rem);
  margin-left: 10rem;
  margin-top: 3rem;
`;

export const TextRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
`;

export const TextRow2 = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 0.5rem;
`;

export const Text = styled.span`
  font-weight: bold;
  font-size: 1.3rem;
  margin-bottom: 0.25rem;
  margin-right: 15rem;
`;

export const Text2 = styled.span`
  font-size: 0.9rem;
  display: block;
  margin-left: 1rem;
  margin-right: 14rem;
  white-space: nowrap;
`;

export const Separator = styled.div`
  width: 100%;
  height: 0.05rem;
  background-color: #ccc;
  margin: 0.5rem 0;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
