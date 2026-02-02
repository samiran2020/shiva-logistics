import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  // Main routes
  {
    path: '/',
    lazy: async () => {
      const AppShell = await import('../src/components/app-shell')
      return { Component: AppShell.default }
    },
    errorElement: <></>,

    children: [
      {
        index: true,
        lazy: async () => ({
          Component: (await import('../src/page/home')).default,
        }),
      },
      {
        path: 'service',
        lazy: async () => ({
          Component: (await import('../src/page/service')).default,
        }),
      },
      
    ],
  }
])

export default router