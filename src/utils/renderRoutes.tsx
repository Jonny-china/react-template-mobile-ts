import React from 'react'
import { Switch, Route } from 'react-router'
import { RouteConfig } from 'react-router-config'

function renderRoutes(
  routes: RouteConfig[],
  extraProps = {},
  switchProps = {}
) {
  return routes ? (
    <Switch {...switchProps}>
      {routes.map((route, i) => (
        <Route
          exact={route.exact}
          key={route.key || i}
          path={route.path}
          render={props => {
            // 设置页面标题
            document.title = route.title
            return route.render
              ? route.render({ ...props, ...extraProps, route })
              : route.component && (
                  <route.component {...props} {...extraProps} route={route} />
                )
          }}
          strict={route.strict}
        />
      ))}
    </Switch>
  ) : null
}

export default renderRoutes
