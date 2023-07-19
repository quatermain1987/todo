import React, { useState } from 'react';

const Dday = (props) => {

    const [item, setItem] = useState(props.item);

    const DdayCount = () => {
        let today = new Date();
        let Dday = today.getDate() - item.date.getDate();
        console.log(Dday);
        return (Dday);
    }

    return (
        <b>
            1
        </b>
    );

}

export default Dday;