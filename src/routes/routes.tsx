import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Layout from 'components/core/Layout'
import Dashboard from 'pages/Dashboard'
import FinancialMovement from 'pages/FinancialMovement'

const Routes: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/movimento/:type" exact component={FinancialMovement} />
      </Switch>
    </Layout>
  )
}

export default Routes
