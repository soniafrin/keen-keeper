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
        <div className="">
            <PieChart style={{ width: '100%', maxWidth: '300px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
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
                <Legend />
                <Tooltip />
            </PieChart>
        </div>
    )
}
export default Statistics;  