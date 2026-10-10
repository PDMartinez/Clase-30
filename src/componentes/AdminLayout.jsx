
function AdminLayout({ children }) {
  return (
    <div>
      <aside>Menú de Administración</aside>
      <main>{children}</main>
    </div>
  );
}

export default AdminLayout;
