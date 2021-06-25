import React, { Component } from 'react';
import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import MyLoader from './components/Loader/Loader';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

const API_KEY = '21312315-f1f0be60f3efa7b19271edd39';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    cards: [],
    loading: false,
    endpoint: '',
    isOpenModal: false,
    bigPhoto: '',
  };

  handleOpenModal = photo => () => {
    this.setState({ bigPhoto: photo, isOpenModal: true });
  };

  handleCloseModal = () => {
    this.setState({ bigPhoto: '', isOpenModal: false });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ query: event.target[1].value, page: 1, cards: [] });
  };

  handleLoadMore = () => {
    this.setState({ page: this.state.page + 1 });
  };

  async handleRequest(endpoint) {
    this.setState({ loading: true, endpoint: endpoint });
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      const cards = data.hits.map(hit => ({
        id: hit.id,
        image: hit.webformatURL,
        bigImage: hit.largeImageURL,
      }));
      this.setState({ cards: [...this.state.cards, ...cards] });
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ loading: false });
    }
  }

  async componentDidMount() {
    const { query, page } = this.state;
    if (query !== '') {
      const endpoint = `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
      this.handleRequest(endpoint);
    }
  }

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
        {this.state.loading ? (
          <MyLoader />
        ) : (
          <ImageGallery
            cards={this.state.cards}
            openModal={this.handleOpenModal}
          />
        )}
        {this.state.cards.length > 0 && (
          <Button onSubmit={this.handleLoadMore} />
        )}
        {this.state.isOpenModal === true && (
          <Modal
            photo={this.state.bigPhoto}
            closeModal={this.handleCloseModal}
          />
        )}
      </div>
    );
  }

  async componentDidUpdate() {
    const { query, page } = this.state;
    const endpoint = `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
    if (endpoint !== this.state.endpoint) {
      this.handleRequest(endpoint);
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }
}
