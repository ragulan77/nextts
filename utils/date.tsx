import { format } from 'date-fns'

export function unixTimestampToDate(timestamp: number) {
  const date: Date = new Date(timestamp * 1000)
  return <span>{format(date, 'Pp')}</span>
}
