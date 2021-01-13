/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import { useHistory } from 'react-router-dom';
import { icon } from '../../assets/icons';
import './styles.scss';

const NotFound: React.FC = () => {
  const history = useHistory();

  const backToSearch = () => {
    setTimeout(() => {
      history.push('/');
    }, 300);
  };

  return (
    <>
      <div id="not-found-container">
        <div id="not-found-msg-container">
          <button
            className="previous-button"
            onClick={backToSearch}
            onKeyDown={backToSearch}
            type="button"
          >
            <img
              className="previous-image"
              src={icon.previous}
              alt="Previous Page"
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
