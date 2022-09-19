import PropTypes from 'prop-types';
import { Button, Item, Link, Wrapper } from './ContactElement.styled';

export const ContactElement = ({id, name, number, deleteContact}) => {
  return (
    <Item>
      <Wrapper>
        <span>{name}: {number}</span>
        <Link href={`tel:${number}`}> </Link>
        <Button
          type="button" 
          onClick={deleteContact(id)}>
        </Button>
      </Wrapper>
    </Item>
  )
}

ContactElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired, 
  number: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired, 
  deleteContact: PropTypes.func.isRequired,
}

export default ContactElement;