import date from "date-and-time"

export const getTimeDifferenceString = (postDate: Date):string => {
  const dateNow = new Date()
  postDate = new Date(postDate)
  const difference = date.subtract(dateNow, postDate).toHours()

  if (difference < 24) return `Posted ${Math.floor(difference)}h ago`
  else if (difference < 48) return `Posted yesterday`
  else return `Posted at ${date.format(postDate, "DD.MM.YYYY")}`
 }