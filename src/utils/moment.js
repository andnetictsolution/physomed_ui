import moment from 'moment'
export const convertDOBToAge = (dob) => {
  const age = moment().diff(moment(dob), 'years');
  console.log(dob,age)
  return age
}
export const convertToString=(date)=>{
  return moment(date).format("LLL")
}
export const convertShortDate=(date)=>{
  return moment(date).format("LL")
}
