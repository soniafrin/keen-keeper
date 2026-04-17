import { useContext, useState } from "react";
import { TimeLineContext } from "../context/FriendContextProvidder";



const Timeline = () => {
    // const contextData = useContext(TimeLineContext)
    // console.log(contextData);
    const { checkIn } = useContext(TimeLineContext);
    const [filter, setFilter] = useState("all");
    // console.log(filter);

    const filteredData = filter === "all" ? checkIn : checkIn.filter(c => c.type === filter)

    return (
        <div className="">
            <h2>TimeLine</h2>
            {/* filter dropdown */}
            <div>
                {/* <label></label> */}
                <select onChange={(e) => setFilter(e.target.value)}>
                    {/* <option>Filter Timeline</option> */}
                    <option value="all">Filter Timeline</option>
                    <option value="call">Calls</option>
                    <option value="text">Texts</option>
                    <option value="video">Videos</option>
                </select>
            </div>

            {/* displaying the filters */}
            <div>
                {filteredData == 0 ? <p>No activity Recorded</p> : filteredData.map(c => (
                    <div key={c.entryId} className="border mt-2">
                        <p>{c.type} with {c.name}</p>
                        <p>
                            {new Date().toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric"
                            })}
                        </p>
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