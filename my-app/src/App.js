import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutPage from './pages/about.js';
import PublicationsPage from './pages/publications.js';
import ContactPage from './pages/contact.js';



export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<AboutPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/publications" element={<PublicationsPage />} />
                    <Route path="/contact" element={<ContactPage />} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}