import { url } from '../app/constants';
import styles from '../styles/movie-info.module.css';

export const getMovie = async (id: string) => {
	const response = await fetch(`${url}/${id}`);
	//throw new Error('Error occured');
	return await response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
	const movie = await getMovie(id);
	return <div className={styles.container}>
		<img src={movie.poster_path} alt={movie.title} className={styles.poster} />
		<div className={styles.info}>
			<h1 className={styles.title}>{movie.title}</h1>
			<h3>★ {movie.vote_average.toFixed(1)}</h3>
			<p>{movie.overview}</p>
			<a href={movie.homepage} target={'_blank'}>Homepage &rarr;</a>
		</div>
	</div>;
}