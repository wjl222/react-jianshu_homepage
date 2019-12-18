import React, { PureComponent } from 'react';
import { ReacommendWrapper, ReacommendItem } from '../style';
import { connect } from 'react-redux';

class Reacommend extends PureComponent {

    render() {
        return (
            <ReacommendWrapper>
                {
                    this.props.reacommendImgUrl.map((item) => {
                        return (
                            <ReacommendItem key= {item.get('id')}>
                                <img src= {item.get('imgUrl')} alt="" />
                            </ReacommendItem>
                        )
                    })
                }
            </ReacommendWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        reacommendImgUrl: state.getIn(['home','reacommendImgUrl'])
    }
}

export default connect(mapStateToProps, null)(Reacommend)