import { RouterProvider } from "react-router";
import { appRouter } from "./app.router";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Toaster } from "sonner";
import { checkAuthAction } from "./auth/actions/check-auth.action";
import type { PropsWithChildren } from "react";
import { CustomFullScreenLoading } from "./components/custom/CustomFullScreenLoading";

const queryClient = new QueryClient();

const CheckAuthProvider = ({ children }: PropsWithChildren) => {
  const { data, isLoading } = useQuery({
    queryKey: ["auth"],
    queryFn: checkAuthAction,
    retry: false, // para que no vuelva a hacer el intento de la peticion.
    refetchInterval: 1000 * 60 * 1.5, // Revalidar cada hora y media cuando este usando la app
    refetchOnWindowFocus: true,
  });
  if (isLoading) return <CustomFullScreenLoading />;

  return children;
};

export const TesloShopApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <CheckAuthProvider>
        <RouterProvider router={appRouter} />
      </CheckAuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
