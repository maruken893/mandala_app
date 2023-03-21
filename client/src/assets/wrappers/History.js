import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px 30px 20px 30px;
  border-radius: 5px;
  box-shadow: 0 0 5px -2px #777777;
  background-color: white;

  @media (max-width: 680px) {
    .fc-header-toolbar {
      width: 100%;
      justify-content: space-evenly;
      flex-basis: 200px;
    }
    .fc-toolbar-chunk {
    }
    .fc-toolbar-chunk button {
      margin-bottom: 3px;
    }
    .fc-toolbar-chunk button.fc-all-button:first-child {
      margin-left: 0.75em;
    }
    .fc-toolbar-chunk button.fc-today-button:first-child {
      margin-left: 0.75em;
    }
  }

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
  .fc-event-time,
  .fc-event-title {
    padding: 0 1px;
    white-space: normal;
  }
  /* ボタン */
`;

export default Wrapper;
