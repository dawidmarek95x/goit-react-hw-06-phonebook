import PropTypes from 'prop-types';
import { Input, Label } from './Filter.styled';

export const Filter = ({setFilter}) => {
  const filterContacts = (e) => {
    const value = e.target.value.toLowerCase();
    setFilter(value);
  }

  return (
    <>
      <Label>
        Find contacts by name
        <Input
          type="text"
          onChange={filterContacts}
        />
      </Label>
    </>
  )
}

Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
}

export default Filter;