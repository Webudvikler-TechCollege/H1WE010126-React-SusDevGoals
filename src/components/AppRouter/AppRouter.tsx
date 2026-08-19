import { Routes, Route } from 'react-router-dom'
import { HomePage } from '../../pages/HomePage/HomePage'
import { FaqPage } from '../../pages/FaqPage/FaqPage'
import { ErrorPage } from '../../pages/ErrorPage/ErrorPage'
import { GoalDetailPage } from '../../pages/GoalDetailsPage/GoalDetailPage'
import { EducationPage } from '../../pages/EducationPage/EducationPage'
import { CustomGoalPage } from '../../pages/CustomGoalPage/CustomGoalPage'
import { ContactPage } from '../../pages/ContactPage/ContactPage'
import { LoginPage } from '../../pages/LoginPage/LoginPage'

export const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="/goal/:goal_id" element={<GoalDetailPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/customgoal" element={<CustomGoalPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}