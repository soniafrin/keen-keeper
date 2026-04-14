import { useEffect, useState } from "react";
import FriendsList from "./FriendsList";


const Friends = () => {
    const [frnds, setFrnds] = useState([]);
    useEffect(() => {
        const fetchFriends = async () => {
            const res = await fetch('/friends.json');
            const data = await res.json();
            // console.log(data);
            setFrnds(data)
        }
        fetchFriends()
    }, [])
    // console.log(frnds);
    return (
        <div className="container mx-auto">
            <h2>Your Friends</h2>
            <div className="grid grid-cols-4 gap-2 justify-center ">
                {
                    frnds.map((friend, index) => (<FriendsList friend={friend} key={index}/>
                        ))
                }
            </div>
        </div>
    )
}
export default Friends;