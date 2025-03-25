
export const dayToYearAndHourToMinute = (dateToFormat: Date) => {
    const date = new Date(dateToFormat);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`
}

export const getDate = (date: Date) => {

    const day = new Date(date);

    return `${day.getDate()}/${day.getMonth() + 1}/${day.getFullYear()}`
}



export const getHours = (date: Date) => {

    const day = new Date(date);

    return `${day.getHours()}:${String(day.getMinutes()).padStart(2, '0')}`

}

