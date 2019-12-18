import React, { PureComponent } from 'react';
import { DownloadWrapper, JianShulogoWrapper, LogoImgSlogan, Info, TopQrWrapper } from './style'

class DownLoadPage extends PureComponent {
  render() {
    return (
      <DownloadWrapper>
        <JianShulogoWrapper>
          <img className='background-img' src='https://cdn2.jianshu.io/assets/web/misc-background-2bd0f42d30ede727ef60751e6572e740.png' alt='' />
          <LogoImgSlogan>
            <img className='logo' src='https://cdn2.jianshu.io/assets/web/misc-logo-805143ddec2e594416e891df316a73a7.png' alt='' />
            <Info>
              <div className='title'>
                创作你的创作
              </div>
              <div className='slogan'>
                一个优质创作社区
              </div>
            </Info>
          </LogoImgSlogan>
          <img className='phone-img' src='https://cdn2.jianshu.io/assets/web/misc-phone-7dfef21cef3585139d67481fbeb3a488.png' alt='' />
          <TopQrWrapper>
            <img src='https://cdn2.jianshu.io/assets/web/download-apps-page-top-qrcode-92108f625f507613863b730c74ebf235.png' alt='' />
            <div className='title'>
              扫码下载简书App
            </div>
            <div className='description'>
              随时随地发现和创作内容
            </div>
          </TopQrWrapper>
        </JianShulogoWrapper>
      </DownloadWrapper>
    )
  }
}

export default DownLoadPage;