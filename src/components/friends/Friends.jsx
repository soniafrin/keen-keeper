import { use, useEffect, useState } from "react";
import FriendsList from "./FriendsList";
import { FadeLoader } from "react-spinners";

const Friends = () => {
    const [frnds, setFrnds] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchFriends = async () => {
            const res = await fetch('/friends.json');
            const data = await res.json();
            // console.log(data);
            setFrnds(data)
            setLoading(false)
        }
        fetchFriends()
    }, [])
    console.log(frnds);
    return (
        <div className="container mx-auto">
            <h2>Your Friends</h2>
            {loading ? <div className="flex justify-center items-center"><FadeLoader color="#244D3F" /></div>  : <div className="grid grid-cols-4 gap-2 justify-center ">
                {
                    frnds.map((friend, index) => (<FriendsList friend={friend} key={index}/>
                        ))
                }
            </div>}
        </div>
    )
}
export default Friends;