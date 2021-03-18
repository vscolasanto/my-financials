const formatDate = (date: string): string => {
  const dateFormatted = new Date(date)
  return dateFormatted
    .toISOString()
    .toLocaleString()
    .split('T')[0]
    .split('-')
    .reverse()
    .join('/')
}

export default formatDate
