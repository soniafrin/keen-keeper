import { useContext, useState } from "react";
import { TimeLineContext } from "../../context/FriendContextProvidder";
import { toast } from "react-toastify";

const QuickCheckIn = ({ friends, friend, friendId }) => {
    // console.log(friends);
    // console.log(friend);

    // const [checkIn, setCheckIn] = useState([])
    const { checkIn, setCheckIn } = useContext(TimeLineContext)

    const handleCheckIn = (activity) => {
        // console.log(type);
        const addedCheckInTYpe = {
            ...friend,
            type: activity,
            entryId: Math.random(),
        }
        setCheckIn([...checkIn, addedCheckInTYpe])
        toast(`${activity} with ${friend.name}`, {
            position: "top-right",
            autoClose: 2000,
            theme: "light",
        });
    }
    // console.log(friend);
    return (

        <div>
            <div className="border mt-5 ">
                {/* <div> */}
                <p>Quick Check-In</p>
                {/* </div> */}
                <div className=" container mx-auto grid grid-cols-4 gap-2 p-10  ">
                    <div className="shadow-sm py-8 space-y-2 flex flex-col items-center justify-center rounded">
                        <span className="font-semibold text-3xl">10</span>
                        <button onClick={() => handleCheckIn("Call")} className="text-xl text-gray-500 cursor-pointer">Call</button>
                    </div>
                    <div className="shadow-sm py-8 space-y-2 flex flex-col items-center justify-center rounded">
                        <span className="font-semibold text-3xl">10</span>
                        <button onClick={() => handleCheckIn("Text")} className="text-xl text-gray-500 cursor-pointer">Text</button>
                    </div>

                    <div className="shadow-sm py-8 space-y-2 flex flex-col items-center justify-center rounded">
                        <span className="font-semibold text-3xl">icon</span>
                        <button onClick={() => handleCheckIn("Video")} className="text-xl text-gray-500 cursor-pointer">Video</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default QuickCheckIn;