
export const dayToYearAndHourToMinute = (dateToFormat: Date) => {
    const date = new Date(dateToFormat);
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`
}