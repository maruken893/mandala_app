import { useAppContext } from '../../context/AppContext';
import Wrapper from '../../assets/wrappers/Chart';
import { CharWithoutGoal } from '../../components';

const Chart = () => {
  const { user } = useAppContext();

  return (
    <Wrapper>
      {user.goal ? (
        <div className="chart">${user.goal}</div>
      ) : (
        <CharWithoutGoal />
      )}
    </Wrapper>
  );
};
export default Chart;
