import { use, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import QuickCheckIn from "../quickCheckIn/QuickCheckIn";


const FriendDetails = ({ response }) => {

    const friends = useLoaderData();
    // const friends = use(response);
    const { friendId } = useParams();

    const friend = friends.find(f => f.id === parseInt(friendId));
   
    if (!friend) { return <div className="text-center mt-5">Friend not found</div> }

    return (
        <div className="grid grid-cols-2 gap-4">
            {/* column -1  */}
            <div>
                <div className=" text-center">
                    <img className="mx-auto rounded-full shadow  shadow-[#244D3F] " src={friend.picture} alt={friend.name} />
                    <p>{friend.name}</p>
                    <p>{friend.status}</p>
                    <p>
                        {
                            friend.tags.map((tag, index) => <span key={index}> {tag}</span>)
                        }
                    </p>
                    <p>{friend.bio} ago</p>
                    <p>{friend.email} ago</p>
                </div>
                <div className="flex flex-col">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Snooze 2 Weeks</button>
                    <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Archive</button>
                    <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">Delete</button>
                </div>
            </div>

            {/* clumn -2 */}
            <div>
                {/* stats cards */}
                <div className=" container mx-auto grid grid-cols-4 gap-2">
                    <div className="shadow-sm py-8 space-y-2 flex flex-col items-center justify-center rounded">
                        <span className="font-semibold text-3xl">10</span>
                        <span className="text-xl text-gray-500">Days Since Contact</span>
                    </div>
                    <div className="shadow-sm py-8 space-y-2 flex flex-col items-center justify-center rounded">
                        <span className="font-semibold text-3xl">10</span>
                        <span className="text-xl text-gray-500">Goal (Days)</span>
                    </div>

                    <div className="shadow-sm py-8 space-y-2 flex flex-col items-center justify-center rounded">
                        <span className="font-semibold text-3xl">10</span>
                        <span className="text-xl text-gray-500">Next Due</span>
                    </div>
                </div>
                {/* Relationship Goal Card */}
                <div className="border p-4 rounded">
                    <div className="flex justify-between items-center">
                        <h2>Relationship Goal</h2>
                        <button className="btn">Edit</button >
                    </div>
                    <p>Connect every {friend.goal} days</p>

                </div>
                {/* Quick Check-In Card */}
                    <QuickCheckIn friends={friends} friend={friend} friendId={friendId}/>
                
                {/* When clicked, each button adds a new entry to the **Timeline** (see Section 6) */}
                <div className="border mt-5">
                    <p>When clicked, each button adds a new entry to the **Timeline** (see Section 6)</p>

                </div>

            </div>
        </div>
    )
}
export default FriendDetails;