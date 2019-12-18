import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import { ListWrapper, ListItem, SeeMoreBtn } from '../style';
import { actionCreator } from '../store';
import { Link } from 'react-router-dom'

class List extends PureComponent {

    render() {
        const { article, getMoreListInfo, page } = this.props;
        console.log(article)
        return (
            <ListWrapper>
                {
                    article.map((item, index) => {
                        return (
                            <Link key = { index } to={ '/detail/' + item.get('id') }>
                                <ListItem>
                                    <h3>{item.get('title')}</h3>
                                    <p className='detail'>{item.get('desc')}</p>
                                    <img className='pic' src={item.get('imgUrl')} alt='' />
                                </ListItem>
                            </Link>
                        )
                    })
                }
                <SeeMoreBtn onClick={() => getMoreListInfo(page)}>
                    阅读更多
                </SeeMoreBtn>
            </ListWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        article: state.getIn(['home', 'article']),
        page: state.getIn(['home', 'page'])
    }
}

const mapDispatch = (dispatch) => {
    return {
        getMoreListInfo(page) {
            dispatch(actionCreator.getMoreListInfo(page))
        }
    }
}

export default connect(mapStateToProps, mapDispatch)(List)