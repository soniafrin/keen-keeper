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

    return (
        <div className="container mx-auto">
            <hr className="mt-5 shadow text-slate-200" />
            <h2 className="text-3xl font-bold my-5 ml-5">Your Friends</h2>
            {loading ? <div className="flex justify-center items-center"><FadeLoader color="#244D3F" /></div> : <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4  justify-center ">
                {
                    frnds.map((friend, index) => (<FriendsList friend={friend} key={index} />
                    ))
                }
            </div>}
        </div>
    )
}
export default Friends;