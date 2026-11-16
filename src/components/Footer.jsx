export default function Footer() {
  const tahun = new Date().getFullYear();
  return (
    <footer className="mt-auto bg-utama py-6 text-center text-center text-latar">
      <p>&copy; {tahun} Ajeng Candra Lokasari. Dibuat dengan Next.js saat Pra Magang di UBIG.</p>
    </footer>
  );
}