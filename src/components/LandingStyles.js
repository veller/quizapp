import styled from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 30px;
  margin: 100px auto;
`;

export const Title = styled.h1`
  @import url("https://fonts.googleapis.com/css?family=Luckiest+Guy&display=swap");
  font-family: "Luckiest Guy", cursive;
  font-size: 40px;
  font-weight: 400;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  span {
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 700;
    font-size: 12px;
    color: #4a5568;
    margin: 20px 0 8px;
  }

  div {
    display: flex;

    input {
      font-size: 14px;
      border: none;
      background: #f8f8f8;
      color: #4a5568;
      padding: 12px;
      width: 80px;
      text-align: center;
    }

    button {
      border: 0;
      font-size: 20px;
      font-weight: bold;
      padding: 8px;
      background: #edf2f7;
      color: #4a5568;
      width: 40px;
      cursor: pointer;

      &:disabled {
        cursor: not-allowed;
        opacity: 0.1;
      }
    }
  }
`;

export const DecrementButton = styled.button`
  border-radius: 10px 0 0 10px;
`;

export const IncrementButton = styled.button`
  border-radius: 0 10px 10px 0;
`;

export const Select = styled.select`
  appearance: none;
  height: 100%;
  color: #4a5568;
  font-size: 14px;
  border-color: #edf2f7;
  padding: 12px;
  background-image: url("data:image/svg+xml;utf8,<svg viewbox='20 20 0 0' height='20' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z'></path></svg>");
  background-repeat: no-repeat;
  background-position-x: 99%;
  background-position-y: 50%;
`;
