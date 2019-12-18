import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';

import Hearder from './common/hearder';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import DownLoadPage from './pages/download';

import { Gloablstyle } from './style';
import { IconFontStyle } from './static/fontIcon/iconfont';

function App() {
  return (
    <Provider store={store}>
      <IconFontStyle></IconFontStyle>
      <Gloablstyle></Gloablstyle>
      <BrowserRouter>
        <Hearder></Hearder>
        <Route path='/' exact component={Home} />
        <Route path='/detail/:id' exact component={Detail} />
        <Route path='/login' exact component={Login} />
        <Route path='/download' exact component={DownLoadPage} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
