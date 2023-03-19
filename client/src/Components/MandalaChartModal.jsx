import { useRef } from 'react';
import Modal from 'react-modal';

import { useAppContext } from '../context/AppContext';
import { FormTextarea, Alert } from '../components';

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

const MandalaChartModal = ({ closeModal, modalState, setModalState }) => {
  const { showAlert, alertMessage, alertType, updateChart } = useAppContext();
  const ref = useRef(null);

  const handleChange = (e) => {
    setModalState((prev) => ({
      ...prev,
      cont: e.target.value,
    }));
  };

  const handleCancel = () => {
    closeModal();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isSuccess = await updateChart(modalState);
    if (isSuccess) {
      closeModal();
    }
  };

  return (
    <>
      {' '}
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
        {showAlert && <Alert message={alertMessage} alertType={alertType} />}
        <form className="modal-form" onSubmit={handleSubmit}>
          <FormTextarea
            name={modalState.type}
            value={modalState.cont}
            handleChange={handleChange}
            inputRef={ref}
          />
          <div className="modal-button-container">
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
          </div>
        </form>
      </Modal>
    </>
  );
};
export default MandalaChartModal;
