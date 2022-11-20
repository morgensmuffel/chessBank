import styled from '@emotion/styled';
import { format, parseISO } from 'date-fns';
import { colors } from './styleConfig';

const ActivitiesRoot = styled.div`
    margin-left: auto;
    width: 324px;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
`

const ItemRoot = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 12px;
`

const IconWraper = styled.div`
    background-color: ${colors.button};
    border-radius: 4px;
    padding: 10px;
    margin-right: 16px;
`

const Column = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
    align-self: stretch;
`

const Date = styled.div`
    color: #a4a4a4;
`

const Spend = styled.div`
    margin-left: auto;
`

type Activity = {
    category: 'grocery' | 'online' | 'taxi',
    place: string,
    date: string,
    amount: number
}

const FirstActivity: Activity = {
    category: "grocery",
    place: "Walmart",
    date: "2022-11-20T00:14:45.471Z",
    amount: 321
} 

const Activities: Activity[] = [
    FirstActivity, 
    {
        ...FirstActivity, 
        amount: 200
    },
    FirstActivity,
    FirstActivity,
    FirstActivity,
    FirstActivity
]

const Item = (props: {icon?: string, data: Activity}) => {
    return <ItemRoot>
        <IconWraper>
            <img src={`/icons/${props.data.category}.svg`} width={24} />
        </IconWraper>
        <Column>
            <div> {props.data.place} </div>
            <Date> {format(parseISO(props.data.date), 'dd MMMM, yyyy')} </Date>
        </Column> 
        <Spend>
            -${props.data.amount}
        </Spend>
    </ItemRoot>
}



export const LastActivities = () => {
    return <ActivitiesRoot>
        <Header>
            <h4> 
                Last activities
            </h4>
            <button>
                Ask a report
            </button>
        </Header>
        {Activities.map((activity) => <Item data={activity} />)}
    </ActivitiesRoot>
}