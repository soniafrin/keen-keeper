import { useContext, useState } from "react";
import { TimeLineContext } from "../../../context/FriendContextProvidder";
import { toast } from "react-toastify";
import { CloudHail, MessageSquareMore, PhoneCall, Video } from "lucide-react";

const QuickCheckIn = ({ friends, friend, friendId }) => {
    // console.log(friends);
    // console.log(friend);

    // const [checkIn, setCheckIn] = useState([])
    const { checkIn, setCheckIn } = useContext(TimeLineContext)

    const handleCheckIn = (activity) => {
        // console.log(type);
        const addedCheckInTYpe = {
            ...friend,
            type: activity.toLowerCase(),
            entryId: Math.random(),
        }
        setCheckIn([...checkIn, addedCheckInTYpe])
        toast(`${actionIcons[activity]} ${activity} with ${friend.name}`, {
            position: "top-right",
            autoClose: 2000,
            theme: "light",
        });
        console.log("activity:", activity);
    console.log("key:", activity.toLowerCase());
    console.log("icon:", actionIcons[activity.toLowerCase()]);
    }
    const actionIcons = {
        call: <PhoneCall />,
        text: <MessageSquareMore />,
        video: <Video />
    }
    return (

        <div>
            <div className="shadow-xl mt-5 border border-gray-200 rounded   ">
                {/* <div> */}
                <p className="text-2xl text-[#244D3F] font-bold p-5">Quick Check-In</p>
                {/* </div> */}
                <div className=" cursor-pointer container mx-auto grid grid-cols-3 gap-3 p-10   ">
                    <div onClick={() => handleCheckIn("Call")} className=" border border-gray-200 shadow-sm space-y-2 flex flex-col items-center justify-center rounded">
                        <span className="font-semibold text-3xl ">{actionIcons.call}</span>
                        <button className=" text-xl text-gray-500 cursor-pointer ">Call</button>
                    </div>
                    <div onClick={() => handleCheckIn("Text")} className=" cursor-pointer  border border-gray-200 shadow-sm py-8 space-y-2 flex flex-col items-center justify-center rounded">
                        <span className="font-semibold text-3xl">{actionIcons.text}</span>
                        <button className="text-xl text-gray-500 cursor-pointer ">Text</button>
                    </div>

                    <div onClick={() => handleCheckIn("Video")} className=" cursor-pointer border border-gray-200 shadow-sm py-8 space-y-2 flex flex-col items-center justify-center rounded">
                        <span className="font-semibold text-3xl">{actionIcons.video}</span>
                        <button className="text-xl text-gray-500 cursor-pointer ">Video</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default QuickCheckIn;