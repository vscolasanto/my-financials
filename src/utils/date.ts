export const MONTHS = [
  { value: 0, label: 'Janeiro' },
  { value: 1, label: 'Fevereiro' },
  { value: 2, label: 'Março' },
  { value: 3, label: 'Abril' },
  { value: 4, label: 'Maio' },
  { value: 5, label: 'Junho' },
  { value: 6, label: 'Julho' },
  { value: 7, label: 'Agosto' },
  { value: 8, label: 'Setembro' },
  { value: 9, label: 'Outubro' },
  { value: 10, label: 'Novembro' },
  { value: 11, label: 'Dezembro' }
]

export const currentMonth = () => {
  const currentMonth = new Date().getMonth()

  return currentMonth
}

export const YEARS = () => {
  const currentYear = new Date().getFullYear()

  const rangeOfYears = (start: number, end: number) =>
    Array(end - start + 1)
      .fill(start)
      .map((year, index) => year + index)

  return rangeOfYears(currentYear - 4, currentYear)
    .map((year) => ({
      value: year,
      label: year
    }))
    .sort((a, b) => b.label - a.label)
}
