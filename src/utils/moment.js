import moment from 'moment'
export const convertDOBToAge = (dob) => {
  const age = moment().diff(moment(dob), 'years');
  console.log(dob,age)
  return age
}
