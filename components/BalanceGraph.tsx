import styled from '@emotion/styled';
import React, { PureComponent, useState } from 'react';
import Select from 'react-select';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const BalanceGraphRoot = styled.div`
    width: 612px;
    margin-top: 56px;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
`

const Title = styled.div`
    
`

const Graph = styled.div`
    width: 499px;
    height: 400px;
    background-color: red;
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
        <Graph />
    </BalanceGraphRoot>
}