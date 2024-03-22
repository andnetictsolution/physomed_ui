import moment from 'moment'
export const convertDOBToAge = (dob) => {
  const age = moment().diff(moment(dob), 'years');
  return age
}
export const convertToString=(date)=>{
  return moment(date).format("LLL")
}
export const convertShortDate=(date)=>{
  return moment(date).format("LL")
}
export const convertDatePicker = (date)=>{
  return moment(date).format("YYYY-MM-DD")
}
