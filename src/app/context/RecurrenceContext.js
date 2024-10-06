"use client"; 

// import { createContext, useState, useContext } from "react";

import React, { createContext, useContext, useEffect, useState } from 'react';

const RecurrenceContext = createContext();

export const useRecurrence = () => {
  return useContext(RecurrenceContext);
};

export const RecurrenceProvider = ({ children }) => {
   // State to hold multiple recurrence objects in an array
   const [recurrences, setRecurrences] = useState([]);

   const [currentRecurrence, setCurrentRecurrence] = useState({
     pattern: "daily",       // daily, weekly, monthly, yearly
     frequency: 1,           // Every X days/weeks/months/years
     daysOfWeek: [],         // For weekly recurrence
     nthDayOfMonth: null,    // The nth day of the month
     startDate: new Date().toISOString().split('T')[0],        // Start date of recurrence
     endDate: null,          // End date of recurrence
   });

   console.log('currentRecurrence',currentRecurrence);
   
 
  const updateRecurrence = (key, value) => {
    setCurrentRecurrence((prev) => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    console.log('Updated recurrences:', recurrences);
  }, [recurrences]);  
  
  const saveRecurrence = () => {
    setRecurrences((prevRecurrences) => {
    console.log('Previous recurrences:', prevRecurrences);  
    return [...prevRecurrences, currentRecurrence];
  });
    // Reset form after saving
    setCurrentRecurrence({
      pattern: "daily",
      frequency: 1,
      daysOfWeek: [],
      nthDayOfMonth: null,
      startDate: new Date().toISOString().split('T')[0],       
      endDate: null,
    });
    
  };


  return (
    <RecurrenceContext.Provider value={{ recurrences, currentRecurrence, updateRecurrence, saveRecurrence }}>
      {children}
    </RecurrenceContext.Provider>
  );
};
