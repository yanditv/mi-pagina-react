export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <p className="text-center">
            &copy; {new Date().getFullYear()} - Todos los derechos reservados
          </p>
        </div>
      </footer>
    </>
  );
}
