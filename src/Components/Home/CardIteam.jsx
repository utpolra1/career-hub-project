import React from "react";
import { Link } from "react-router-dom";

const CardIteam = ({item}) => {
  if (!item) {
    return null;
  }
  const {id, job_title,company_name,salary,logo,job_description,
    contact_information
    } = item;

  return (
    <div className="">
    <Link to={`/jobsDatails/${id}`}>
        <div className="card bg-base-100 shadow-xl border-2 h-[600px]">
          <figure className="px-10 pt-10 w-80 h-96 mx-auto">
            <img src={logo} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{job_title}</h2>
            <p>{job_description}</p>
            <p>{company_name}</p>
            <p>{salary}</p>
            <p>{contact_information.phone}</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardIteam;
