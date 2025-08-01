import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Auth/Login'
import SignUp from './pages/Auth/SignUp'
import PrivateRoute from './routes/PrivateRoute'
import Dashboard from './pages/Admin/Dashboard'
import ManageTasks from './pages/Admin/ManageTasks'
import CreateTask from './pages/Admin/CreateTask'
import UserDashboard from './pages/User/UserDashboard'
import ManageUsers from './pages/Admin/ManageUsers'
import MyTasks from './pages/User/MyTasks'
import ViewTaskDetails from './pages/User/ViewTaskDetails'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        {/* Admin routes */}
        <Route element={<PrivateRoute allowedRoles={['admin']} />} >
          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/admin/tasks' element={<ManageTasks />} />
          <Route path='/admin/create-task' element={<CreateTask />} />
          <Route path='/admin/users' element={<ManageUsers />} />
        </Route>
        {/* user routes */}
        <Route element={<PrivateRoute allowedRoles={['admin']} />} >
          <Route path='/user/dashboard' element={<UserDashboard />} />
          <Route path='/user/tasks' element={<MyTasks />} />

          <Route path='/user/tasks/:id' element={<ViewTaskDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App