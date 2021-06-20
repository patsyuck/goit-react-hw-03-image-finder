import React, { Component } from 'react';
import './App.css';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import MyLoader from './Loader';
import Button from './Button';

const API_KEY = '21312315-f1f0be60f3efa7b19271edd39';

export class App extends Component {
  state = {
    query: 'forest',
    page: 1,
    cards: [],
    loading: false,
  };

  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = () => {};

  handleLoadMore = () => {
    this.setState({ page: this.state.page + 1 });
  };

  async componentDidMount() {
    console.log(this.state.page);
    this.setState({ loading: true });
    const { query, page } = this.state;
    const endpoint = `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
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

  render() {
    return (
      <div className="App">
        <Searchbar />
        {this.state.loading ? (
          <MyLoader />
        ) : (
          <ImageGallery cards={this.state.cards} />
        )}
        {this.state.cards.length > 0 && (
          <Button onSubmit={this.handleLoadMore} />
        )}
      </div>
    );
  }

  componentDidUpdate() {
    console.log(this.state.page);
  }
}
