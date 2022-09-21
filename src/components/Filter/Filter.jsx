import { useDispatch } from 'react-redux';
import { setContactsFilter } from 'redux/contactsReducer';
import { Input, Label } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterContacts = (e) => {
    const value = e.target.value.toLowerCase();
    dispatch(setContactsFilter(value));
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

export default Filter;