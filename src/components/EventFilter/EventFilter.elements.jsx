import styled from 'styled-components'
import { Container } from '../../globalStyles'
import Select from '@material-ui/core/Select';

export const EventFilterBar = styled.section`
    background: #FFF;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 0.1px solid #FFFFFF;
    @media screen and (max-width: 960px){
        height: 160px;
    }
`

export const EventFilterContainer = styled(Container)`
    display: flex;
    justify-content: flex-start;
    height: 80px;

    @media screen and (max-width: 960px){
        height: 160px;
        flex-direction: column;
        align-items: center;
    }
    ${Container}
`

export const EventSelectState = styled(Select)`
    width: 10rem;
    margin-right: 1rem;

    @media screen and (max-width: 960px){
        margin-bottom: 1rem;
    }
`
