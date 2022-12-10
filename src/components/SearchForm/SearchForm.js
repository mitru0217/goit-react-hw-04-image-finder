import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Header, Input, Button, Form } from './SearchForm.styled';

class SearchForm extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase().trim() });
  };
  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">
            <FaSearch size={25} />
          </Button>
          <Input
            type="text"
            autocomplete="off"
            name="query"
            value={this.state.query}
            onChange={this.handleChange}
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    );
  }
}

export default SearchForm;
