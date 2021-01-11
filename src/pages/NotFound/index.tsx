/* eslint-disable jsx-a11y/interactive-supports-focus */
import { useHistory } from 'react-router-dom';
import './styles.scss';

const NotFound: React.FC = () => {
  const history = useHistory();

  const backToSearch = () => {
    setTimeout(() => {
      history.push('/');
    }, 300);
  };

  return (
    <div
      id="not-found-container"
      onClick={backToSearch}
      onKeyDown={backToSearch}
      role="button"
    >
      <h1 className="title">:o Usuário não encontrado :0</h1>
    </div>
  );
};

export default NotFound;
