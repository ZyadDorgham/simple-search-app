export default function MovieCard({ movie }) {

  const youtubeLink = `https://www.youtube.com/results?search_query=${movie.Title}+trailer`;

  return (
    <div className="movie-card">

      <img
        src={movie.Poster}
        alt={movie.Title}
        className="movie-poster"
      />

      <div className="movie-info">

        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>

        <a
          href={youtubeLink}
          target="_blank"
          rel="noreferrer"
          className="trailer-btn"
        >
          Watch Trailer ▶
        </a>

      </div>

    </div>
  );
}