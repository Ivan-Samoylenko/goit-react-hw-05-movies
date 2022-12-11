import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import {
  CastList,
  CastListItem,
  PhotoWraper,
  Photo,
  Info,
  Name,
  Character,
} from './Cast.styled';
import { getMovieCast } from 'services';
import imageNotFound from '../../images/image-not-found.jpg';

export default function Cast() {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    (async function getCast() {
      try {
        const {
          status,
          data: { cast },
        } = await getMovieCast(movieId);

        if (status !== 200) {
          throw new Error('Failed to load cast, try reloading the page.');
        }

        setCast(cast);
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
      {cast && (
        <CastList>
          {cast.map(actor => (
            <CastListItem key={actor.id}>
              <PhotoWraper>
                <Photo
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                      : imageNotFound
                  }
                  alt={actor.name}
                />
              </PhotoWraper>
              <Info>
                <Name>Name: {actor.name}</Name>
                <Character>
                  Character: {actor.character ? actor.character : 'N/A'}
                </Character>
              </Info>
            </CastListItem>
          ))}
        </CastList>
      )}
      {(!cast || cast.length < 1) && <div>Sorry there are no cast</div>}
    </>
  );
}
