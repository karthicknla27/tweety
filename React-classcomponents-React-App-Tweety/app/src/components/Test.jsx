import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2")
    .max(20, "Name must under or equal to 20 "),
  rating: Yup.number()
    .min(0, "Rating must be at least 0")
    .max(10, "Rating must be at most 10")
    .required("Rating is required"),
  url: Yup.string().url("Invalid URL format").required("URL is required"),
});

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const formik = useFormik({
    initialValues: {
      name: "",
      rating: "",
      url: "",
    },
    validationSchema,
    onSubmit: (values) => {
      const newMovie = {
        name: values.name,
        rating: values.rating,
        url: values.url,
      };
      setMovieList([...movieList, newMovie]);
      formik.resetForm();
      console.log(values);
    },
  });

  return (
    <div className="movie-div">
      <div className="container">
        <h1 className="head">Movie form</h1>
        <form onSubmit={formik.handleSubmit} id="formid">
          <div>
            <label>Movie Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="error">{formik.errors.name}</div>
            ) : null}
          </div>
          <div>
            <label>Rating</label>
            <input
              type="number"
              id="rating"
              name="rating"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.rating}
            />
            {formik.touched.rating && formik.errors.rating ? (
              <div className="error">{formik.errors.rating}</div>
            ) : null}
          </div>
          <div>
            <label>Movie URL</label>
            <input
              type="text"
              id="url"
              name="url"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.url}
            />
            {formik.touched.url && formik.errors.url ? (
              <div className="error">{formik.errors.url}</div>
            ) : null}
          </div>
          <button type="submit">Add Movie</button>
        </form>
      </div>

      {movieList.length > 0 && (
        <div className="movielist">
          <h2>Movie List</h2>
          <div className="movie-list">
            {movieList.map((movie, index) => (
              <div className="movie-card" key={index}>
                <h1>{movie.name}</h1>
                <h3>Rating: {movie.rating}</h3>
                <img src={movie.url} alt={movie.name} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
