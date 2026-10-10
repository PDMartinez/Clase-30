
function PublicLayout({ children }) {
  return (
    <div>
      <header>Encabezado Público</header>
      {children}
      <footer>Pie de página Público</footer>
    </div>
  );
}

export default PublicLayout;
