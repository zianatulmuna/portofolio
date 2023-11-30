import React from 'react';

function FlipCard({ id, name, issued }) {
  return (
    <div className="col">
      <div className="flip-card">
      <a href={`https://www.dicoding.com/certificates/${id}`} target="_blank">
        <div className="flip-card-inner">
          <div className="flip-card-front shadow">
            <div className="hstack gap-2">
              <img src="/images/dicoding.jpeg" alt="" />
              <p className='fw-bold'>Dicoding</p>
            </div>
            <div className="card-body p-0">
              <h5>{name}</h5>
            </div>
          </div>
          <div className="flip-card-back shadow">
            <div className="d-flex justify-content-center align-items-center h-100 w-100 rounded-4">
              <div className="">
                <span className='mt-1 small'>Credential ID </span>
                <p>{id}</p>
                <span className='mt-2 small'>Issued </span>
                <p>{issued}</p>
              </div>
            </div>
          </div>
        </div>
      </a>
      </div>
    </div>
  );
}

export default FlipCard;