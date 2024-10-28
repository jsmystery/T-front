import Products from '@/components/screens/secure/admin/Products'
import Sidebar from '@/components/screens/secure/admin/Sidebar'


const UsersPage = () => {
  return (
		<div className="flex">
      <Sidebar />     
    <div className="p-4">
      <Products />
    </div>
    </div>

  )
}

export default UsersPage