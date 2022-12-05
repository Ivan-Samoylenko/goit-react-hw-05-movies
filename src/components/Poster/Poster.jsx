import { useLocation } from 'react-router-dom';
import {
  PosterLink,
  PosterImage,
  PosterInfo,
  PosterTitle,
  PosterGanres,
} from './Poster.styled';
import imageNotFound from '../../images/image-not-found.jpg';

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
