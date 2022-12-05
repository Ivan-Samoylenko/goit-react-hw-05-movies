import {
  NavLink,
  Link,
  Outlet,
  useParams,
  useLocation,
} from 'react-router-dom';
import { Suspense, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { getMovieDetails } from 'services';

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    (async function getDetails() {
      try {
        const { status, data } = await getMovieDetails(movieId);

        if (status !== 200) {
          throw new Error(
            'Failed to load movie details, try reloading the page.'
          );
        }

        console.log(data);
        setMovieDetails(data);
      } catch (error) {
        if (error.response.data.status_message) {
          toast.error(error.response.data.status_message);
          return;
        }

        toast.error(error.message);
      }
    })();
  }, [movieId]);

  return (
    <>
      <Link to={backLinkHref}>go back</Link>
      <div>MovieDetails</div>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
