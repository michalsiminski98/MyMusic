import { Wrapper } from "./MainTemplate.styles";
import PropTypes from "prop-types";

const MainTemplate = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
