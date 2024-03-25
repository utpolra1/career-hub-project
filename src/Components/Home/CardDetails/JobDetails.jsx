import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import hooks from '../../Hooks/hooks';

const JobDetails = () => {
    const [singleData, setSingleData]=useState({});
    const {id}=useParams();
    const {data, loading}=hooks();
    const {job_title,company_name,salary,logo,job_description,
        contact_information}=singleData || {};
    useEffect(()=>{
        if(data){
            const singleData=data.find((item)=>item.id==id);
            setSingleData(singleData)
        }
    },[data,id])
    return (
        <div>
            <img src={logo} alt="" />
            <h1 className='text-2xl'>{job_title}</h1>
            <h1>{job_description}</h1>
        </div>
    );
};

export default JobDetails;