import React, { PureComponent } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreator } from './store';
import { actionCreaters as loginActionCreaters } from '../../pages/login/store'
import { Link, withRouter } from 'react-router-dom';

import {
    NavWrapper,
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoItem,
    Addtion,
    HeaderBtn
} from './style';

const getSearchInfo = (props) => {
    const { focus, mouseIn, historyList, page, totelPage, SearchOnMouseEnter, SearchOnMouseOut, changePage } = props;
    const newList = [];
    for (let i = (page - 1) * 10; i < (page) * 10; i++) {
        newList.push(<SearchInfoItem key={i}>{historyList[i]}</SearchInfoItem>)
    }
    if (focus || mouseIn) {
        return (
            <SearchInfo onMouseEnter={() => { SearchOnMouseEnter() }} onMouseLeave={() => { SearchOnMouseOut() }} >
                <span>热门搜索</span>
                <div className='btn'
                    onClick={() => changePage(page, totelPage)}
                >
                    <i className="iconfont roll">&#xe61d;</i>
                    换一批
                </div>
                <div className="itemLine">
                    {newList}
                </div>
            </SearchInfo>
        )
    } else {
        return
    }
}

class Header extends PureComponent {

    render() {
        const { historyList, focus, handleOnFocus, handleOnBlur, isLogin, location } = this.props;
        return (
            
            <NavWrapper className={location.pathname === '/login' ? 'hide' : ''}>
                <HeaderWrapper >
                    <Link to='/'>
                        <Logo />
                    </Link>

                    <Nav>
                        <Link to='/'>
                            <NavItem 
                              className={location.pathname === '/' ? 'left active' : 'left'}
                            >
                                <i className="iconfont homepage">&#xe627;</i>
                                首页
                        </NavItem>
                        </Link>
                        <Link to='download'>
                            <NavItem
                            className={location.pathname === '/download' ? 'left active' : 'left'}
                            >
                                <i className="iconfont">&#xe609;</i>
                                下载App
                            </NavItem>
                        </Link>


                        <NavSearchWrapper>
                            <CSSTransition
                                in={focus}
                                timeout={400}
                                classNames='slide'
                            >
                                <NavSearch
                                    className={focus ? 'focus' : ''}
                                    onFocus={() => handleOnFocus(historyList)}
                                    onBlur={handleOnBlur}
                                />
                            </CSSTransition>
                            <i className={focus ? 'focusIcon iconfont zoom' : 'iconfont zoom'}>&#xe631;</i>
                            {getSearchInfo(this.props)}
                        </NavSearchWrapper>

                        {
                            isLogin ? <NavItem onClick={this.props.loginout} className="right">退出</NavItem> :
                                <Link to='/login'><NavItem className="right">登录</NavItem></Link>
                        }

                        <NavItem className='right'><i className="iconfont">&#xe636;</i></NavItem>
                    </Nav>
                    <Addtion>
                        <HeaderBtn className='reg'>写文章</HeaderBtn>
                        <HeaderBtn className='writting'>注册</HeaderBtn>
                    </Addtion>
                </HeaderWrapper>
            </NavWrapper>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        focus: state.getIn(['header', 'focus']),
        historyList: state.getIn(['header', 'historyList']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        totelPage: state.getIn(['header', 'totelPage']),
        page: state.getIn(['header', 'page']),
        isLogin: state.getIn(['login', 'isLogin'])
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        handleOnFocus(list) {
            list.size === 0 && dispatch(actionCreator.getListData())
            dispatch(actionCreator.onFocusAction())
        },
        handleOnBlur() {
            console.log('jjjjjjjjjjjjj')
            dispatch(actionCreator.onBlurAction())
        },
        SearchOnMouseEnter() {
            dispatch(actionCreator.onMouseEnter())
        },
        SearchOnMouseOut() {
            dispatch(actionCreator.onMouseOut())
        },
        changePage(page, totelPage) {
            if (page < totelPage) {
                page++
            } else if (page === totelPage) {
                page = 1
            }
            dispatch(actionCreator.changePage(page))
        },
        loginout() {
            dispatch(loginActionCreaters.loginout())
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispathToProps)(Header))
