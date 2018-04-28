import React, {Fragment} from 'react';
import {createCache, createResource} from 'simple-cache-provider';
import {movieDetails} from './data';

function fetchRelative(url) {
  return fetch(process.env.BASE_URL + url);
}

export default function({scale_network_speed = 1}) {
  // To keep things simple for this demo, we're going to use a basic
  const cache = createCache();

  function adjustTime(ms) {
    return ms * scale_network_speed;
  }

  const MovieDetailsResource = createResource(async id => {
    const response = await fetchRelative(
      `/movies/${id}?delay_ms=${adjustTime(800)}`,
    );
    return response.json();
  });

  const MovieReviewsResource = createResource(async id => {
    const response = await fetchRelative(
      `/movies/${id}/reviews?delay_ms=${adjustTime(1500)}`,
    );
    return response.json();
  });

  function Placeholder(props) {
    return (
      <React.Timeout ms={props.delayMs}>
        {didExpire => (didExpire ? props.fallback : props.children)}
      </React.Timeout>
    );
  }

  function App() {
    return <MoviePage id={1} />;
  }

  // --------------------------
  // Invididual movie page
  // --------------------------

  // --------------------------
  // Invididual movie details
  // --------------------------
  // ________
  // |      |  Moonrise Kingdom
  // |      |  🍅 93%
  // |      |  86% liked it
  // --------------------------

  function MoviePage(props) {
    MovieReviewsResource.preload(cache, props.id);
    return (
      <Placeholder delayMs={1000} fallback={<Spinner size="large" />}>
        <MovieDetails id={props.id} />
      </Placeholder>
    );
  }

  function MovieDetails(props) {
    const movie = MovieDetailsResource.read(cache, props.id);
    return (
      <Fragment>
        <div className="MovieDetails">
          <MoviePoster src={movie.poster} />
          <h1>{movie.title}</h1>
          <MovieMetrics {...movie} />
        </div>
        <Placeholder fallback={<Spinner size="large" />}>
          <MovieReviews id={props.id} />
        </Placeholder>
      </Fragment>
    );
  }

  function MoviePoster(props) {
    return (
      <img
        className="MoviePoster"
        alt="poster"
        src={props.src}
        width="200"
        height="300"
      />
    );
  }

  function MovieMetrics(props) {
    return (
      <Fragment>
        <div className="MovieMetrics-tomato">
          <h4>Tomatometer</h4>
          <p>
            {props.fresh ? '🍅' : '🤢'} {props.rating}
          </p>
        </div>
        <div className="MovieMetrics-audience">
          <h4>Audience</h4>
          <p>
            {'🍿'} {props.audience}
          </p>
        </div>
        <div className="MovieMetrics-consensus">
          <h4>Critics Consensus</h4>
          <p>{props.consensus}</p>
        </div>
      </Fragment>
    );
  }

  // ----------------------------
  // Invididual movie reviews pane
  // ----------------------------
  //  __________________________
  // | "Good movie" - Dan       |
  // |_ ________________________|
  // | "Waste of time" - Andrew |
  // |__________________________|
  // ----------------------------

  function MovieReviews(props) {
    const reviews = MovieReviewsResource.read(cache, props.id);
    return (
      <div className="MovieReviews">
        {reviews.map(review => <MovieReview key={review.id} {...review} />)}
      </div>
    );
  }

  function MovieReview(props) {
    return (
      <blockquote className="MovieReview">
        <figure>{props.fresh ? '🍅' : '🤢'}</figure>
        <p>{props.text}</p>
        <footer>
          {props.author.name}, {props.author.publication}
        </footer>
      </blockquote>
    );
  }

  function Spinner(props) {
    let className = 'Spinner';
    if (props.size === 'large' || props.size === 'medium') {
      className += ' Spinner--big';
    }
    let spinner = <div className={className}>{'🌀'}</div>;
    if (props.size === 'medium') {
      spinner = (
        <div
          style={{
            position: 'relative',
            height: 200,
          }}>
          {spinner}
        </div>
      );
    }
    return spinner;
  }

  return App;
}
