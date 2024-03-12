import { Routes, Route } from "react-router-dom"
import { Main } from "./pages/Main/index";
import { NotFound } from "./pages/404";
import { Products } from "./pages/Products/index";
import { Industry } from "./pages/Industry";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/product/:id" element={<Products />}/>
            <Route path="/industry/:id" element={<Industry />}/>
            {/* <Route path="*" element={<NotFound />} />
            <Route path="/404" element={<NotFound />} /> */}
        </Routes>
    )
}