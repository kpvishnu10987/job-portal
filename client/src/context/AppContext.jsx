import React, { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";

// Create the context
const AppContext = createContext();

// Create the provider component
const AppContextProvider = ({ children }) => {
  const [searchFilter, setSearchFilter] = useState({
    title:'',
    location:''
  })

  const [isSearched,setIsSearched] = useState(false)

  const [jobs,setJobs] = useState([])

  const [showRecruiterLogin,setShowRecruiterLogin] = useState(false)

  //Function to fetch jobs
  const fetchJobs = async () =>{
      setJobs(jobsData)
  }

  useEffect(()=>{
      fetchJobs()
  },[])

  const value = {
    setSearchFilter,searchFilter,
    isSearched,setIsSearched,
    jobs,setJobs,
    showRecruiterLogin,setShowRecruiterLogin,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
