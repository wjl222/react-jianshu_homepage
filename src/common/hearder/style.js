import styled from 'styled-components';
import logoPic from '../../static/img/logo.png'

export const NavWrapper = styled.nav` 
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  height: 59px;
  box-shadow: 0 1px 10px 1px #eee;
  &.hide {
    display: none;
  }
`

export const HeaderWrapper = styled.div`
  display: block;
  position: relative;
  height: 58px;
  width: 1440px;
  margin: auto;
  border-bottom: 1px solid #f0f0f0;
  background: #fff;
`

export const Logo = styled.div`
  position: absolute;
  top: 0;
  height: 58px;
  width: 100px;
  background: url(${logoPic});
  background-size: contain;
`

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  font-size: 17px;
  i {
      font-size: 20px;
  }
`
export const NavItem = styled.div`
  display: inline-block;
  height: 58px;
  padding: 0 15px;
  font-size: 17px;
  line-height: 58px;
  color: #333;
  box-sizing: border-box;
  cursor: default;
  &.active {
      color: #ea6f5a;
  }

  &.left {
    float: left;
    :hover {
      background: #eee
    }
}

  &.right {
      float: right;
      color: #969696
  }

   &.nav-search {
       float: left;
   }
   .iconfont {
       font-size: 17px;
       margin-right: 5px;
       vertical-align: middle;
   }
`;

export const NavSearchWrapper = styled.div`
  position: relative;
  float: left;
  width: fit-content;
  height: 100%;
  color: #666;
  margin-left: 25px;
  .zoom {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-10px,-50%);
    display: block;
    height: 16px;
    width: 16px;
    padding: 6px;
    border-radius: 50%;
  }

  .focusIcon {
    color: #fff;
    background: #999;
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 240px;
  height: 38px;
  padding: 0 34px 0 20px;
  margin-top: 10px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px; 
  background: #eee;
  font-size: 14px;
  color: #666;
  &.focus {
    width: 280px;
  }
  &.slide-enter {
    transition: all .2s ease-out;
 }
  &.slide-enter-active {
    transition: all .2s ease-out;
    width： 280px;
  }
  &.slide-exit {
    width： 280px;
    transition: all .2s ease-out;
 }
  &.slide-exit-active {
    width： 240px;
    transition: all .2s ease-out;
  }

`

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 58px;
  width: 240px;
  padding: 5px;
  padding-top: 15px;
  font-size: 13px;
  color: #989898;
  background: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  &::before {
    position: absolute;
    z-index: 2;
    content: '';
    left: 27px;
    top: 0;
    transform: translateY(-98%);
    width: 0px;
    height: 0px;
    border: 12px solid transparent;
    border-bottom-color: #fff;
  }
  span {
    padding-left: 10px;
  }
  .btn {
    position: relative;
    float: right;
    padding-right: 10px;
    padding-left: 20px;
  }
  .itemLine {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    padding-bottom: 5px;
  }
  .roll {
    position: absolute;
    left: 0;
    display: block;
    transition: all .2s ease-in-out;
    transform: rotate(90deg);
    transform-origin: center center;
    font-size: 14px;
  }

`

export const SearchInfoItem = styled.li`
  display: inline-block;
  list-style: none;
  word-wrap: nowrap;
  margin: 4px 4px;
  padding: 6px 6px;
  font-size: 10px;
  border: 1px solid #999;
`

export const Addtion = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`

export const HeaderBtn = styled.button`
  float: right;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 20px;
  height: 38px;
  font-size: 15px;
  border-radius: 19px
  border: 1px solid #ec6149;
  background: transparent;
  &.reg {
      color: #ec6149;
  }
  &.writting {
      color: #fff;
      background: #ec6149;
  }
`
