import { BarChart } from "@mui/x-charts";
import { Component, ReactNode } from "react";

interface ComparasonBarChartProps {
    teamsDataMap: Map<number, number>
}

class ComparasonBarChart extends Component<ComparasonBarChartProps> {
    constructor(props: ComparasonBarChartProps){
        super(props)
        console.log(props)
    }

    render(): ReactNode {

        const xAxis: number[] = Array.from(this.props.teamsDataMap.keys())
        const yAxis: number[] = Array.from(this.props.teamsDataMap.values())

        return (
            <BarChart
              xAxis={[{ scaleType: 'band', data: xAxis }]}
              series={[{data: yAxis}]}
              width={500}
              height={300}
            />
        )
    }
}

export default ComparasonBarChart;