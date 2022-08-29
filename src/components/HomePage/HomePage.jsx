import { useEffect } from "react";
// import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const HomePage = (props) => {
  let navigate = useNavigate();
  useEffect(() => {
    const d = new Date();
    const year = d.getFullYear();
    navigate(`/calendar/${year}`);
  });
  return null;
};

HomePage.propTypes = {};

export default HomePage;
