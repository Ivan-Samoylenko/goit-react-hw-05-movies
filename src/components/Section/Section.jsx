import { Wraper } from './Section.styled';
import PropTypes from 'prop-types';

export function Section({ children }) {
  return <Wraper>{children}</Wraper>;
}

Section.propTypes = {
  children: PropTypes.node,
};
