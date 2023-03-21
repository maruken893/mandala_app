import styled from 'styled-components';

const Wrapper = styled.main`
  padding: 2%;
  .flex {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 680px) {
    .flex {
      flex-direction: row;
    }
  }
`;

export default Wrapper;
