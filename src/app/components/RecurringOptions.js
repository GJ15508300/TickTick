import { useRecurrence } from '../context/RecurrenceContext';

const RecurringOptions = () => {
  const { currentRecurrence, updateRecurrence,saveRecurrence } = useRecurrence();

  
  // Example: Update pattern
  const handlePatternChange = (e) => {
    console.log("e.target.value",e.target.value);
    
    updateRecurrence("pattern", e.target.value);
  };

 
 



  const handleFrequencyChange = (e) => updateRecurrence("frequency", e.target.value);
  const handleEndDateChange = (e) => updateRecurrence("endDate", e.target.value);


  return (
    <div>
      <label>Recurring Pattern</label>
      <select
        className="border rounded p-2"
        value={currentRecurrence.pattern}
        onChange={(e) => {
          console.log('onChange triggered');
          handlePatternChange(e);
        }}
        // onChange={(e) => updateRecurrence('pattern', e.target.value)}
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>

      {/* Frequency selector */}
      <div className="mt-4">
        <label>Every</label>
        <input
          type="number"
          className="border rounded p-2"
          value={currentRecurrence.frequency}
          onChange={(e) => updateRecurrence('frequency', parseInt(e.target.value))}
        />
        {currentRecurrence.pattern}
      </div>

      {/* Weekly currentRecurrence (for selecting days) */}
      {currentRecurrence.pattern === 'weekly' && (
        <div className="mt-4">
          <label>Select Days of the Week</label>
          <div className="flex space-x-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <button
                key={day}
                className={`p-2 border rounded ${currentRecurrence.daysOfWeek.includes(day) ? 'bg-blue-500 text-white' : ''}`}
                onClick={() => {
                  const days = currentRecurrence.daysOfWeek.includes(day)
                    ? currentRecurrence.daysOfWeek.filter((d) => d !== day)
                    : [...currentRecurrence.daysOfWeek, day];
                  updateRecurrence('daysOfWeek', days);
                }}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Monthly currentRecurrence (nth day of month) */}
      {currentRecurrence.pattern === 'monthly' && (
        <div className="mt-4">
          <label>Select the Nth Day of the Month</label>
          <input
            type="number"
            className="border rounded p-2"
            value={currentRecurrence.nthDayOfMonth || ''}
            onChange={(e) => updateRecurrence('nthDayOfMonth', parseInt(e.target.value))}
          />
        </div>
      )}
    </div>
  );
};

export default RecurringOptions;
