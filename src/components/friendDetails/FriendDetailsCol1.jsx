import { Archive, BellMinus, Trash2 } from "lucide-react";

const FriendDetailsCol1 = ({friend})=>{
    return(
        <div>
            <div className=" rounded p-4 space-y-3">
                <div className=" shadow-xl py-3 rounded text-center space-y-2">
                    <img className="mx-auto rounded-full shadow  shadow-[#244D3F] " src={friend.picture} alt={friend.name} />
                    <p className="font-bold text-xl">{friend.name}</p>
                    <button className={`rounded-3xl font-medium px-2 mx-auto text-white pb-1 mt-1 ${friend.status == "overdue" ? "bg-[#EF4444]" : friend.status == "almost due" ? "bg-[#EFAD44]" : "bg-[#244D3F]"}`}>{friend.status}</button>
                    <p className="mx-auto text-center">
                        {
                            friend.tags.map((tag, index) => <span className="bg-[#CBFADB] rounded-xl font-medium pb-1 text-[#244D3F] px-2 mr-2" key={index}> {tag}</span>)
                        }
                    </p>
                    <p className="text-slate-600 font-medium">"{friend.bio}" </p>
                    <small className="text-slate-500 font-medium">{friend.email} </small>
                </div>
                <div className="flex flex-col gap-3">
                    <button className=" btn border shadow-xl text-black py-2 px-4 rounded hover:bg-[#244D3F] hover:text-white"><BellMinus />Snooze 2 Weeks</button>
                    <button className=" btn shadow-xl  text-black py-2 px-4 rounded hover:bg-[#244D3F] hover:text-white"><Archive />Archive</button>
                    <button className="btn shadow-xl text-[#EF4444] py-2 px-4 rounded hover:bg-[#244D3F] hover:text-white"><Trash2 />Delete</button>
                </div>
            </div>
        </div>
    )
}
export default FriendDetailsCol1;