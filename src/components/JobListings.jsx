import React from 'react'
import { useState, useEffect } from 'react';
import JobListing from './JobListing'

const JobListings = ({isHome = false}) => {
  // const jobListings = isHome ? jobs.slice(0, 3) : jobs;
  //when this component loads, initially the array is empty
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  //useEffect to fetch the data from the json file when the component mounts
  // and set the state with the fetched data
  //initially it is empty
  useEffect(() => {
    //fetch the data using async
    const fetchJobs = async () => { 

      //retrieve the data and paginate
      const apiURL = isHome ? 
      '/api/jobs?_page=1&_per_page=3' 
      : '/api/jobs';
      try{
        const res = await fetch(apiURL);
        const data = await res.json();

        //the data returned by the json server is in the format {data: [...]} so we need to extract the array from the data object
        const jobsData = Array.isArray(data) ? data : data.data || [];
        setJobs(jobsData);
      }
      catch(error){
        console.log("Error fetching data", error);

      }finally{
        setLoading(false);
      }
    }
    fetchJobs();
  },[isHome]);

  return (
  
    
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Latest Job Listings" : "All Job Listings"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          { loading ? (
            <h1>Loading...</h1>
          ) : (
            <>
            {
              jobs.map((job)=>(
                  <JobListing key={job.id} job={job}/>
                  
              ))
              
            }
            </>
        )}
          
        
  
        </div>
      </div>
    </section>
  )
}

export default JobListings