import React, { PureComponent } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreaters } from './store';
import { LoginWrapper, LoginItem, Input, Button } from './style';

class Login extends PureComponent {
    render() {
        const { isLogin } = this.props;
        if (isLogin) {
            return <Redirect to='/' />
        } else {
            return (
                <LoginWrapper>
                    <Link to='/'>
                      <img className='logo-img' src='https://cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png' alt='' />
                    </Link>
                    <LoginItem>
                        <Input placeholder='账号' ref={(input) => { this.account = input }} />
                        <Input placeholder='密码' type='password' ref={(input) => { this.password = input }} />
                        <Button onClick={() => this.props.loginIn(this.account, this.password)}>提交</Button>
                    </LoginItem>
                </LoginWrapper>
            )
        }

    }
}

const mapState = (state) => ({
    isLogin: state.getIn(['login', 'isLogin'])
})

const mapDispatch = (dispatch) => ({
    loginIn(account, password) {
        dispatch(actionCreaters.login(account.value, password.value))
    }
})

export default connect(mapState, mapDispatch)(Login);