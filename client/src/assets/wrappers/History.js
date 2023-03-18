import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px 30px 20px 30px;
  border-radius: 5px;
  box-shadow: 0 0 5px -2px #777777;
  background-color: white;

  .fc .fc-all-button.fc-button.fc-button-primary {
    padding-right: 2rem;
    padding-left: 2rem;
    border: none;
  }
  .fc .fc-notStarted-button.fc-button.fc-button-primary {
    background-color: #ff1f1f;
    border: none;
  }
  .fc .fc-notStarted-button.fc-button.fc-button-primary:hover {
    background-color: #d91a1a;
  }
  .fc .fc-done-button.fc-button.fc-button-primary {
    padding-right: 2rem;
    padding-left: 2rem;
    background-color: #025bff;
    border: none;
  }
  .fc .fc-done-button.fc-button.fc-button-primary:hover {
    background-color: #044fd9;
  }
`;

export default Wrapper;
