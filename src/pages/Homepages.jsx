
import Friends from "../components/friends/Friends";
import FriendsHeader from "../ui/FriendsHeader";
import ProfileData from "../ui/ProfileData";



const Homepages = () => {
    return(
        <div className="homepages">
            <FriendsHeader />
            <ProfileData/>
            <Friends/>
            
        </div>
    )
}
export default Homepages;