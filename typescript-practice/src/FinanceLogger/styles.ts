import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h1`
  color: var(--primary);
`;
export const FormWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  input{
    background:#fff;
  }

  button{
    background-color: var(--primary);
    color: #fff;
    :active {
      background-color: #802626;
    }
  }
`;
