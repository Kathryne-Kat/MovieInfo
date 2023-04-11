import { useSearchParams } from 'react-router-dom';
import css from './serchForm.module.css';

export const SearchForm = () => {
  const [, setSearchParams] = useSearchParams();
  //console.log(searchParams);

  const onSubmit = e => {
    e.preventDefault();
    const query = e.target.query.value.toLowerCase().trim();
    console.log(query);
    if (!query) return;
    setSearchParams({ search: query });
  };

  return (
    <div className={css.container}>
      {/* <h1 className={css.titleList}>Search Movies </h1> */}
      <form className={css.form} onSubmit={onSubmit}>
        <input
          className={css.inputSearch}
          type="text"
          placeholder="Enter movie"
          name="query"
        />
        <button className={css.btnSearch} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
