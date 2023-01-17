import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {Modal, Select} from "antd";
import {Moment} from "moment";
import {removeEvent} from "../redux/slices/dateSlice";

interface RemoveModalProps {
    isModalOpen: boolean
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const RemoveModal = ({isModalOpen, setIsModalOpen}: RemoveModalProps) => {
    const dispatch = useAppDispatch()

    const pickedDate = useAppSelector(state => state.pickedDate.pickedDate)
    const dates = useAppSelector(state => state.date)

    const options = dates[pickedDate.format("DD-MM-YYYY")] ?
        dates[pickedDate.format("DD-MM-YYYY")].map(item => {return {value: item.id, label: item.content}})
        :
        []

    const [event, setEvent] = useState<string>(options[0] ? options[0].value : "")

    function deleteEvent(id: string) {
        dispatch(removeEvent({
            id,
            key: pickedDate.format("DD-MM-YYYY")
        }))
    }

    function handleChange(value: string) {
        setEvent(value)
    }

    const handleOk = () => {
        deleteEvent(event)
        setIsModalOpen(false);
        setEvent("")
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setEvent("")
    };

    return (
        <>
            <Modal title={`Remove event on ${pickedDate.format("DD MMMM YYYY")}`} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Select
                    value={event}
                    onChange={handleChange}
                    style={{ width: "100%" }}
                    options={options}
                />
            </Modal>
        </>
    );
};

export default RemoveModal;