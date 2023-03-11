import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 240px 240px 240px;
  justify-content: center;
  gap: 2%;
  margin-top: 30px;
  @media (min-width: 990px) {
    .inner-container {
      display: grid;
      grid-template-columns: 80px 80px 80px;
    }
    .cell {
      background-color: white;
      height: 70px;
      padding: 0.125rem;
      font-size: 13px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .cell:hover {
      cursor: pointer;
    }
    .cell-0 {
      border-top: 1px solid var(--chart-border-color);
      border-left: 1px solid var(--chart-border-color);
      border-top-left-radius: 5px;
    }
    .cell-1 {
      border-top: 1px solid var(--chart-border-color);
      border-left: 1px solid var(--chart-border-color);
    }
    .cell-2 {
      border-top: 1px solid var(--chart-border-color);
      border-right: 1px solid var(--chart-border-color);
      border-left: 1px solid var(--chart-border-color);
      border-top-right-radius: 5px;
    }
    .cell-3 {
      border-top: 1px solid var(--chart-border-color);
      border-left: 1px solid var(--chart-border-color);
    }
    .cell-4 {
      border-top: 1px solid var(--chart-border-color);
      border-left: 1px solid var(--chart-border-color);
    }
    .cell-5 {
      border-top: 1px solid var(--chart-border-color);
      border-right: 1px solid var(--chart-border-color);
      border-left: 1px solid var(--chart-border-color);
    }
    .cell-6 {
      border-top: 1px solid var(--chart-border-color);
      border-left: 1px solid var(--chart-border-color);
      border-bottom: 1px solid var(--chart-border-color);
      border-bottom-left-radius: 5px;
    }
    .cell-7 {
      border-top: 1px solid var(--chart-border-color);
      border-left: 1px solid var(--chart-border-color);
      border-bottom: 1px solid var(--chart-border-color);
    }
    .cell-8 {
      border: 1px solid var(--chart-border-color);
      border-bottom-right-radius: 5px;
    }
    .goal {
      font-weight: bold;
    }
    .mission {
      color: #2f2f2f;
      font-weight: bold;
    }
    .mission:hover {
      opacity: .8;
    }
    .mission-0 {
      background-color: #ec8181;
    }
    .mission-1 {
      background-color: #F8E688;
    }
    .mission-2 {
      background-color: #DBF888;
    }
    .mission-3 {
      background-color: #FECBFF;
    }
    .mission-5 {
      background-color: #88F8B5;
    }
    .mission-6 {
      background-color: #D0BAFF;
    }
    .mission-7 {
      background-color: #A2CDFF;
    }
    .mission-8 {
      background-color: #BDFFFF;
    }
  }
`;

export default Wrapper;
