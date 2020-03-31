import React from 'react'
export default (file: string) => React.lazy(() => import(`../views/${file}`))
