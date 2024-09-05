import React from "react";

const Pagein = () => {
  return (
    <div className="p-5 page-in">
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/about">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/product">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="service">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagein;
