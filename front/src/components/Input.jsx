import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import fr from "date-fns/locale/fr";
import { requestPostInfos } from '../utils/requestsHTTP/requestPostInfos';
registerLocale("fr", fr);

const Input = ({getDatasReunions, isLoadingData}) => {
    const [startDate, setStartDate] = useState(new Date());

    const convertDate = (inputFormat) => {
        function pad(s) { return (s < 10) ? '0' + s : s; }
        var d = new Date(inputFormat)
        return [d.getFullYear(), pad(d.getMonth() + 1), pad(d.getDate())].join('-');
    }

    const submit = async (e) => {
        isLoadingData(true);
        requestPostInfos('http://localhost:8000/scrap-reunion-pmu-links', convertDate(startDate))
        .then((data) => {
            getDatasReunions(data.results)
            isLoadingData(false)
        })
    }

    return (
        <div>
            <DatePicker
                dateFormat="dd/MM/yyyy"
                locale='fr'
                selected={startDate}
                onChange={(date) => setStartDate(date)}
            />
            <button type='button' onClick={() => submit()}>valider</button>
        </div>
    )
}

export default Input;


