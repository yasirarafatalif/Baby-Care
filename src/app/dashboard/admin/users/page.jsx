import UsersTable from "@/Components/Items/UsersTable";
import { dbConnect } from "@/lib/bdConnect";


export default async function AdminUsersPage() {
  const users = await dbConnect("users").find().toArray();

  return (
    <div className="p-4 md:p-6">
      <UsersTable users={JSON.parse(JSON.stringify(users))} />
    </div>
  );
}
