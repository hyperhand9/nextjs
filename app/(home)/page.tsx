import Movie from "../../components/movie";
import styles from '../../styles/home.module.css';

export const metadata = {
	title: 'Home',
};

export const url = 'https://nomad-movies.nomadcoders.workers.dev/movies';

const getMovies = async () => {
	await new Promise((res) => { setTimeout(res, 1000) });
	const response = await fetch(url);
	const json = await response.json();
	return json;
}

export default async function HomePage() {
	const movies = await getMovies();
	return (
		<div className={styles.container}>
			{movies.map(movie => (
				<Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title} />
			))}
		</div>
	);
}