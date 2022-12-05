import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getGenres, searchMovie } from 'services';
import { toast } from 'react-toastify';
import { Section } from 'components/Section';
import { SearchForm } from 'components/SearchForm';
import { Posters } from 'components/Posters';
import { Pagination } from 'components/Pagination';

export default function Movies() {
  const [genres, setGenres] = useState(null);
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const page = Number(searchParams.get('page'));

  useEffect(() => {
    (async function fetchGenres() {
      try {
        const {
          status,
          data: { genres },
        } = await getGenres();

        if (status !== 200) {
          throw new Error('Failed to load genres.');
        }

        setGenres(genres);
      } catch (error) {
        if (error.response.data.status_message) {
          toast.warn(error.response.data.status_message);
          return;
        }

        toast.warn(error.message);
      }
    })();
  }, []);

  useEffect(() => {
    if (!query) {
      return;
    }

    (async function getTrending() {
      setMovies([]);

      try {
        const {
          status,
          data: { results, total_pages },
        } = await searchMovie(query, page);

        if (status !== 200) {
          throw new Error('Failed to load query, try reloading the page.');
        }

        if (total_pages < page && total_pages !== 0) {
          toast.warn(
            `This page does not exist: "${page}". You will be redirected to the first page.`
          );
          setSearchParams({ query, page: 1 });
          return;
        }

        if (results.length < 1) {
          toast.warn(`Nothing found for this query: "${query}"`);
        }

        setMovies(results);
        setTotalPages(total_pages);
      } catch (error) {
        if (error.response.data.status_message) {
          toast.error(error.response.data.status_message);
          return;
        }

        toast.error(error.message);
      }
    })();
  }, [query, page, setSearchParams]);

  function onSubmit(value) {
    setSearchParams({ query: value, page: 1 });
  }

  function changePage(value) {
    setSearchParams({ query, page: value });
  }

  return (
    <Section>
      <SearchForm onSubmit={onSubmit} />
      <Posters movies={movies} genres={genres}>
        Home
      </Posters>
      <Pagination
        pages={totalPages}
        currentPage={page}
        changePage={changePage}
      />
    </Section>
  );
}
