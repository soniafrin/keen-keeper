import { Link } from "react-router";

const FriendsList = ({ friend }) => {
    // console.log(friend);
    // console.log(friend.id);
    return (
        <Link to={`/${friend.id}`}>
            <div className=" shadow rounded p-4 ">
                <div className=" text-center">
                    <img className="mx-auto rounded-full shadow  shadow-[#244D3F] " src={friend.picture} alt={friend.name} />
                    <p>{friend.name}</p>
                    <p>{friend.days_since_contact}d ago</p>
                    <p>
                        {
                            friend.tags.map((tag, index) => <span key={index}> {tag}</span>)
                        }
                    </p>
                    <p>{friend.status}</p>
                </div>
            </div>
        </Link>

    )
}
export default FriendsList;