import styled from "styled-components";

export const Container = styled.article`
  width: 300px;
  display: flex;
  flex-direction: column;
  margin-bottom: 70px;
  @media screen and (max-width: 600px) {
    width: 100vw;
    margin: 0px 50px;
  }
`;
export const Image = styled.img`
  height: 147px;
  border-radius: 10px;
  object-fit: cover;
`;
export const Title = styled.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: -0.4px;
  color: #373737;
`;
export const Content = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  letter-spacing: -0.1px;
  color: #373737;
`;
