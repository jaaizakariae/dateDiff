import React, { useState,useEffect } from 'react';
import './App.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';
import { calculateDiffBtwnDates } from './Utils'

function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [diffDate, setDiffDate] = useState(0);
  useEffect(() => {
    setDiffDate(calculateDiffBtwnDates(startDate, endDate));
  });

  return (
    <div className="App">
      <header className="App-header">
        <div className="card">
          <div className="card-header">
            Diffrence date APP
         </div>
          <div className="card-body">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <label htmlFor="startDate">Start Date : </label>
                  <DatePicker className="form-control" id="startDate" selected={startDate} onChange={date => setStartDate(date)} dateFormat="dd/MM/yyyy" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <label className="col-form-label" htmlFor="endDate">End Date : </label>
                  <DatePicker className="form-control" id="endDate" selected={endDate} onChange={date => setEndDate(date)} dateFormat="dd/MM/yyyy" />
                  <h4>Number of days : {diffDate}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

