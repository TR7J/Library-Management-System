import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import "./CatalogAdvancedSearch.css";

export const CatalogAdvancedSearch: React.FC = () => {
  const navigate = useNavigate();

  const isbnRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const authorRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const genreRef = useRef<HTMLInputElement>(null);

  const search = () => {
    let query = "";
    if (isbnRef && isbnRef.current && isbnRef.current.value !== "")
      query += `?barcode=${isbnRef.current.value}`;
    if (titleRef && titleRef.current && titleRef.current.value !== "") {
      query +=
        query === ""
          ? `?title=${titleRef.current.value}`
          : `&title=${titleRef.current.value}`;
    }
    if (authorRef && authorRef.current && authorRef.current.value !== "") {
      query +=
        query === ""
          ? `?author=${authorRef.current.value}`
          : `&author=${authorRef.current.value}`;
    }
    if (
      descriptionRef &&
      descriptionRef.current &&
      descriptionRef.current.value !== ""
    ) {
      query +=
        query === ""
          ? `?description=${descriptionRef.current.value}`
          : `&description=${descriptionRef.current.value}`;
    }
    if (subjectRef && subjectRef.current && subjectRef.current.value !== "") {
      query +=
        query === ""
          ? `?subject=${subjectRef.current.value}`
          : `&subject=${subjectRef.current.value}`;
    }
    if (genreRef && genreRef.current && genreRef.current.value !== "")
      query +=
        query === ""
          ? `?genre=${genreRef.current.value}`
          : `&genre=${genreRef.current.value}`;

    navigate(`/catalog${query}`);
  };

  return (
    <div className="catalog-advanced-search">
      <h2>Advanced Book Search</h2>
      <p>Fill in an many or little fields to narrow down your search results</p>
      <form className="catalog-advanced-search-form">
        <div className="catalog-advanced-form-input-group">
          <p>ISBN</p>
          <input
            id="isbn"
            ref={isbnRef}
            placeholder="ISBN"
            className="catalog-advanced-form-input"
          />
        </div>
        <div className="catalog-advanced-form-input-group">
          <p>Title</p>
          <input
            id="title"
            ref={titleRef}
            placeholder="Title"
            className="catalog-advanced-form-input"
          />
        </div>
        <div className="catalog-advanced-form-input-group">
          <p>Author</p>
          <input
            id="author"
            ref={authorRef}
            placeholder="Author"
            className="catalog-advanced-form-input"
          />
        </div>
        <div className="catalog-advanced-form-input-group">
          <p>Description</p>
          <input
            id="description"
            ref={descriptionRef}
            placeholder="Description"
            className="catalog-advanced-form-input"
          />
        </div>
        <div className="catalog-advanced-form-input-group">
          <p>Subject</p>
          <input
            id="subject"
            ref={subjectRef}
            placeholder="Subject"
            className="catalog-advanced-form-input"
          />
        </div>
        <div className="catalog-advanced-form-input-group">
          <p>Genre</p>
          <input
            id="genre"
            ref={genreRef}
            placeholder="Genre"
            className="catalog-advanced-form-input"
          />
        </div>
      </form>
      <button className="catalog-advanced-search-button" onClick={search}>
        Search
      </button>
    </div>
  );
};
