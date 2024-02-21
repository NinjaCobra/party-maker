import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Error,
  Layout,
  Home,
  Cocktails,
  RandomCocktail,
  SingleCocktail,
  SinglePageError,
  CocktailsByIngredient,
  CocktailsByLetter,
} from "./pages";

import {
  singleCocktailLoader,
  randomCocktailLoader,
  getCocktailsByIngredientLoader,
  getCocktailsByLetterLoader,
  cocktailsLoader,
} from "./utils";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "cocktails",
        element: <Cocktails />,
        errorElement: <SinglePageError />,
        loader: cocktailsLoader(queryClient),
      },
      {
        path: "cocktail/:id",
        element: <SingleCocktail />,
        errorElement: <SinglePageError />,
        loader: singleCocktailLoader(queryClient),
      },
      {
        path: "whynot",
        element: <RandomCocktail />,
        errorElement: <SinglePageError />,
        loader: randomCocktailLoader(queryClient),
      },
      {
        path: "ingredient/:ingredient",
        element: <CocktailsByIngredient />,
        errorElement: <SinglePageError />,
        loader: getCocktailsByIngredientLoader(queryClient),
      },
      {
        path: "letter/:letter",
        element: <CocktailsByLetter />,
        errorElement: <SinglePageError />,
        loader: getCocktailsByLetterLoader(queryClient),
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
