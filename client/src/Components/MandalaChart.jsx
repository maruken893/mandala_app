import React, { useState } from 'react';

import Wrapper from '../assets/wrappers/MandalaChart';
import { useAppContext } from '../context/AppContext';
import { MandalaChartModal } from '../components';

const initModalState = {
  isOpen: false,
  type: '',
  cont: '',
  pos: null,
  parentPos: null,
  goalId: null,
};

const MandalaChart = () => {
  const { missions } = useAppContext();
  const [modalState, setModalState] = useState(initModalState);

  const openModal = ({
    cont,
    goalId,
    missionPos,
    subMissionPos,
    parentPos,
  }) => {
    if (goalId && Number.isInteger(goalId)) {
      setModalState((prev) => ({
        ...prev,
        isOpen: true,
        cont,
        goalId,
        type: 'goal',
      }));
      return;
    }
    if (Number.isInteger(missionPos) && missionPos >= 0 && missionPos <= 8) {
      setModalState((prev) => ({
        ...prev,
        isOpen: true,
        cont,
        pos: missionPos,
        type: 'mission',
      }));
      return;
    }
    setModalState((prev) => ({
      ...prev,
      isOpen: true,
      cont,
      pos: subMissionPos,
      parentPos,
      type: 'sub-mission',
    }));
  };
  const closeModal = () => {
    setModalState(initModalState);
  };

  return (
    <Wrapper>
      <MandalaChartModal
        modalState={modalState}
        setModalState={setModalState}
        closeModal={closeModal}
      />
      {missions.map((missionList, i) => {
        if (missionList.length <= 0) {
          const missionsInit = [...Array(9)].map((_, j) => {
            if (j === 4) {
              return { content: '', position: j, missionPos: i };
            }
            return { content: '', position: j };
          });
          return (
            <NineSquare key={i} list={missionsInit} openModal={openModal} />
          );
        } else {
          return (
            <NineSquare key={i} list={missionList} openModal={openModal} />
          );
        }
      })}
    </Wrapper>
  );
};
export default MandalaChart;

const NineSquare = ({ list, openModal }) => {
  return (
    <div className="inner-container">
      {list.map(({ cont, missionPos, goalId }, i) => (
        <div
          key={i}
          onClick={() => {
            const parentPos = list.filter(
              ({ missionPos }) => missionPos !== undefined
            )[0].missionPos;
            openModal({
              cont,
              goalId,
              missionPos,
              subMissionPos: i,
              parentPos,
            });
          }}
          className={`cell cell-${i} ${
            missionPos !== undefined ? `mission mission-${missionPos}` : ''
          } ${goalId !== undefined ? 'goal' : ''} `}
        >
          {cont}
        </div>
      ))}
    </div>
  );
};
