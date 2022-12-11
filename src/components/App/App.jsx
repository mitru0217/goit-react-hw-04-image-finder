import React, { Component } from 'react';
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

class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    total: null,
    loading: false,
    errorMsg: '',
  };
  componentDidMount() {
    this.setState(prevState => ({
      pages: prevState.pages + 1,
    }));
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      this.loadImages();
      // Fetch without Axios
      // fetch(
      //   `https://pixabay.com/api/?q=${this.state.query}&page=${this.state.page}&key=30307966-ea2e6055e88053146b4d64f93&image_type=photo&orientation=horizontal&per_page=12`
      // )
      //   .then(res => {
      //     if (res.ok) {
      //       return res.json();
      //     }
      //     return Promise.reject(
      //       new Error(`There are no images for ${this.state.query}`)
      //     );
      //   })
      //   .then(images => this.setState({ images }))
      //   .catch(error => this.setState({ error }))
      //   .finally(() => this.setState({ loading: false }));
    }
  }

  loadImages = async () => {
    const { query, page } = this.state;
    try {
      this.setState({ loading: true, images: [] });
      const images = await axios.get(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=30307966-ea2e6055e88053146b4d64f93&image_type=photo&orientation=horizontal&per_page=12`
      );
      this.setState(prevState => ({
        images: [...prevState.images, ...images.data.hits],
        total: images.data.total,
        errorMsg: '',
      }));
    } catch (error) {
      this.setState({
        errorMsg: 'Error while loading data. Try again later.',
      });
    } finally {
      this.setState({ loading: false });
    }
  };

  addImages = query => {
    this.setState({
      query: query,
      page: 1,
    });
  };
  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      loading: true,
      query: prevState.query,
    }));
  };

  render() {
    const { images, total, loading, query } = this.state;

    return (
      <>
        <SearchForm onSubmit={this.addImages} />
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
            <Span>While there is nothing to show</Span>
          ) : (
            <ImageGallery images={images} />
          )}

          {images.length > 0 && query && (
            <LoadMoreBtn onClick={this.loadMore}>Load more</LoadMoreBtn>
          )}
        </Container>
      </>
    );
  }
}

export default App;
