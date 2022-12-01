import styled from '@emotion/styled';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';


const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


const LimitRoot = styled.div`
    display: flex;
    align-items: center;
    margin-right: 112px;
`

const LimitsRoot = styled.div`
    display: flex;
`

const RightColumn = styled.div`
    margin-left: 32px;
`

const CreditLimit = styled.div`
    padding-bottom: 32px;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
`

const Spends = styled.div`
    font-size: 32px;
    font-weight: 500;
`

const Max = styled.div`
    margin-left: 4px;
    color: #8e8e8e;
`

type LimitData={expenses: number, limit: number} 

const CreditLimitData: LimitData={
    expenses: 2000,
    limit: 3000
}

const OnlineLimitData: LimitData={
    expenses: 500,
    limit: 4000 
}

const Limit = (props: {data: LimitData, title: string}) => {
    return <LimitRoot>
        <PieChart width={160} height={160}>
            <Pie
                data={[
                    { value: (props.data.limit / props.data.expenses) - 1 },
                    { value: 1 },
                ]}
                //   cx={120}
                //   cy={200}
                innerRadius={50}
                outerRadius={70}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                startAngle={90}
                endAngle={360 + 90}
            >

                <Cell fill="#54545492" />
                <Cell fill="#ecfb4c" />

            </Pie>
        </PieChart>
        <RightColumn>
            <CreditLimit>
                {props.title}
            </CreditLimit>
            <Row>
                <Spends>
                    ${props.data.expenses}
                </Spends>
                <Max>      
                    /&nbsp;{props.data.limit}
                </Max> 
            </Row> 
        </RightColumn>
    </LimitRoot>
}

export const Limits = () => {
    return <LimitsRoot>
        <Limit title={"Credit Limit"} data={CreditLimitData}/>
        <Limit title={"Online Limit"} data={OnlineLimitData}/>
    </LimitsRoot>
}