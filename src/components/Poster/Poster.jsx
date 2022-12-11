import { useLocation } from 'react-router-dom';
import {
  PosterLink,
  PosterImage,
  PosterInfo,
  PosterTitle,
  PosterGanres,
} from './Poster.styled';
import imageNotFound from '../../images/image-not-found.jpg';
import PropTypes from 'prop-types';

export function Poster({ id, img, title, genres }) {
  const location = useLocation();

  return (
    <>
      <PosterLink to={`/movies/${id}`} state={{ from: location }}>
        <PosterImage
          src={img ? `https://image.tmdb.org/t/p/w500${img}` : imageNotFound}
          alt={title}
        />
        <PosterInfo>
          <PosterTitle>{title}</PosterTitle>
          {genres && <PosterGanres>{genres}</PosterGanres>}
        </PosterInfo>
      </PosterLink>
    </>
  );
}

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.string,
};
