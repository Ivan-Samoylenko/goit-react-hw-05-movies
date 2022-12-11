import { Form, Field, SearchBtn } from './SearchForm.styled';
import { IoSearch } from 'react-icons/io5';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

export function SearchForm({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const query = form.elements.query.value.trim();

    if (!query) {
      toast.info('Type something before search.');
      return;
    }

    onSubmit(query);
    form.reset();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Field type="text" name="query" placeholder="Search" />
      <SearchBtn type="submit">
        <IoSearch size="20" />
      </SearchBtn>
    </Form>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
