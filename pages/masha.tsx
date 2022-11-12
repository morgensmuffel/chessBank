import { Header } from "../components/Header";
import styled from '@emotion/styled';
import { CardsList } from "../components/Cards";


export const Root = styled.div`
  display: flex;
  background: #050609;
  min-height: 100vh;
  color: #ffffff;
`

const Drawer = styled.div`
  width: 240px;
  padding: 24px;
  border-right: dashed 1px #A0A0A0;
`

const Main = styled.div`
  flex-grow: 1;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
`

const Title = styled.div`
  margin-top: 56px;
`

const Menu = styled.div`
  
`
const Account = styled.div`
  
`

const ItemWraper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 16px;
  transition: all 0.2s;
  user-select: none;
  :hover {
    background: #3d90da;
  }

  :active {
    background: #ff9900;
  }
`

const ItemText = styled.div`
  padding-left: 8px;
`

const Divider = styled.hr`
  border-bottom: dashed 1px #A0A0A0;
  border-top: none;
  margin: 36px 0 56px;
`

type ItemProps = {
  text: string, 
  icon?: string
}
const Item = (props: ItemProps) => {
  return <ItemWraper>
    <img src={`/icons/${props.icon}`} width={32} />
    <ItemText>
      {props.text}
    </ItemText>
  </ItemWraper>
}


export default function() {
    return <Root>
      <Drawer>
        <Logo>
          <img src="/logo.svg" width={32} />
          <span>Chess</span>
        </Logo>
        <Menu>
          <Title>Menu</Title>
          <Item text="Overview" icon="home.svg"/>
          <Item text="Cards" icon="card.svg"/>
          <Item text="Statistics" icon="stat.svg"/>
        </Menu>
        <Divider />
        <Account>
          <Title>Account</Title>
          <Item text="Profile" icon="profile.svg"/>
          <Item text="Message" icon="message.svg"/>
          <Item text="Notification" icon="notification.svg"/>
          <Item text="Settings" icon="settings.svg"/>
        </Account>
      </Drawer>
      <Main>
        <Header />
        <CardsList />
      </Main>
        
    </Root>

}