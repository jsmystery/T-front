import Brands from '@/components/screens/secure/admin/Brands' // Import Users component
import Sidebar from '@/components/screens/secure/admin/Sidebar'


const UsersPage = () => {
  return (
		<div className="flex">
      <Sidebar />     
    <div className="p-4">
      <Brands />
    </div>
    </div>

  )
}

export default UsersPage