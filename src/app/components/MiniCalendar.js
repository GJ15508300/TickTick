"use client";

import React from 'react';
import { useRecurrence } from '../context/RecurrenceContext';

const MiniCalendar = () => {
  const { recurrences } = useRecurrence();

  console.log('MiniCalendar recurrences',recurrences);


  const capitalizeFirstLetter = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };





  return (
    <div 
    className="mt-4"
    >
    <h3 
    className="text-md font-semibold mb-2"
    >Saved Dates Patterns Preview</h3>
    <div 
    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4"
    >
      {recurrences?.map((date, index) => {
        console.log('date', date?.pattern);
        return (
          <div key={index} className="mt-1 border p-4 rounded bg-gray-200 text-center flex flex-col justify-between h-full">
            <div className="font-bold text-lg">{capitalizeFirstLetter(date?.pattern)}</div>
            <div className="text-sm text-gray-600">Start Date: {date?.startDate}</div>
            <div className="text-sm text-gray-600">End Date: {date?.endDate}</div>
           
            <div className="flex flex-wrap justify-center mt-2">
        {date?.daysOfWeek?.map((weeks, weekIndex) => {
          // console.log('weeks', weeks);
          return (
            <>
            <div key={weekIndex} className="m-2 border p-2 rounded bg-gray-100 text-center">
              <div className="text-sm text-gray-600">{capitalizeFirstLetter(weeks)}</div>
            </div></>
          );
        })}
      </div>
          </div>
        );
      })}
    </div>
  </div>
  );
};

export default MiniCalendar;
