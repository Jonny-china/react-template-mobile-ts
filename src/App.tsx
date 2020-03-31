import React, { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import routes from './router'
import renderRoutes from './utils/renderRoutes'
import Loading from './components/Loading'

const App: React.FC = () => (
  <Router>
    <Suspense fallback={<Loading />}>{renderRoutes(routes)}</Suspense>
  </Router>
)

export default App
