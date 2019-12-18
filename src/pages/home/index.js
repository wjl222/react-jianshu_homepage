import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
import List from './components/List';
import Topic from './components/Topic';
import Writer from './components/Writer';
import Reacommend from './components/Reacommend';
import { actionCreator } from './store';

class Home extends Component {
    componentDidMount() {
        this.props.handleDataRequest();
        this.bindEvent()
    }

    componentWillUnmount() {
        window.removeEventListener('scroll',this.props.handleScrollBtnShow)
    }

    bindEvent() {
        window.addEventListener('scroll',this.props.handleScrollBtnShow)
    }

    handleScrollTop() {
        window.scrollTo(0, 0);
    }

    render() {
        const { isScroll } = this.props;
        return (
            <div>
                <HomeWrapper>
                    <HomeLeft>
                        <img className='banner-img' src='https://upload.jianshu.io/admin_banners/web_images/4824/066b16f3ca11cfb4f2a47b0ecc53010e0e5e5e95.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' alt='' />
                        <Topic>topic</Topic>
                        <List></List>
                    </HomeLeft>
                    <HomeRight>
                        <Reacommend></Reacommend>
                        <Writer></Writer>
                    </HomeRight>
                    {isScroll ? <BackTop onClick = { this.handleScrollTop }><i className='iconfont'>&#xe611;</i></BackTop> : ''}
                </HomeWrapper>
            </div>
        )
    }
}

const mapState = (state) => ({
    isScroll: state.getIn(['home','isScroll'])
})

const mapDispathToProps = (dispatch) => ({
    handleDataRequest() {
        dispatch(actionCreator.handleReceivezzz())
    },

    handleScrollBtnShow() {
        if(document.documentElement.scrollTop > 100) {
            dispatch(actionCreator.handleScrollShow(true))
        }else {
            dispatch(actionCreator.handleScrollShow(false))
        }
    }
})

export default connect(mapState,mapDispathToProps)(Home);
