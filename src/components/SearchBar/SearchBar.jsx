import React, { useState } from 'react';
import { Button, Form, Header, Input, Span } from './SearchBar.Styled';
import { PropTypes } from 'prop-types';

export const SearchBar = ({ onChangeQuery }) => {
  const [query, setQuery] = useState('');
  const handleChange = e => {
    setQuery(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    onChangeQuery(query);
  };
  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <Span>Search</Span>
        </Button>

        <Input
          value={query}
          onChange={handleChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </Header>
  );
};

SearchBar.propTypes = {
  onChangeQuery: PropTypes.func,
};