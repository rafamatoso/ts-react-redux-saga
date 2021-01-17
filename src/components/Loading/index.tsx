import ReactLoading from 'react-loading';
import './styles.scss';

export const Loading = () => (
  <div id="loading-container">
    <ReactLoading type="spin" color="#000000" height={50} width={50} />
  </div>
);
