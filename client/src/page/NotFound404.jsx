import { Link } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';

import Wrapper from '../assets/wrappers/NotFound404';
import { Logo } from '../components';
import pageNotFound from '../assets/images/page_not_found.svg';

const NotFound404 = () => {
  return (
    <Wrapper>
      <div className="container">
        <header>
          <Logo width="170px" className="center" />
        </header>
        <main>
          <h1>
            Page <span className="emphasis">Not</span> Found!
          </h1>
          <div className="image-container">
            <img className="image" src={pageNotFound} alt="page not found" />
          </div>
          <Link to={'/'}>
            {<AiOutlineLeft className="back-icon" />}
            back
          </Link>
        </main>
      </div>
    </Wrapper>
  );
};
export default NotFound404;
