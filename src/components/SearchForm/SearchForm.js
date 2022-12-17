import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaSearch } from 'react-icons/fa';
import { Header, Input, Button, Form } from './SearchForm.styled';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const handleChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Nothing to show yet. Enter your requst.', {
        duration: 1000,
      });
      return;
    }
    onSubmit(query);
    reset();
  };
  const reset = () => {
    setQuery('');
  };
  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <FaSearch size={25} />
        </Button>
        <Input
          type="text"
          autocomplete="off"
          name="query"
          value={query}
          onChange={handleChange}
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
      <Toaster />
    </Header>
  );
};
export default SearchForm;
