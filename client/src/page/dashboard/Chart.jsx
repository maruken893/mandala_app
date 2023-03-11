import { useAppContext } from '../../context/AppContext';
import Wrapper from '../../assets/wrappers/Chart';
import { CharWithoutGoal, MandalaChart } from '../../components';

const Chart = () => {
  const { user } = useAppContext();

  return (
    <Wrapper>
      {user.goal ? (
        <div className="modal-container">
          <MandalaChart />
        </div>
      ) : (
        <CharWithoutGoal />
      )}
    </Wrapper>
  );
};
export default Chart;
