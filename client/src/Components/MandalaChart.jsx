import { useAppContext } from '../context/AppContext';

const MandalaChart = () => {
  const { user } = useAppContext();
  const { chartData } = user;

  return <div>MandalaChart</div>;
};
export default MandalaChart;
