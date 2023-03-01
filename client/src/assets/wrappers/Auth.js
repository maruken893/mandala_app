import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 8% 5% 0 5%;
  background-color: #fefaf3;
  .form-container {
    background-color: white;
    text-align: center;
    padding: 3% 1% 2% 1%;
    border: 1px solid #ccbca8;
    border-top: 7px solid #ffb443;
    border-radius: 5px;
  }
  .form-row {
    width: 90%;
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
