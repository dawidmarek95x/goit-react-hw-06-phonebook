import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/actions/contactsActions';
import { Button, Item, TelBtn, Wrapper } from './ContactElement.styled';

export const ContactElement = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <Wrapper>
        <span>
          {name}: {number}
        </span>
        <TelBtn as="a" href={`tel:${number}`}>{' '}</TelBtn>
        <Button
          type="button"
          onClick={() => dispatch(deleteContact(id))}
        ></Button>
      </Wrapper>
    </Item>
  );
};

ContactElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default ContactElement;