import ReactDOM from 'react-dom/client'

import {App} from '@/components/App'
import {ErrorBoundary} from '@/components/ErrorBoundary'
import {ErrorFallback} from '@/components/ErrorBoundary/ErrorFallback'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <ErrorBoundary fallback={<ErrorFallback />}>
    <App />
  </ErrorBoundary>
)
