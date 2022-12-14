import styled from '@emotion/styled';
import React, { PureComponent, useState } from 'react';
import Select from 'react-select';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import {data2} from './fakeData';

console.log({"data2": data2})



const BalanceGraphRoot = styled.div`
    width: 612px;
    margin-top: 56px;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
`

const Title = styled.div`
    
`

const options = [
    { value: 'day', label: 'Last day' },
    { value: 'week', label: 'Last week' },
    { value: 'month', label: 'Last month' },
    { value: 'year', label: 'Last year' },
];

const CustomSelect = styled(Select)`
    width: 160px;

    & .Select__control {
        border-radius: 6px;
        background-color: #8d8d8d;
    }

    & .Select__single-value {
        color: white;
    }

    & .Select__placeholder {
        color: white;
    }

    & .Select__option {
        background-color: yellow;
        color: black;
    }

` as typeof Select

const data = [
    {
        "name": "Page A",
        "expenses": 4000,
        "incomes": 2400,
        "amt": 2400
    },
    {
        "name": "Page B",
        "expenses": 3000,
        "incomes": 1398,
        "amt": 2210
    },
    {
        "name": "Page C",
        "expenses": 2000,
        "incomes": 9800,
        "amt": 2290
    },
    {
        "name": "Page D",
        "expenses": 2780,
        "incomes": 3908,
        "amt": 2000
    },
    {
        "name": "Page E",
        "expenses": 1890,
        "incomes": 4800,
        "amt": 2181
    },
    {
        "name": "Page F",
        "expenses": 2390,
        "incomes": 3800,
        "amt": 2500
    },
    {
        "name": "Page G",
        "expenses": 3490,
        "incomes": 4300,
        "amt": 2100
    }
]


export const BalanceGraph = () => {
    const [selectedOption, setSelectedOption] = useState<typeof options[number] | null>(null);

    return <BalanceGraphRoot>
        <Header>
            <Title>
                Incomes & Expenses
            </Title>
            <CustomSelect
                classNamePrefix="Select"
                onChange={setSelectedOption}
                options={options}
                value={selectedOption}
            // menuIsOpen={true}
            />
        </Header>
        <LineChart width={612} height={250} data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" height={40} />
            <Line type="monotone" dataKey="incomes" stroke="#8884d8" strokeWidth={3} />
            <Line type="monotone" dataKey="expenses" stroke="#82ca9d" strokeWidth={3} />
        </LineChart>
    </BalanceGraphRoot>
}