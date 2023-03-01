import styled from 'styled-components';

import logo from '../assets/images/logo.svg';

const Logo = () => {
  return <Img src={logo} />;
};
export default Logo;

const Img = styled.img`
  width: 170px;
  height: auto;
`;
