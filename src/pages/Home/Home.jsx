import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getGenres, getTrendingByDay } from 'services';
import { toast } from 'react-toastify';
import { Section } from 'components/Section';
import { Posters } from 'components/Posters';
import { Pagination } from 'components/Pagination';

export default function Home() {
  const [genres, setGenres] = useState(null);
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
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
    if (!page) {
      setSearchParams({ page: 1 });
      return;
    }

    (async function getTrending() {
      try {
        const {
          status,
          data: { results, total_pages },
        } = await getTrendingByDay(page);

        if (status !== 200) {
          throw new Error('Failed to load trends, try reloading the page.');
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
  }, [page, setSearchParams]);

  function changePage(value) {
    setSearchParams({ page: Number(value) });
  }

  return (
    <Section>
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
