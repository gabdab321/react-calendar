import React, {ChangeEvent, useState} from 'react';
import {Alert, Input, Modal, Select} from "antd";
import {dateEventItem, typeVariants} from "../types/dateTypes";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {addEvent} from "../redux/slices/dateSlice";
import { v4 as uuidv4 } from 'uuid';

interface EventModalProps {
    isModalOpen: boolean
    setIsModalOpen: any
}

const EventModal = ({isModalOpen, setIsModalOpen}: EventModalProps) => {
    const dispatch = useAppDispatch()
    const pickedDate = useAppSelector(state => state.pickedDate.pickedDate)

    const [eventItem, setEventItem] = useState<dateEventItem>({type: "error", content: "", id: ""})
    const [isError, setIsError] = useState<boolean>(false)

    function handleContent(event: ChangeEvent<HTMLInputElement>) {
        setEventItem({...eventItem, content: event.target.value})
    }

    function handleType(value: string) {
        setEventItem({...eventItem, type: value as typeVariants})
    }

    const handleOk = () => {
        if(eventItem.content === "") {
            setIsError(true)
            return
        }

        dispatch(addEvent({
            id: uuidv4(),
            key: pickedDate.format("DD-MM-YYYY"),
            event: eventItem
        }))

        setEventItem({content: "", type: "error", id: ""})
        setIsError(false)
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setEventItem({content: "", type: "error", id: ""})
        setIsError(false)
        setIsModalOpen(false);
    };

    return (
        <>
            <Modal title={`Add event on ${pickedDate.format("DD MMMM YYYY")}`} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Input value={eventItem.content} onChange={handleContent} placeholder="Enter event message"/>
                <Select
                    style={{ width: "100%", marginTop: "8px"}}
                    value={eventItem.type}
                    onChange={handleType}
                    options={[
                        {
                            value: 'success',
                            label: 'Green',
                        },
                        {
                            value: 'error',
                            label: 'Red',
                        },
                        {
                            value: 'warning',
                            label: 'Orange',
                        },
                    ]}
                />
                {isError &&
                    <Alert
                        style={{marginTop: "15px"}}
                        description="Event message must be not empty"
                        type="error"
                        showIcon
                    />
                }
            </Modal>
        </>
    );
};

export default EventModal;