import dva from 'dva';
import { Component } from 'react';
import createLoading from 'dva-loading';
import history from '@tmp/history';

let app = null;

export function _onCreate() {
  const plugins = require('umi/_runtimePlugin');
  const runtimeDva = plugins.mergeConfig('dva');
  app = dva({
    history,
    
    ...(runtimeDva.config || {}),
    ...(window.g_useSSR ? { initialState: window.g_initialData } : {}),
  });
  
  app.use(createLoading());
  (runtimeDva.plugins || []).forEach(plugin => {
    app.use(plugin);
  });
  
  app.model({ namespace: 'console', ...(require('F:/java/antd-2/ant-design-tao/src/models/console.js').default) });
app.model({ namespace: 'language', ...(require('F:/java/antd-2/ant-design-tao/src/models/language.js').default) });
app.model({ namespace: 'login', ...(require('F:/java/antd-2/ant-design-tao/src/models/login.js').default) });
app.model({ namespace: 'public_library_id_detail', ...(require('F:/java/antd-2/ant-design-tao/src/models/public_library_id_detail.js').default) });
app.model({ namespace: 'public_library_update', ...(require('F:/java/antd-2/ant-design-tao/src/models/public_library_update.js').default) });
app.model({ namespace: 'public_library', ...(require('F:/java/antd-2/ant-design-tao/src/models/public_library.js').default) });
app.model({ namespace: 'puzzlecards', ...(require('F:/java/antd-2/ant-design-tao/src/models/puzzlecards.js').default) });
app.model({ namespace: 'standard_library_id_detail', ...(require('F:/java/antd-2/ant-design-tao/src/models/standard_library_id_detail.js').default) });
app.model({ namespace: 'standard_library', ...(require('F:/java/antd-2/ant-design-tao/src/models/standard_library.js').default) });
  return app;
}

export function getApp() {
  return app;
}

export class _DvaContainer extends Component {
  render() {
    const app = getApp();
    app.router(() => this.props.children);
    return app.start()();
  }
}
