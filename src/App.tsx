
import React, { Suspense } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
const Home = React.lazy(() => import('./pages/home'));


const Loading = <div>loading...</div>

function AppRouter() {
  return (
    <Switch>
      {/* 录制 */}
      <Route exact path="/">

        <Suspense fallback={Loading}>
          <Home />
        </Suspense>
      </Route>
    </Switch>
  )
}

function App() {
  return (
    <Router>
      <AppRouter />
    </Router>
  )
}

export default App
