import React, { PureComponent } from 'react';
import { DetailWrapperOut, DetailWrapper, DetailRight, DetailLeft, DetailContent } from './style';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actionCreator } from './store';

class Detail extends PureComponent {
    componentDidMount() {
        this.props.requestListData(this.props.match.params.id)
    }

    render() {
        const { title, contents } = this.props;

        return (
            <DetailWrapperOut>
                <DetailWrapper>
                    <DetailLeft>
                        <h1>{title}</h1>
                        <DetailContent dangerouslySetInnerHTML = {{ __html: contents }}/>
                    </DetailLeft>
                    <DetailRight>
                        右边
                </DetailRight>
                </DetailWrapper>
            </DetailWrapperOut>
        )
    }
}

const getState = (state) => ({
    title: state.getIn(['detail', 'title']),
    contents: state.getIn(['detail', 'contents'])
})

const getDispatch = (dispatch) => {
    return {
        requestListData(id) {
            dispatch( actionCreator.getListData(id) )
        }
    }
}

export default connect(getState, getDispatch)(withRouter(Detail));