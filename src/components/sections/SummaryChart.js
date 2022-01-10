import React from 'react'
import { PieChart, Pie, Tooltip, Legend, Cell, ResponsiveContainer } from 'recharts'

export default function SummaryChart(props) {

    const chartColors = ['#2980b9','#1c567d'];

    return (
        <div className="summaryChart">
            <ResponsiveContainer width={'100%'} height={'100%'}>
                <PieChart width={250} height={250}>
                    <Tooltip />
                    <Pie data={props.data} dataKey="count" outerRadius={100} fill="blue">
                        {props.data.map((entry, index) => <Cell key={`cell-${index}`} fill={chartColors[index]} />)}
                    </Pie>
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}
