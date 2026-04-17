import QuickCheckIn from "../friends/quickCheckIn/QuickCheckIn";

const FriendDetailsCol2 = ({ friend, friends, friendId }) => {
    return (
        <div>
            <div>
                {/* stats cards */}
                <div className=" w-8/12 md:container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="shadow-sm py-8 space-y-2 flex flex-col items-center justify-center rounded">
                        <span className="font-semibold text-xl text-[#244D3F]">{friend.days_since_contact}</span>
                        <span className="text-xl text-gray-500">Days Since Contact</span>
                    </div>
                    <div className="shadow-sm py-8 space-y-2 flex flex-col items-center justify-center rounded">
                        <span className="font-semibold text-xl text-[#244D3F]">{friend.goal}</span>
                        <span className="text-xl text-gray-500">Goal (Days)</span>
                    </div>
                    <div className="shadow-sm py-8 space-y-2 flex flex-col items-center justify-center rounded">
                        <span className="font-semibold text-xl text-[#244D3F]">{friend.next_due_date}</span>
                        <span className="text-xl text-gray-500">Next Due</span>
                    </div>
                </div>
                {/* Relationship Goal Card */}
                <div className="shadow-xl p-5 rounded mt-4 border border-gray-200">
                    <div className="flex justify-between items-center ">
                        <h2 className="text-2xl font-medium text-[#244D3F]">Relationship Goal</h2>
                        <button className="btn">Edit</button >
                    </div>
                    <p className="text-gray-500">Connect every {friend.goal} days</p>

                </div>
                {/* Quick Check-In Card */}
                <QuickCheckIn friends={friends} friend={friend} friendId={friendId} />
            </div>

        </div>
    )
}

export default FriendDetailsCol2;