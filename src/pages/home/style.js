import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
  padding-top: 59px;
`

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .banner-img {
      width: 625px;
      height: 270px;
  }
`
export const HomeRight = styled.div`
  padding-top: 30px;
  float: right;
`

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
`

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  width: 115px;
  margin: 8px 10px 0 0;
  padding-right: 8px;
  box-sizing: border-box;
  line-height: 32px;
  background:#f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  .topic-pic {
      display: block;
      float: left;
      width: 30px;
      height: 30px;
      margin-top: 1px;
      padding-right: 16px;
  }
`
export const ListWrapper = styled.div`
  width: 625px;
  float: left;
  a {
    text-decoration: none;
  }
`

export const ListItem = styled.div`
  position: relative;
  padding: 15px 167px 20px 0;
  h3 {
    color: #333;
    font-size: 18px;
    font-weight: 700;
    border-bottom: none;
    
    :hover {
      text-decoration: underline;
    }
  }
  .pic {
    position: absolute;
    right: 0;
    top: 0;
    display: block;
    width: 150px;
    height: 100px;
    float: right;
    border-radius: 4px;
  }
  .detail {
    margin: 8px 0;
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`

export const SeeMoreBtn = styled.a`
  display: block;
  height: 40px;
  box-sizing: border-box;
  font-size: 15px;
  color: #fff;
  line-height: 40px;
  text-align: center;
  margin: 30px 0 60px 0;
  margin-right: 0;
  background: #a5a5a5;
  border-radius: 20px;
  cursor:pointer
`

export const ReacommendWrapper = styled.div`
  overflow: hidden;
`

export const ReacommendItem = styled.div`
  width: 280px;
  height: 50px;
  margin-bottom: 6px;
  background: #fff;
  img {
    width: 100%;
    height: 100%;
  }
`

export const WriterWrapper = styled.div`
  padding-top: 15px;
  .WriterWraTop {
    display: flex;
    justify-content:  space-between;
    font-size: 14px;
    color: #969696;
  }
`
export const WriterItem = styled.li`
  display: flex;
  width: 280px;
  margin-top: 10px;
  align-items: center;
  justify-content:space-between;
  .writer-img {
    width: 48px;
    height: 48px;
  }
  .writer-pic {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .writer-detail {
    width: 178px;
    padding-left: 12px;
    font-size: 12px;
    color: #969696;
    span {
      display: block;
      height: 50%;
      padding: 3px 0 3px 0;
    }
  }
  .writer-detail-name {
    font-size: 14px;
    color: #333;
  }
  .follow {
    display: inline-block;
    height: 48px;
    box-sizing: border-box;
    padding-top: 8px;
    font-size: 13px;
    color: #42c02e;
  }
`

export const WriterBtn = styled.div`
  .iconfont {
    height: 18px;
    line-height: 18px;
    margin-right: 5px;
  }
`

export const WriterSeeMoreBtn = styled.button`
  width: 280px;
  height: 35px;
  padding: 7px 7px 7px 12px;
  font-size: 13px;
  color: #787878;
  border: none;
  outline: none;
  background: #f7f7f7;
`
export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  box-shadow: 0 0 0 1px #bbb;
  cursor: Pointer;
  i {
    position: absolute;
    left: 50%;
    margin-left: -20px;
    font-size: 40px;
    transform: rotate(-90deg);
    transform-origin: center center;
  }
`