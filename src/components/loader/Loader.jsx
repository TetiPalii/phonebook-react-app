import { Blocks } from 'react-loader-spinner';
import PropTypes from 'prop-types';

export const Loader = ({height, width, color}) => {
    return (
      <Blocks
        height={height}
        width={width}
        color={color}
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        visible={true}
      />
    );
}

Loader.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
