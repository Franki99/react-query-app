// import React from 'react';
import PropTypes from "prop-types";

const DisplayData = ({ data }) => {
  return (
    <div>
      <h2>Fetched Data</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

DisplayData.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DisplayData;
