import React from 'react';
import type { BadgeProps } from 'antd';
import { Badge, Calendar } from 'antd';
import type { Dayjs } from 'dayjs';
import {Moment} from "moment";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {setPickedDate} from "../redux/slices/pickedDateSlice";

const EventCalendar = () => {
    const dispatch = useAppDispatch()

    const pickedDate = useAppSelector(state => state.pickedDate.pickedDate)
    const dates = useAppSelector(state => state.date)

    function handleChange(value: Moment) {
        dispatch(setPickedDate(value))
    }

    const getListData = (value: Dayjs) => {
        return dates[value.format("DD-MM-YYYY")] || []
    }

    const dateCellRender = (value: Dayjs) => {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map((item) => (
                    <li key={item.content}>
                        <Badge status={item.type as BadgeProps['status']} text={item.content} />
                    </li>
                ))}
            </ul>
        );
    };

    // @ts-ignore
    return <Calendar value={pickedDate} onChange={handleChange} dateCellRender={dateCellRender} />;
};

export default EventCalendar;