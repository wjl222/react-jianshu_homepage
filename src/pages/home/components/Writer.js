import React, { PureComponent } from 'react';
import { WriterWrapper, WriterItem, WriterBtn, WriterSeeMoreBtn } from '../style';

class Writer extends PureComponent {
    render() {
        return (
            <WriterWrapper>
                <div className="WriterWraTop">
                    <span>
                        推荐作者
                    </span>
                    <WriterBtn>
                        <i className='iconfont'>&#xe61d;</i>
                        <span>换一批</span>
                    </WriterBtn>
                </div>
                <ul>
                    <WriterItem>
                        <span className='writer-img'><img className='writer-pic' src='https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp' alt='' /></span>
                        <div className="writer-detail">
                            <span className="writer-detail-name">董克平日记</span>
                            <span>写了779.1k字 · 2.4k喜欢</span>
                        </div>
                        <span className='follow'>
                            <i className="iconfont">&#xe617;</i>
                            关注
                        </span>
                    </WriterItem>
                    <WriterItem>
                        <span className='writer-img'><img className='writer-pic' src='https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp' alt='' /></span>
                        <div className="writer-detail">
                            <span className="writer-detail-name">董克平日记</span>
                            <span>写了779.1k字 · 2.4k喜欢</span>
                        </div>
                        <span className='follow'>
                            <i className="iconfont">&#xe617;</i>
                            关注
                        </span>
                    </WriterItem>
                    <WriterItem>
                        <span className='writer-img'><img className='writer-pic' src='https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp' alt='' /></span>
                        <div className="writer-detail">
                            <span className="writer-detail-name">董克平日记</span>
                            <span>写了779.1k字 · 2.4k喜欢</span>
                        </div>
                        <span className='follow'>
                            <i className="iconfont">&#xe617;</i>
                            关注
                        </span>
                    </WriterItem>
                    <WriterItem>
                        <span className='writer-img'><img className='writer-pic' src='https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp' alt='' /></span>
                        <div className="writer-detail">
                            <span className="writer-detail-name">董克平日记</span>
                            <span>写了779.1k字 · 2.4k喜欢</span>
                        </div>
                        <span className='follow'>
                            <i className="iconfont">&#xe617;</i>
                            关注
                        </span>
                    </WriterItem>
                    <WriterItem>
                        <span className='writer-img'><img className='writer-pic' src='https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp' alt='' /></span>
                        <div className="writer-detail">
                            <span className="writer-detail-name">董克平日记</span>
                            <span>写了779.1k字 · 2.4k喜欢</span>
                        </div>
                        <span className='follow'>
                            <i className="iconfont">&#xe617;</i>
                            关注
                        </span>
                    </WriterItem>
                </ul>
                <WriterSeeMoreBtn>
                    查看全部
                    <i className="iconfont">&#xe611;</i>
                </WriterSeeMoreBtn>
            </WriterWrapper>
        )
    }
}

export default Writer