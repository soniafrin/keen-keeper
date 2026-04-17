import { createContext, useContext, useState } from "react";

export const TimeLineContext = createContext()

const FriendContextProvider = ({children}) => {
    const [checkIn, setCheckIn] = useState([]);
        // const [CheckIn, setCheckIn] = useContext(TimeLineContext);

    const test={
        checkIn,
        setCheckIn,
    }
    // const test={
    //     name: "bal",
    //     age: 34,
    // }
    return (
        <TimeLineContext value={test}>
            {children}
        </TimeLineContext>

    )
}
export default FriendContextProvider;