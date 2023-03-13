import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 8% 5% 3% 5%;
  h2 {
    font-size: 1.75rem;
    margin: 20px 0 15px 0;
  }
  p {
    margin: 20px 0 0 0;
  }
  .form-container {
    background-color: white;
    text-align: center;
    padding: 40px 40px 30px 40px;
    border: 1px solid #ccbca8;
    border-top: 7px solid #ffb443;
    border-radius: 5px;
  }
  .form-row {
    width: 100%;
    margin: 0 auto 20px auto;
  }
  form label {
    display: block;
    width: fit-content;
    text-align: left;
    margin-bottom: 8px;
    font-size: 1.125rem;
  }
  form input {
    display: block;
    width: 100%;
    padding: .5rem;
    background-color: #fefaf3;
    border: 1px solid #BABABA;
    border-radius: 5px;
    font-size: 1.125rem;
  }
  form input:focus {
    border: 1px solid white;
    outline: 2px solid #ffb443;
  }
  .member-btn {
    background-color: transparent;
    border: none;
    color: blue;
    padding: 0;
    font-size: 1rem;
  }
  .member-btn:hover {
    cursor: pointer;
  }
  @media (min-width: 819px) {
    .form-container {
      width: 450px;
      margin: 0 auto;
    }
  }
`;

export default Wrapper;
