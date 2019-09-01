import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import AppSW from './components/AppSW'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<AppSW />, document.getElementById('root'))
registerServiceWorker()
