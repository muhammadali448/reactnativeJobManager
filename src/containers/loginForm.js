import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Content, Form, Item, Input, Label,
    Button, Text, Spinner
} from 'native-base';
import { emailChange, passwordChange, loginUser } from '../actions';
class LoginForm extends Component {

    onPressSubmit() {
        const { email, password } = this.props;
        this.props.loginUser( { email, password } );
    }

    renderText() {
        if (this.props.loading) {
           return <Spinner color='red'/>
        }
        return (<Text>Login</Text>);
    }

    render() {
        return (
            <Content>
                <Form>
                    <Item style={styles.userStyle}
                        floatingLabel>
                        <Label>Email</Label>
                        <Input onChangeText={
                            (text) => this.props.emailChange(text)}
                            value={this.props.email} />
                    </Item>
                    <Item style={styles.passwordStyle}
                        floatingLabel>
                        <Label>Password</Label>
                        <Input secureTextEntry
                            onChangeText={(text) => this.props.passwordChange(text)}
                            value={this.props.password} />
                    </Item>
                </Form>
                <Text style={styles.errorStyle}>
                    { this.props.error }
                </Text>
                <Button block style={styles.btnStyle}
                onPress={this.onPressSubmit.bind(this)}>
                    {this.renderText()}
                    
                </Button>
            </Content>
        );
    }
}

const styles = {
    userStyle: {
        marginLeft: 10,
        marginRight: 10
    },
    passwordStyle: {
        marginLeft: 10,
        marginRight: 10
    },
    btnStyle: {
        marginTop: 12,
        marginLeft: 30,
        marginRight: 30
    },
    errorStyle: {
        fontSize: 20,
        color: 'red',
        alignSelf: 'center'
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    }
}

export default connect(mapStateToProps, { emailChange, passwordChange, loginUser })(LoginForm);