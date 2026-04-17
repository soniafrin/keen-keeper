import { Plus } from "lucide-react";

const FriendsHeader = () => {
    return (
        <div className="friends-header my-10 container mx-auto  text-center space-y-4">
            <h2 className="text-5xl font-bold">Friends to keep close in your life</h2>
            <p className="text-xl w-[60%] mx-auto">Your personal shelf of meaningful connections. Browse, tend, and nurture the
                relationships that matter most.</p>
                <button className="btn bg-[#244D3F] text-white"><Plus />Add Friend</button>
        </div>
    )
}
export default FriendsHeader;