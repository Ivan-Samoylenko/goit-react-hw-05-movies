import { Outlet, useParams, useLocation } from 'react-router-dom';
import { Suspense, useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import { getMovieDetails } from 'services';
import { Section } from 'components/Section';
import {
  Container,
  GoBack,
  Poster,
  ImageWraper,
  PosterImage,
  PosterInfo,
  Title,
  Overview,
  Genres,
  Text,
  AdditionalInfo,
  InfoItem,
  InfoLink,
} from './MovieDetails.styled';
import imageNotFound from '../../images/image-not-found.jpg';

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    setMovieDetails(null);

    (async function getDetails() {
      try {
        const { status, data } = await getMovieDetails(movieId);

        if (status !== 200) {
          throw new Error(
            'Failed to load movie details, try reloading the page.'
          );
        }

        setMovieDetails(data);
      } catch (error) {
        if (error.response && error.response.data.status_message) {
          toast.error(error.response.data.status_message);
          return;
        }

        toast.error(error.message);
      }
    })();
  }, [movieId]);

  return (
    <>
      <>
        <Section>
          <Container>
            <GoBack to={backLinkHref.current}>← go back</GoBack>
            {movieDetails && (
              <>
                <Poster>
                  <ImageWraper>
                    <PosterImage
                      src={
                        movieDetails.poster_path
                          ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                          : imageNotFound
                      }
                      alt={movieDetails.title}
                    />
                  </ImageWraper>
                  <PosterInfo>
                    <Title>{movieDetails.title}</Title>
                    <Text>
                      User score: {Math.round(movieDetails.vote_average * 10)}%
                    </Text>
                    <Overview>Overview</Overview>
                    <Text>{movieDetails.overview}</Text>
                    <Genres>Genres</Genres>
                    <Text>
                      {movieDetails.genres.map(genre => genre.name).join(', ')}
                    </Text>
                  </PosterInfo>
                </Poster>
                <AdditionalInfo>
                  <InfoItem>
                    <InfoLink to="cast">Cast</InfoLink>
                  </InfoItem>
                  <InfoItem>
                    <InfoLink to="reviews">Reviews</InfoLink>
                  </InfoItem>
                </AdditionalInfo>
              </>
            )}

            {!movieDetails && <div>Sorry there are no film</div>}

            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </Container>
        </Section>
      </>
    </>
  );
}
