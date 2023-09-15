import React from 'react';
import { Button, Form, Header, Input, Span } from './SearchBar.Styled';
import { PropTypes } from 'prop-types';

export class SearchBar extends React.Component {
  state = {
    query: '',
  };
  handleChange = e => {
    this.setState({ query: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onChangeQuery(this.state.query);
    // this.setState({ query: '' });
  };
  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">
            <Span>Search</Span>
          </Button>

          <Input
            value={this.state.query}
            onChange={this.handleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    );
  }
}

SearchBar.propTypes = {
  onChangeQuery: PropTypes.func,
};
