export default function validate(startDate, endDate) {
  let errors = {};
  if (!startDate) {
    errors.startDate = 'Start date is required';
  }
  if (!endDate) {
    errors.endDate = 'End date is required';
  }
  return errors;
};