"use client";

// import React, { useState } from 'react';
import { useRecurrence } from '../context/RecurrenceContext';
import RecurringOptions from './RecurringOptions';
import MiniCalendar from './MiniCalendar';

const DatePicker = () => {
  const { recurrences, currentRecurrence, updateRecurrence, saveRecurrence } = useRecurrence();
  
  
  
  const handleStartDateChange = (e) => {
    updateRecurrence("startDate", e.target.value);
  };
  
  const handleFrequencyChange = (e) => updateRecurrence("frequency", e.target.value);
  const handleEndDateChange = (e) => updateRecurrence("endDate", e.target.value);


  
  return (
    <div 
    className="flex items-center justify-center bg-gray-100 h-full"
    // min-h-screen
    style={{flex:1}}
    >
    <div 
    className="p-4 bg-white shadow-md rounded-lg max-w-md w-full "
    >
      <h2 
      className="text-lg font-semibold mb-4"
      >Select Recurring Dates</h2>
      
      {/* Recurring Options Component */}
      <RecurringOptions />

      {/* Date range inputs */}
      <div className="flex flex-col space-y-4 mt-4">
        <div>
          <label>Start Date</label>
          <input
            type="date"
            className="block mt-2 p-2 border rounded w-full"
            value={currentRecurrence?.startDate} 
            onChange={handleStartDateChange} 
          />
        </div>
        <div>
          <label>End Date (Optional)</label>
          <input
            type="date"
            value={currentRecurrence?.endDate ?? ''} 
            className="block mt-2 p-2 border rounded w-full"
            onChange={handleEndDateChange} 
          />
        </div>
      </div>

      <button 
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded w-full" 
        onClick={saveRecurrence}
      >
        Save currentRecurrence
      </button>

      <div 
      // style={{width:'100%',backgroundColor:'red'}}
      >

      </div>
    </div>
   
  </div>
  );
};

export default DatePicker;
