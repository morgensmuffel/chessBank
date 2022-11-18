import styled from '@emotion/styled';
import { colors } from './styleConfig';

const ActivitiesRoot = styled.div`
    margin-left: auto;
    width: 324px;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
`

const ItemRoot = styled.div`
    display: flex;
    align-items: center;
`

const IconWraper = styled.div`
    background-color: ${colors.button};
    border-radius: 4px;
    padding: 4px;
`

const Item = (props: {icon: string}) => {
    return <ItemRoot>
        <IconWraper>
            <img src={`/icons/${props.icon}`} width={24} />
        </IconWraper>
        YoutubeMusic 
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
        <Item icon="music.svg"/>
        {/* <Item />
        <Item /> */}
    </ActivitiesRoot>
}