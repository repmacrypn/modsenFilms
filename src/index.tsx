import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'

import {App} from '@/components/App'
import {ErrorBoundary} from '@/components/ErrorBoundary'
import {ErrorFallback} from '@/components/ErrorBoundary/ErrorFallback'
import {store} from '@/store/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <ErrorBoundary
    fallback={
      <ErrorFallback>Something went wrong, please reload the page...</ErrorFallback>
    }
  >
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>
)
