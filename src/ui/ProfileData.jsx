import { useContext } from "react";
import { TimeLineContext } from "../context/FriendContextProvidder";

const ProfileData = () => {
    return (
        <div className=" w-8/12 md:container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="shadow-sm py-8 space-y-2 flex flex-col items-center justify-center rounded">
                <span className="font-semibold text-3xl text-[#244D3F]">11</span>
                <span className="text-xl text-gray-500">Total Friends</span>
            </div>
            <div className="shadow-sm py-8 space-y-2 flex flex-col items-center justify-center rounded">
                <span className="font-semibold text-3xl text-[#244D3F]">3</span>
                <span className="text-xl text-gray-500">On Track</span>
            </div>
            <div className="shadow-sm py-8 space-y-2 flex flex-col items-center justify-center rounded">
                <span className="font-semibold text-3xl text-[#244D3F]">6</span>
                <span className="text-xl text-gray-500">Need Attention</span>
            </div>
            <div className="shadow-sm py-8 space-y-2 flex flex-col items-center justify-center rounded">
                <span className="font-semibold text-3xl text-[#244D3F]">12</span>
                <span className="text-xl text-gray-500">Interactions This Month</span>
            </div>
            
        </div>
    )
}
export default ProfileData;