import { Oval } from 'react-loader-spinner';

const LoadingSpinner = () => {
  return (
    <Oval
      height={50}
      width={50}
      color="#4fa94d"
      wrapperStyle={{ justifyContent: 'center' }}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#4fa94d"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};
export default LoadingSpinner;
