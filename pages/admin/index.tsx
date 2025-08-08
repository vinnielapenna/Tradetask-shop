import { useSession } from 'next-auth/react';
import AdminVouchTable from '../../components/AdminVouchTable';

export default function AdminDashboard() {
  const { data: session } = useSession();
  const isAdmin = (session?.user as any)?.email === 'admin@tradetaskjobs.com'; // temporary check

  if (!isAdmin) return <p>Unauthorized</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <AdminVouchTable />
    </div>
  );
}
