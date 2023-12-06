import React from 'react';

const ServiceCard = ({ name, image, body }) => {
  return (
    <div className="col">
      <div className="card rounded-4 shadow mt-3">
        <div className="body-img rounded-3">
          <img src={image} alt="" />
        </div>
        <div className="body-content text-center">
          <h5>{name}</h5>
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard