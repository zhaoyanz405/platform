import mainPage from '@/layout/mainPage'
import Login from '@/components/Login'

const routers = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/backend',
        component: mainPage
    }
]

export default routers
