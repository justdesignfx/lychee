import { ReactElement } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5 * 60 * 1000,
    },
  },
})

type Props = {
  children: ReactElement
}

const WithReactQuery = ({ children }: Props) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default WithReactQuery
