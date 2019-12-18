import styled from 'styled-components';


export const DownloadWrapper = styled.div`
  padding-top: 59px;
`

export const JianShulogoWrapper = styled.div`
  position: relative;
  z-index: -1;
  width: 960px;
  margin: auto;
  margin-top: 50px;
  padding: 0 15px;
  text-align: center;
  line-height: 1.42857;
  box-sizing: border-box;
  overflow: hidden;
  .background-img {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    width: 765px;
    height: 172px;
  }
  .phone-img {
    width: 410px;
    height: 314px;
  }
`

export const LogoImgSlogan = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  margin-bottom: 40px;
  .logo {
    width: 100px;
    height: 100px;
  }

`

export const Info = styled.div`
  display: inline-block;
  text-align: left;
  vertical-align: middle;
  margin-left: 20px;
  
  color: #333;
  .title {
    font-size: 30px;
    font-family: -apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
  }
  .slogan {
    font-weight: 300;
    font-size: 24px;
    font-family: -apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
  }
`

export const TopQrWrapper = styled.div`
  display: inline-block;
  width: fit-content;
  margin: 0 0 40px 40px;
  img {
    width: 140px;
    height: 140px;
    text-align: left;
  }
  .title {
    font-size: 24px;
    margin-top: 4px;
  }
  .description {
    
    font-size: 16px;
    font-weight: 300;
  }
`