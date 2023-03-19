import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 100%;
  height: 100%;
  min-height: 100vh;
  h1 {
    margin: 40px 0 50px 0;
    font-size: 2.5rem;
  }
  @media (min-width: 990px) {
    padding: 0 15%;
    .container {
      padding: 0;
      text-align: start;
    }
    header {
      padding-top: 2.5rem;
    }
    main {
      text-align: center;
    }
    h1 {
      font-size: 3.5rem;
      font-weight: bold;
      margin-bottom: 40px;
    }
    .emphasis {
      color: #ffb443;
    }
    .image-container {
      width: 500px;
      margin: 0 auto;
    }
    .image {
      width: 100%;
      height: auto;
    }
    a {
      display: inline-flex;
      justify-content: center;
      margin-top: 30px;
      color: #4f4f4f;
      font-size: 2rem;
      padding: 0;
      text-decoration: none;
      line-height: 1.5rem;
      &:hover {
        cursor: pointer;
        color: #8b8b8b;
      }
    }
  }
`;

export default Wrapper;
