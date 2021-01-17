import { useHistory } from 'react-router-dom';
import { icon } from '../../assets/icons';
import './styles.scss';

const NotFound: React.FC = () => {
  const history = useHistory();

  const backToHome = () => {
    setTimeout(() => {
      history.push('/');
    }, 300);
  };

  return (
    <>
      <div id="not-found-container">
        <div id="msg-container">
          <button
            className="previous-button"
            onClick={backToHome}
            onKeyDown={backToHome}
            type="button"
          >
            <img
              className="previous-image"
              src={icon.previous}
              alt="Back Arrow"
            />
          </button>
          <h1 className="title">Usuário não encontrado</h1>
        </div>
        <div id="footer-container">
          Icons made by
          {' '}
          <a href="https://www.flaticon.com/authors/smartline" title="Smartline">Smartline</a>
          {' '}
          from
          {' '}
          <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
