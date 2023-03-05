import { Link } from 'react-router-dom';

import Wrapper from '../assets/wrappers/Landing';
import { Logo } from '../components';
import welcome from '../assets/images/welcome.svg';

const Landing = () => {
  return (
    <Wrapper>
      <div className="container">
        <header>
          <Logo width="170px" className="center" />
        </header>
        <main className="flex">
          <div className="flex-item vertical-center">
            <h1>
              Achieve Your <span className="highlight">Goal</span>
            </h1>
            <Link to="/auth" className="btn">
              Register/Log in
            </Link>
          </div>
          <div className="flex-item">
            <img src={welcome} className="landing-img" />
          </div>
        </main>
      </div>
    </Wrapper>
  );
};
export default Landing;
