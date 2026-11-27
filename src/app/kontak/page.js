import FormKontak from "@/components/FormKontak";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Kontak",
  description: "Hubungi Ajeng Candra Lokasari melalui form kontak, email, atau GitHub.",
};

export default function Kontak() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary md:text-4xl">Hubungi Saya</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Punya pertanyaan atau ingin bekerja sama? Isi form berikut.
        </p>
      </div>

      {/* Pembungkus grid agar form dan info kontak tersusun rapi berdampingan */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardContent className="pt-6">
            <FormKontak />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">Temukan Saya di</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://github.com/Ajeng-lokasari" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-aksen hover:underline"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="mailto:darkbutterfly13@gmail.com" 
                  className="text-aksen hover:underline"
                >
                  darkbutterfly13@gmail.com
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}