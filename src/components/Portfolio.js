import React from 'react';
import { useParams } from 'react-router-dom';

function Portfolio(props) {
  const {uid}= useParams()
    return (
        <div>
          Portfolio  :{uid}
        </div>
    );
}

export default Portfolio;