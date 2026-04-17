import { Activity, useContext, useState } from "react";
import { TimeLineContext } from "../context/FriendContextProvidder";
import { CloudHail, MessageSquareMore, PhoneCall, Video } from "lucide-react";





const Timeline = () => {
    // const contextData = useContext(TimeLineContext)
    // console.log(contextData);
    const { checkIn } = useContext(TimeLineContext);
    const [filter, setFilter] = useState("all");
    console.log(filter);

    const filteredData = filter === "all" ? checkIn : checkIn.filter(c => c.type === filter.toLowerCase())

     const actionIcons = {
        call: <PhoneCall />,
        text: <MessageSquareMore />,
        video: <Video />
    }

    return (
        <div className=" container mx-auto p-10 space-y-6">
            <h2 className="text-4xl font-bold">Timeline</h2>
            {/* filter dropdown */}
            <div className=" text-xl ">
                {/* <label></label> */}
                <select onChange={(e) => setFilter(e.target.value)}
                    className="text-[#244D3F] rounded shadow-xl border border-gray-200 px-2 py-2  ">
                    {/* <option>Filter Timeline</option> */}
                    <option value="all" >Filter Timeline</option>
                    <option value="Call">Calls</option>
                    <option value="Text">Texts</option>
                    <option value="Video">Videos</option>
                </select>
            </div>

            {/* displaying the filters */}
            <div>
                {filteredData === "0" ? <p>No activity Recorded</p> : filteredData.map(c => (
                    <div key={c.entryId} className="border border-gray-200 rounded shadow mt-2 p-3 flex items-center gap-2">
                        <span>{actionIcons[c.type]}</span>
                        <div>
                        <p className="">{c.type} with {c.name}</p>
                        <p>
                            {new Date().toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric"
                            })}
                        </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* <div>
                {filteredData.length > 0 && (filteredData.map(c=> (<div>
                    <p>{c.type} with {c.name}</p>
                </div>)))
                }
            </div> */}

            {/* <div>
                {
                    checkIn.map(c => <div key={c.entryId} className="border mt-2">
                        <p> {c.type} with {c.name}</p>
                        <p>{new Date().toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric"
                        })}</p>
                    </div>)
                }
            </div> */}
        </div>
    )
}
export default Timeline;