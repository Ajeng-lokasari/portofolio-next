import FormKontak from "@/components/FormKontak";
import Kartu from "@/components/Kartu";

export const metadata = {
  title: "Kontak",
  description: "Hubungi Ajeng Candra Lokasari melalui form kontak, email, atau GitHub.",
};

export default function Kontak() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-utama dark:text-sky-200 md:text-4xl">Hubungi Saya</h1>
        <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
          Punya pertanyaan atau ingin bekerja sama? Isi form berikut.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Kartu>
            <FormKontak />
          </Kartu>
        </div>

        <div>
          <Kartu>
            <h2 className="text-xl font-bold text-utama dark:text-sky-200">Temukan Saya di</h2>
            <div className="mt-3 flex flex-col space-y-2 text-red-700">
              <a
                href="https://github.com/Ajeng-lokasari"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
              <a
                href="mailto:butterflydark13@gmail.com"
                className="break-all hover:underline"
              >
                butterflydark13@gmail.com
              </a>
            </div>
          </Kartu>
        </div>
      </div>
    </main>
  );
}