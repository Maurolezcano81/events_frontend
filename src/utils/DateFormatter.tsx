
export const dayToYearAndHourToMinute = (dateToFormat: Date) => {
    const date = new Date(dateToFormat);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`
}

export const yearToDayAndHourToSecond = (dateToFormat: Date) => {
    const date = new Date(dateToFormat)

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

export const getDate = (date: Date) => {

    const day = new Date(date);

    return `${day.getDate()}/${day.getMonth() + 1}/${day.getFullYear()}`
}



export const getHours = (date: Date) => {

    const day = new Date(date);

    return `${day.getHours()}:${String(day.getMinutes()).padStart(2, '0')}`

}

