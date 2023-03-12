import React, { useState, useRef } from 'react';
import Modal from 'react-modal';

import Wrapper from '../assets/wrappers/MandalaChart';
import { useAppContext } from '../context/AppContext';
import { FormTextarea } from '../components';

const modalStyle = {
  portal: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  content: {
    top: '20%',
    left: '43.5%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '400px',
    height: 'fit-content',
  },
};

const initModalState = {
  isOpen: false,
  type: '',
  cont: '',
  pos: null,
  parentPos: null,
  goalId: null,
};

const MandalaChart = () => {
  const { missions, updateChart } = useAppContext();
  const [modalState, setModalState] = useState(initModalState);
  const ref = useRef(null);

  const openModal = ({
    cont,
    goalId,
    missionPos,
    subMissionPos,
    parentPos,
  }) => {
    console.log({ cont, goalId, missionPos, subMissionPos, parentPos });
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

  const handleChange = (e) => {
    setModalState((prev) => ({
      ...prev,
      cont: e.target.value,
    }));
  };

  const handleCancel = () => {
    closeModal();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateChart(modalState);
    closeModal();
  };

  return (
    <Wrapper>
      <Modal
        isOpen={modalState.isOpen}
        onRequestClose={closeModal}
        onAfterOpen={() => {
          ref.current.focus();
        }}
        style={modalStyle}
        ariaHideApp={false}
        parentSelector={() => document.querySelector('.modal-container')}
      >
        <p className="modal-header">Update {modalState.type}</p>
        <form className="modal-form" onSubmit={handleSubmit}>
          <FormTextarea
            name={modalState.type}
            value={modalState.cont}
            handleChange={handleChange}
            inputRef={ref}
          />
          <button type="submit" className="btn btn-save">
            Submit
          </button>
          <button
            type="button"
            className="btn btn-cancel"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </form>
      </Modal>
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
            console.log(parentPos);
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
