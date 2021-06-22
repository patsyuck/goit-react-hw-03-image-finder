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
    bigPhoto: '',
  };

  handleOpenModal = photo => () => {
    this.setState({ bigPhoto: photo });
  };

  handleCloseModal = () => {
    this.setState({ bigPhoto: '' });
  };

  handleSubmit = event => {
    event.preventDefault();
    /*console.log('Submit');*/
    this.setState({ query: event.target[1].value, page: 1, cards: [] });
  };

  handleLoadMore = () => {
    this.setState({ page: this.state.page + 1 });
  };

  async componentDidMount() {
    /*console.log('Mount, page:');
    console.log(this.state.page);*/
    const { query, page } = this.state;
    if (query !== '') {
      const endpoint = `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
      this.setState({ loading: true, endpoint: endpoint });
      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        const cards = data.hits.map(hit => ({
          id: hit.id,
          image: hit.webformatURL,
          bigImage: hit.largeImageURL,
        }));
        this.setState({ cards: this.state.cards.concat(cards) });
      } catch (error) {
        console.error(error);
      } finally {
        this.setState({ loading: false });
      }
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
        {this.state.bigPhoto !== '' && (
          <Modal
            photo={this.state.bigPhoto}
            closeModal={this.handleCloseModal}
          />
        )}
      </div>
    );
  }

  async componentDidUpdate() {
    /*console.log('Update, page:');
    console.log(this.state.page);*/
    const { query, page } = this.state;
    const endpoint = `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
    if (endpoint !== this.state.endpoint) {
      this.setState({ loading: true, endpoint: endpoint });
      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        const cards = data.hits.map(hit => ({
          id: hit.id,
          image: hit.webformatURL,
          bigImage: hit.largeImageURL,
        }));
        this.setState({ cards: this.state.cards.concat(cards) });
      } catch (error) {
        console.error(error);
      } finally {
        this.setState({ loading: false });
      }
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }
}
