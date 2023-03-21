import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 135px 135px 135px;
  justify-content: center;
  gap: 3px;
  margin-top: 20px;

  .inner-container {
    display: grid;
    grid-template-columns: 45px 45px 45px;
  }
  .cell {
    background-color: white;
    height: 60px;
    padding: 2px;
    line-height: 1.1;
    font-size: 8px;
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
    font-weight: 500;
  }
  .mission {
    color: #2f2f2f;
    font-weight: 500;
  }
  .mission:hover {
    opacity: 0.8;
  }
  .mission-0 {
    background-color: #f79797;
  }
  .mission-1 {
    background-color: #f8e688;
  }
  .mission-2 {
    background-color: #dbf888;
  }
  .mission-3 {
    background-color: #fecbff;
  }
  .mission-5 {
    background-color: #88f8b5;
  }
  .mission-6 {
    background-color: #d0baff;
  }
  .mission-7 {
    background-color: #a2cdff;
  }
  .mission-8 {
    background-color: #bdffff;
  }
  @media (min-width: 720px) {
    grid-template-columns: 255px 255px 255px;
    gap: 7px;
    .inner-container {
      grid-template-columns: 85px 85px 85px;
    }
    .cell {
      padding: 4px;
      font-size: 13px;
      height: 75px;
      line-height: 1.25;
    }
  }
`;

export default Wrapper;
