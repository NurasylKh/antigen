import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Courses } from './pages/Courses'
import { Knowledge } from './pages/Knowledge'
import { Reviews } from './pages/Reviews'
import { Contacts } from './pages/Contacts'


export const RoutesConfig = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/about' element={<About />} />
			<Route path='/courses' element={<Courses />} />
			<Route path='/knowledge' element={<Knowledge />} />
			<Route path='/reviews' element={<Reviews />} />
			<Route path='/contacts' element={<Contacts />} />
			
		</Routes>
	)
}
