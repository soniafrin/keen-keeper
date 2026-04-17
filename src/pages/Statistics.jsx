import { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { TimeLineContext } from "../context/FriendContextProvidder";



const Statistics = () => {
    const { checkIn } = useContext(TimeLineContext);

    if (checkIn.length === 0) {
        return <p>No data available to chart yet!</p>;
    }
    const data = [
        { name: "Call", value: checkIn.filter(c => c.type === "call").length, fill: "#7F37F5" },
        { name: "Text", value: checkIn.filter(c => c.type === "text").length, fill: "#244D3F" },
        { name: "Video", value: checkIn.filter(c => c.type === "video").length, fill: "#37A163" },
    ]


    return (
        <div className="container mx-auto mt-6">
            <h2 className=" text-3xl font-bold">Friendship Analytics</h2>
            <div className=" container p-5 rounded mx-auto border border-gray-200 shadow-xl mt-5">
                <i className="text-xl text-gray-500">By Interaction Type</i>
                <PieChart style={{ width: '100%', maxWidth: "100%", maxHeight: '80vh', aspectRatio: 1 }} responsive>
                    <Pie
                        data={data}
                        innerRadius="80%"
                        outerRadius="100%"
                        // Corner radius is the rounded edge of each pie slice
                        cornerRadius="50%"
                        fill="#8884d8"
                        // padding angle is the gap between each pie slice
                        paddingAngle={5}
                        dataKey="value"
                        isAnimationActive={true}
                    />
                    <div className="bg-amber-900">
                        <Legend
                            wrapperStyle={{
                                paddingTop: "20px"
                            }} />
                    </div>
                    <Tooltip />
                </PieChart>
            </div>
        </div>
    )
}
export default Statistics;  