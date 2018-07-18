import React from 'react';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
const  HeaderApp  =  ( { headerText } ) => {
    return (
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>{headerText}</Title>
          </Body>
          <Right />
        </Header>
    );
}

export default HeaderApp;