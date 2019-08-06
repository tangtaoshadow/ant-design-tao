import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';
import RendererWrapper0 from 'F:/java/antd-2/ant-design-tao/src/pages/.umi/LocaleWrapper.jsx';
import { routerRedux } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/login',
    component: require('../../layout/LoginLayout').default,
    routes: [
      {
        path: '/login',
        component: require('../propro/login').default,
        exact: true,
      },
      {
        component: () =>
          React.createElement(
            require('F:/java/antd-2/ant-design-tao/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    path: '/',
    component: require('../../layout/BasicLayout').default,
    routes: [
      {
        path: '/',
        component: require('../propro/home').default,
        exact: true,
      },
      {
        path: '/home',
        component: require('../propro/home').default,
        exact: true,
      },
      {
        path: '/login',
        component: require('../propro/login').default,
        exact: true,
      },
      {
        path: '/user/setting',
        component: require('../propro/user/setting').default,
        exact: true,
      },
      {
        path: '/test',
        component: require('../propro/test').default,
        exact: true,
      },
      {
        path: '/test1',
        component: require('../propro/test1').default,
        exact: true,
      },
      {
        path: '/puzzlecards',
        component: require('../propro/puzzlecards').default,
        exact: true,
      },
      {
        component: () =>
          React.createElement(
            require('F:/java/antd-2/ant-design-tao/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    component: () =>
      React.createElement(
        require('F:/java/antd-2/ant-design-tao/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: true },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen = () => {};

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    routeChangeHandler(history.location);
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return (
      <RendererWrapper0>
        <Router history={history}>{renderRoutes(routes, props)}</Router>
      </RendererWrapper0>
    );
  }
}
