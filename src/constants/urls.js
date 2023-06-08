
const urls = (valcode, date) => {
    return `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${valcode}&date=${date}&json`
};

export {urls}
