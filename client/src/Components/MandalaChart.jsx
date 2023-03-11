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

const MandalaChart = () => {
  const { missions } = useAppContext();
  const [modalState, setModalState] = useState({
    isOpen: false,
    cont: '',
    type: '',
  });
  const ref = useRef(null);

  const openModal = ({ cont, missionPos, goal }) => {
    if (goal) {
      setModalState((prev) => ({ ...prev, isOpen: true, cont, type: 'goal' }));
      return;
    }
    if (Number.isInteger(missionPos) && missionPos >= 0 && missionPos <= 8) {
      setModalState((prev) => ({
        ...prev,
        isOpen: true,
        cont,
        type: 'mission',
      }));
      return;
    }
    setModalState((prev) => ({
      ...prev,
      isOpen: true,
      cont,
      type: 'subMission',
    }));
  };
  const closeModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false, cont: '', type: '' }));
  };

  const handleChange = (e) => {
    setModalState((prev) => ({
      ...prev,
      cont: e.target.value,
    }));
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
        <form className="modal-form">
          <FormTextarea
            name={modalState.type}
            value={modalState.cont}
            handleChange={handleChange}
            inputRef={ref}
          />
          <button type="submit" className="btn btn-save">
            Submit
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
      {list.map(({ cont, missionPos, goal }, i) => (
        <div
          key={i}
          onClick={() => {
            openModal({ cont, missionPos, goal });
          }}
          className={`cell cell-${i} ${
            missionPos !== undefined ? `mission mission-${missionPos}` : ''
          } ${goal !== undefined ? 'goal' : ''} `}
        >
          {cont}
        </div>
      ))}
    </div>
  );
};
