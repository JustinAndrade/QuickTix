import React from 'react'
import { Container, Card, Divider, Header, Icon, Image, Menu, Segment, Sidebar, Search, Sea } from 'semantic-ui-react'

export const cardStyle = {
    margin: '5px',
    width: '30%',
    height: '4500px'

}

const Analytics = () => (
    <Container style={{
        float: 'left',
        height: '500px',
        display: 'flex',
        justifyContent: 'space-between'
    }}>
        <Card style={cardStyle}>
            < p > test</ p>
        </Card>
        <Card style={cardStyle}>
            <p>test</p>
        </Card>
        <Card style={cardStyle}>
            <p>test</p>
        </Card>
    </Container >
)

export default Analytics
