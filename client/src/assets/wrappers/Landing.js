import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 100%;
  height: 100%;
  min-height: 100vh;
  h1 {
    margin: 0;
    margin: 40px 0 50px 0;
    font-size: 2.5rem;
  }
  a {
    display: inline-block;
    margin-bottom: 50px;
  }
  .container {
    padding: 8% 10% 0 10%;
    text-align: center;
  }
  .highlight {
    color: #ffb443;
  }
  .flex {
    display: flex;
    flex-direction: column;
  }
  .landing-img {
    max-width: 100%;
    vertical-align: bottom;
  }
  @media (min-width: 990px) {
    padding: 0 15%;
    h1 {
      font-size: 3rem;
      margin: 0;
      margin-bottom: 40px;
    }
    a {
      font-size: 1.5rem;
      margin-bottom: 0;
    }
    header {
      padding-top: 2.5rem;
    }
    .container {
      padding: 0;
      text-align: start;
    }
    .flex {
      flex-direction: row;
    }
    .flex > div {
      width: 50%;
    }
    .vertical-center {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
`;

export default Wrapper;
