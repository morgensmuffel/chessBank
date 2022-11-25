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
    margin-right: 144px;
`

const LimitsRoot = styled.div`
    display: flex;
`

const RightColumn = styled.div`
    margin-left: 24px;
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
`

const Limit = () => {
    return <LimitRoot>
        <PieChart width={160} height={160}>
            <Pie
                data={[{ value: 1 }, { value: 1 }]}
                //   cx={120}
                //   cy={200}
                innerRadius={50}
                outerRadius={70}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                startAngle={0}
                endAngle={360}
            >

                <Cell fill="green" />
                <Cell fill="#54545492" />

            </Pie>
        </PieChart>
        <RightColumn>
            <CreditLimit>
                Credit limit
            </CreditLimit>
            <Row>
                <Spends>
                    $1000
                </Spends>
                <Max>      
                    /&nbsp;2000
                </Max> 
            </Row> 
        </RightColumn>
    </LimitRoot>
}

export const Limits = () => {
    return <LimitsRoot>
        <Limit />
        <Limit />
    </LimitsRoot>
}