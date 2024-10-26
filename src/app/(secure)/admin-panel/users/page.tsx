import Users from '@/components/screens/secure/admin/Users' // Import Users component
import Sidebar from '@/components/screens/secure/admin/Sidebar'


const UsersPage = () => {
  return (
		<div className="flex">
      <Sidebar />     
    <div className="p-4">
      <Users />
    </div>
    </div>

  )
}

export default UsersPage