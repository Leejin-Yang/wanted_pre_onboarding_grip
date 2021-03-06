import { useRecoilState } from 'recoil';
import { useMount } from 'react-use';
import styles from './FavoritesPage.module.scss';

import MovieItem from 'components/MovieItem';
import useDragDrop from 'hooks/useDragDrop';
import { favoriteMovieListState } from 'states/movie';
import { FAVORITE_MOVIE_KEY, getLocalStorage } from 'services/store';

const PAGE_TITLE = '내 즐겨찾기';
const NO_FAVORITE = '내 즐겨찾기를 등록해보세요 🍿';

const FavoritesPage = () => {
  const [favoriteMovieList, setFavoriteMovieList] = useRecoilState(favoriteMovieListState);
  const { handleDragOver, handleDragStart, handleDragEnd, handleDrop } = useDragDrop();

  useMount(() => {
    setFavoriteMovieList((prev) => {
      const localMovieList = getLocalStorage(FAVORITE_MOVIE_KEY);

      if (!localMovieList) return prev;

      return localMovieList;
    });
  });

  return (
    <>
      <header className={styles.title}>
        <h1>{PAGE_TITLE}</h1>
      </header>
      <section className={styles.favoritesList}>
        {!favoriteMovieList.length && <span className={styles.noFavorite}>{NO_FAVORITE}</span>}
        {favoriteMovieList && (
          <ul>
            {favoriteMovieList.map((movie, index) => {
              const key = `fav-list-${movie.imdbID}-${index}`;

              return (
                <li
                  key={key}
                  data-position={index}
                  className={styles.movieItem}
                  draggable
                  onDragOver={handleDragOver}
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}
                  onDrop={handleDrop}
                >
                  <MovieItem movie={movie} />
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </>
  );
};

export default FavoritesPage;
