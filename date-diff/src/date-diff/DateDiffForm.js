import React, { useState, useEffect } from 'react';
import validate from './DateDiffFormValidation';
import DatePicker from 'react-datepicker';
import { Button } from 'reactstrap';
import { calculateDiffBtwnDates, isEmpty } from '../Utils';

/**
 * Component that calculate the number of days between two dates
 */
const DateDiffForm = () => {
  const [errors, setErrors] = useState({});
  const [diffDate, setDiffDate] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  // To Handle a form submit
  const handleSubmit = (event) => {
    // To prevent the submit of the form
    if (event) event.preventDefault();

    // Getting the result from validation process
    var result = validate(startDate, endDate);

    // Set the error state with errors
    setErrors(result);

    // if no errors then calculate otherwise just show 0
    if (isEmpty(result)) {
      setDiffDate(calculateDiffBtwnDates(startDate, endDate))
    } else {
      setDiffDate(0)
    }
  };
  return (
    <div className="card">
      <div className="card-header">
        Diffrence date APP
      </div>
      <div className="card-body">
        <div className="container">
          <div className="column is-4 is-offset-4">
            <div className="box">
              <form onSubmit={handleSubmit} noValidate>
                <div className="field">
                  <label className="label">Start Date : </label>
                  <div className="control">
                    <DatePicker autoComplete="off" className="form-control" id="startDate" name="startDate" selected={startDate} onChange={date => setStartDate(date)} value={startDate || ''} required dateFormat="dd/MM/yyyy" />
                    {errors.startDate && (
                      <p className="help is-danger">{errors.startDate}</p>
                    )}
                  </div>
                </div>
                <div className="field">
                  <label className="label">End Date : </label>
                  <div className="control">
                    <DatePicker autoComplete="off" className="form-control" id="endDate" name="endDate" selected={endDate} onChange={date => setEndDate(date)} value={endDate || ''} required dateFormat="dd/MM/yyyy" />
                  </div>
                  {errors.endDate && (
                    <p className="help is-danger">{errors.endDate}</p>
                  )}
                </div>
                <Button type="submit" color="danger" className="mt-2"> Calculate</Button>
                <h4>Number of days :{isEmpty(errors) ? diffDate : 0}</h4>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateDiffForm;