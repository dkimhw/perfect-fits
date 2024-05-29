import PropTypes from 'prop-types';
import { Header } from './Header';

export default function Page(props) {
  const { children } = props;
  return (
    <div>
      <Header />
      <h1>Page component</h1>
      <p>{children}</p>
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
