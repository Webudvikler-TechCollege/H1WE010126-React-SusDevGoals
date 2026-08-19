import { Routes, Route } from 'react-router-dom'
import { HomePage } from '../../pages/HomePage/HomePage'
import { FaqPage } from '../../pages/FaqPage/FaqPage'
import { ErrorPage } from '../../pages/ErrorPage/ErrorPage'

export const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>

    )
}