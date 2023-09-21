import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

interface IQueryProvider {
  children: JSX.Element;
}

const queryClient = new QueryClient();

export default function ReactQueryProvider({ children }: IQueryProvider) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* {process.env.NODE_ENV === "development" && (
        <ReactQueryDevtools position="bottom-right" />
      )} */}
    </QueryClientProvider>
  );
}
