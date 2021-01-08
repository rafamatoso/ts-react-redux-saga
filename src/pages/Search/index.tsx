import { FormEvent, useCallback, useRef } from 'react';
import './styles.scss';

const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
  }, []);

  return (
    <div id="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          className="input"
          placeholder="Nome do usuário"
          ref={inputRef}
        />
        <button type="submit">Pesquisar</button>
      </form>
    </div>
  );
};

export default Search;
