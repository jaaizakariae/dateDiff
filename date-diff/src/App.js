import React, { useState } from 'react';
import './App.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';
import {calculateDiffBtwnDates} from './Utils'

function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
      alert(calculateDiffBtwnDates(startDate,endDate));
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <DatePicker selected={startDate} onChange={date => setStartDate(date)} dateFormat="dd/MM/yyyy" />
          <DatePicker selected={endDate} onChange={date => setEndDate(date)} dateFormat="dd/MM/yyyy" />
          <button type="submit">Calculate</button>
        </form>
      </header>
    </div>
  );
}

export default App;

