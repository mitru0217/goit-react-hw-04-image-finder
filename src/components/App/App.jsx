import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RotatingLines } from 'react-loader-spinner';
import SearchForm from 'components/SearchForm/SearchForm';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

import {
  Container,
  Span,
  LoadMoreBtn,
  Loading,
  Warning,
  InValidQuery,
} from 'components/App/App.styled';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(12);
  const [images, setImages] = useState([]);
  const [total, setTotal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    if (query === '') {
      return;
    }
    const loadImages = async () => {
      try {
        setLoading(true);
        setImages([]);
        const images = await axios.get(
          `https://pixabay.com/api/?q=${query}&page=${page}&key=30307966-ea2e6055e88053146b4d64f93&image_type=photo&orientation=horizontal&per_page=${perPage}`,
          { controller: controller.signal }
        );

        setImages(prevImages => [...prevImages, ...images.data.hits]);
        setTotal(images.data.total);
        setError('');
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    setTimeout(() => {
      window.scrollTo({ top: 10000, behavior: 'smooth' });
    }, 500);
    loadImages();
    return () => {
      controller.abort();
    };
  }, [query, page, perPage]);

  const addImages = query => {
    setQuery(query);
    setPage(1);

    setPerPage(12);
    setImages([]);
    setQuery(query);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
    setPerPage(prevPerPage => prevPerPage + 12);
  };

  const totalPages = Math.ceil(total / perPage);
  return (
    <>
      {error && <h1>Error while loading data. Try again later.</h1>}
      <SearchForm onSubmit={addImages} />
      <Container>
        {total === 0 && (
          <Warning>
            There are no images for query:
            <InValidQuery> {query}</InValidQuery>
          </Warning>
        )}

        {loading && (
          <Loading>
            <RotatingLines strokeColor="blue" />
          </Loading>
        )}
        {!query ? (
          <Span>'While there is nothing to show'</Span>
        ) : (
          <ImageGallery images={images} />
        )}

        {images.length > 0 && query && page !== totalPages && (
          <LoadMoreBtn type="button" onClick={loadMore}>
            Load more
          </LoadMoreBtn>
        )}
      </Container>
    </>
  );
};
