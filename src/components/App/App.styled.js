import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: auto;
`;

export const Span = styled.span`
  display: inline-block;
  text-align: center;
  margin-top: 40px;
  font-size: 30px;
  font-weight: bold;
`;

export const LoadMoreBtn = styled.button`
  margin: 0 auto;
  text-align: center;
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: blue;
  color: white;
  ${'' /* margin-bottom: 30px; */}
  &:hover {
    cursor: pointer;
    background-color: #3399ff;
    color: black;
  }
`;

export const Loading = styled.div`
  margin: 0, auto;
`;

export const Warning = styled.h2`
  color: red;
`;
export const InValidQuery = styled.span`
  color: blue;
  text-decoration-style: solid;
`;
