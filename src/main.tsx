import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "@/MyComponents/State/Store.ts";
import {BrowserRouter} from "react-router-dom";
import HomePage from "@/App.tsx";



ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter >
          <HomePage />
    </BrowserRouter>

  </Provider>
);













// const router = createBrowserRouter([
//   {
//     path: "/",
//     index: true,
//     element: <HomePage />,
//   },
//   {
//     path: "/Honoray",
//     element: <Honoray />,
//   }
// ]);