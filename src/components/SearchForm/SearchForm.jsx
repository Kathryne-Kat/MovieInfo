import { useSearchParams } from 'react-router-dom';

export const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);

  const onSubmit = e => {
    e.preventDefault();
    const query = e.target.query.value.toLowerCase().trim();
    console.log(query);
    if (!query) return;
    setSearchParams({ search: query });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Enter name of movie" name="query" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
