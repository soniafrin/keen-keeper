import { Link } from "react-router";

const FriendsList = ({ friend }) => {
    // console.log(friend);
    // console.log(friend.id);
    return (
        <Link to={`/${friend.id}`}>
            <div className=" shadow-sm rounded p-4 ">
                <div className=" text-center space-y-2">
                    <img className="mx-auto rounded-full shadow  shadow-[#244D3F] " src={friend.picture} alt={friend.name} />
                    <p className="font-bold text-xl">{friend.name}</p>
                    <p className="text-gray-500">{friend.days_since_contact}d ago</p>
                    <p className="mx-auto text-center">
                        {
                            friend.tags.map((tag, index) => <span className="bg-[#CBFADB] rounded-xl font-medium pb-1 text-[#244D3F] px-2 mr-2" key={index}> {tag}</span>)
                        }
                    </p>
                    <button className={ `rounded-3xl font-medium px-2 mx-auto text-white pb-1 mt-1 ${friend.status == "overdue" ? "bg-[#EF4444]" : friend.status == "almost due" ? "bg-[#EFAD44]" : "bg-[#244D3F]"  }` }>{friend.status}</button>
                </div>
            </div>
        </Link>

    )
}
export default FriendsList;