import * as React from "react";
import {
    Button,
    Text,
    Icon,
    View,
    Container,
    Footer,
    FooterTab,
    Header,
    Content,
    Body,
    Title,
    ListItem,
    Switch,
    Right,
    Left,
} from "native-base";

class ModalInner extends React.Component {
    renderItems = () => {
        const { data, setMakets } = this.props;
        return data.M.map((item) => {
            return (item.availability === 1) ? <View><ListItem key={`list${item.id}`}>
                <Left><Text>{`M${(item.id < 10) ? "0" : ""}${item.id}`}</Text></Left>
                <Body><Text>Тут буде назва макету {`M${(item.id < 10) ? "0" : ""}${item.id}`}</Text></Body>
                <Right>
                    <Switch
                        value={item.on}
                        onValueChange={(e) => {setMakets('M', item.id, e); this.forceUpdate()}}
                    />
                </Right>
            </ListItem>{(item.id === 9) ? this.renderChildren() : null}</View> : null;
        })
    };

    renderChildren = () => {
        const { data, setMakets } = this.props;
        return data.children.map((item) => {
            return (item.availability === 1) ? <ListItem key={`listchildren${item.id}`}>
                <Left><Text>{`M10.${item.id}`}</Text></Left>
                <Body><Text>Тут буде назва макету {`M10.${item.id}`}</Text></Body>
                <Right>
                    <Switch
                        value={item.on}
                        onValueChange={(e) => {setMakets('children', item.id, e); this.forceUpdate()}}
                    />
                </Right>
            </ListItem> : null;
        })
    };

    renderSaws = () => {
        const { saws, setSaw } = this.props;

        return saws.map((item) => {
            return <ListItem key={`saws${item.id}`}>
                <Left><Text>{`${item.id}`}</Text></Left>
                <Right>
                    <Switch
                        value={item.on}
                        onValueChange={(e) => {setSaw(item.id, e); this.forceUpdate()}}
                    />
                </Right>
            </ListItem>
        })
    };

    render() {
        return <Container>
            <Header style={{backgroundColor: "#333", height: 64}} androidStatusBarColor={"#333"}>
                <Body>
                    <Title style={{width: "100%", margin: "auto"}}>{'Оберіть можливі макети'}</Title>
                </Body>
            </Header>
            <Content>
                {(this.props.flag === 'layout') ? <View>
                    {this.renderItems()}
                </View> : this.renderSaws()}
            </Content>
            <Footer>
                <FooterTab style={{backgroundColor: "#333"}}>
                    <Button vertical>
                        <Icon name="paper"/>
                        <Text>Підтвердити</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    }
}

export default ModalInner;
