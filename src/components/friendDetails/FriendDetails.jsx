import { use, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import FriendDetailsCol2 from "./FriendDetailsCol2";
import FriendDetailsCol1 from "./FriendDetailsCol1";


const FriendDetails = ({ response }) => {

    const friends = useLoaderData();
    // const friends = use(response);
    const { friendId } = useParams();

    const friend = friends.find(f => f.id === parseInt(friendId));

    if (!friend) { return <div className="text-center mt-5">Friend not found</div> }

    return (
        <div className="grid md:grid-cols-2 gap-4 mt-10 ">
            {/* column -1  */}
            <FriendDetailsCol1 friend={friend}/>

            {/* clumn -2 */}
           <FriendDetailsCol2 friend={friend} friends={friends} friendId={friendId}/>
        </div>
    )
}
export default FriendDetails;