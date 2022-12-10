import styled from 'styled-components';

export const GalleryItem = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;

  text-decoration: none;
  color: black;
  flex-basis: calc(100% / 5 - 15px);
  border: 1px solid #eee;
  margin-left: 15px;
  margin-top: 15px;
  height: auto;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;
export const GalleryImg = styled.img`
  display: block;
  width: 100%;
  height: 30vh;
  object-fit: cover;
`;
