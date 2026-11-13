import Hero from "@/components/Hero";
import Kartu from "@/components/Kartu";
import SkillCard from "@/components/SkillCard";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar" },
];

const jadwalBelajar = [
  { hari: "Rabu", waktu: "19.00 - 20.00", kegiatan: "Membaca ulang modul" },
  { hari: "Sabtu", waktu: "16.00 - 21.00", kegiatan: "Mengerjakan tugas praktikum" },
  { hari: "Minggu", waktu: "19.30 - 20.30", kegiatan: "Menonton video dan menulis laporan" },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl space-y-8 px-4 py-10">
      {/* Bagian Atas (Foto & Nama) */}
      <Hero
        nama="Ajeng Candra Lokasari"
        tagline="Siswa kelas XI PPLG, calon Junior Web Developer di Kelas Industri UBIG."
      />

      {/* Bagian Tentang Saya */}
      <Kartu judul="Tentang Saya">
        <p className="leading-relaxed text-gray-700">
          Saya siswa kelas XI jurusan PPLG yang senang mencoba hal baru di dunia teknologi dan desain. 
          Saya ingin bisa membuat website yang rapi dan bermanfaat untuk sekolah maupun masyarakat sekitar.
        </p>
      </Kartu>

      {/* Bagian Hobi & Cita-cita (2 Kolom Berdampingan) */}
      <div className="grid gap-6 md:grid-cols-2">
        <Kartu judul="Hobi">
          <ul className="list-disc space-y-1 pl-5 text-gray-700">
            <li>Mendesain poster dengan Canva</li>
            <li>Belajar pemrograman web</li>
            <li>Mendengarkan musik</li>
          </ul>
        </Kartu>

        <Kartu judul="Cita-cita">
          <p className="mb-3 text-gray-700">
            Menjadi orang sukses yang bermanfaat dan membawa dampak positif bagi sesama. Langkah yang saya lakukan:
          </p>
          <ol className="list-decimal space-y-1 pl-5 text-gray-700">
            <li>Tekun belajar dan mengasah skill pemrograman</li>
            <li>Menjalani Kelas Industri UBIG dengan maksimal</li>
            <li>Konsisten membuat proyek web yang berguna</li>
          </ol>
        </Kartu>
      </div>

      {/* Bagian Keahlian */}
      <Kartu judul="Keahlian">
        <div className="grid gap-4 md:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard key={skill.nama} nama={skill.nama} level={skill.level} />
          ))}
        </div>
      </Kartu>

      {/* Bagian Jadwal Belajar (Tabel) */}
      <Kartu judul="Jadwal Belajar">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm text-gray-700">
            <thead>
              <tr className="bg-utama text-white">
                <th className="p-3">Hari</th>
                <th className="p-3">Waktu</th>
                <th className="p-3">Kegiatan</th>
              </tr>
            </thead>
            <tbody>
              {jadwalBelajar.map((item, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-3 font-medium">{item.hari}</td>
                  <td className="p-3">{item.waktu}</td>
                  <td className="p-3">{item.kegiatan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Kartu>
    </main>
  );
}