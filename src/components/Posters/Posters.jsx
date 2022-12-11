import { PostersList, PostersListItem } from './Posters.styled';
import { Poster } from 'components/Poster';
import PropTypes from 'prop-types';

export function Posters({ movies, genres }) {
  return (
    <PostersList>
      {movies.map(movie => {
        let genresText = null;

        if (movie.genre_ids.length > 0 && genres) {
          genresText = genres.reduce((acc, genre) => {
            if (movie.genre_ids.includes(genre.id)) {
              if (acc === '') {
                return genre.name;
              } else {
                return `${acc}, ${genre.name}`;
              }
            }

            return acc;
          }, '');
        }

        return (
          <PostersListItem key={movie.id}>
            <Poster
              id={movie.id}
              img={movie.poster_path}
              title={movie.title}
              genres={genresText}
            />
          </PostersListItem>
        );
      })}
    </PostersList>
  );
}

Posters.propTypes = {
  movies: PropTypes.array.isRequired,
  genres: PropTypes.arrayOf(PropTypes.object),
};
