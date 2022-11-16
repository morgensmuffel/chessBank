import styled from '@emotion/styled';

const LimitRoot = styled.div`
    
`

const LimitsRoot = styled.div`
    
`

const Limit = () => {
    return <LimitRoot>
        Limit
    </LimitRoot>
}

export const Limits = () => {
    return <LimitsRoot>
        <Limit/>
        <Limit/>
    </LimitsRoot>
}