import { createGlobalStyle } from 'styled-components';

 export const IconFontStyle = createGlobalStyle`@font-face {font-family: "iconfont";
 src: url('./iconfont.eot?t=1575982204626'); /* IE9 */
 src: url('./iconfont.eot?t=1575982204626#iefix') format('embedded-opentype'), /* IE6-IE8 */
 url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
 url('./iconfont.woff?t=1575982204626') format('woff'),
 url('./iconfont.ttf?t=1575982204626') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
 url('./iconfont.svg?t=1575982204626#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}`