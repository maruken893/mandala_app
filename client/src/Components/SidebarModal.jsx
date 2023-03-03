import Modal from 'react-modal';

import Wrapper from '../assets/wrappers/SidebarModal';
import { useAppContext } from '../context/AppContext';
import Logo from './Logo';
import NavLinks from './NavLinks';

const customStyles = {
  content: {
    minWidth: '350px',
    minHeight: '30%',
    top: '40%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const SidebarModal = () => {
  const { showSidebarModal, closeSidebarModal } = useAppContext();

  return (
    <Modal
      isOpen={showSidebarModal}
      onRequestClose={closeSidebarModal}
      ariaHideApp={false}
      style={customStyles}
    >
      <Wrapper>
        <Logo width="150px" />
        <NavLinks />
      </Wrapper>
    </Modal>
  );
};
export default SidebarModal;
