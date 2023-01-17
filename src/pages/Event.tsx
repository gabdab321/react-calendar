import React, {useState} from 'react';
import EventCalendar from "../components/EventCalendar";
import {Button, DatePicker} from "antd";
import classes from "./styles/Event.module.scss"
import EventModal from "../components/EventModal";
import RemoveModal from "../components/RemoveModal";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {Moment} from "moment";
import {setPickedDate} from "../redux/slices/pickedDateSlice";

const Event = () => {
    const pickedDate = useAppSelector(state => state.pickedDate.pickedDate)
    const dates = useAppSelector(state => state.date)

    const [isEventOpen, setIsEventOpen] = useState<boolean>(false);
    const [isRemoveOpen, setIsRemoveOpen] = useState<boolean>(false)

    function checkEvents() {
        const date = dates[pickedDate.format("DD-MM-YYYY")]
        return date ? date.length === 0 : true
    }

    return (
        <div className={classes.main}>
            <EventModal isModalOpen={isEventOpen} setIsModalOpen={setIsEventOpen} />
            <RemoveModal isModalOpen={isRemoveOpen} setIsModalOpen={setIsRemoveOpen} />

            <EventCalendar />

            <Button
                onClick={() => setIsEventOpen(true)}
                style={{alignSelf: "center", marginTop: "10px"}}
                size="large"

                type="primary"
            >Add Event</Button>

            <Button
                disabled={checkEvents()}
                onClick={() => setIsRemoveOpen(true)}
                style={{alignSelf: "center", marginTop: "8px", marginBottom: "20px"}}
                size="large"
                type="primary"
            >Remove Event</Button>
        </div>
    );
};

export default Event;