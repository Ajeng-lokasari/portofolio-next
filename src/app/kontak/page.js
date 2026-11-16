import Kartu from "@/components/Kartu";

export const metadata = {
    title: "Kontak",
    description: "Hubungi Ajeng Candra Lokasari melalui form kontak, email, atau GitHub."
}

export default function Kontak() {
    return (
        <main className="mx-auto max-w-5xl px-4 py-10 space-y-6">
           
            <div>
                <h1 className="text-3xl font-bold text-utama md:text-4xl">Hubungi Saya</h1>
                <p className="mt-2 text-lg text-gray-700">Punya pertanyaan atau ingin bekerja sama? Isi form berikut.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                
                <div className="md:col-span-2">
                    <Kartu>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="nama" className="block font-semibold text-gray-800">
                                    Nama lengkap
                                </label>
                                <input 
                                    type="text" 
                                    id="nama" 
                                    name="nama" 
                                    placeholder="Contoh: Budi Santoso" 
                                    required 
                                    className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2 text-gray-800 focus:border-utama focus:outline-none" 
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block font-semibold text-gray-800">
                                    Email
                                </label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    placeholder="nama@gmail.com" 
                                    required 
                                    className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2 text-gray-800 focus:border-utama focus:outline-none" 
                                />
                            </div>

                            <div>
                                <label htmlFor="hp" className="block font-semibold text-gray-800">
                                    Nomor HP
                                </label>
                                <input 
                                    type="text" 
                                    id="hp" 
                                    name="hp" 
                                    placeholder="081234567890" 
                                    className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2 text-gray-800 focus:border-utama focus:outline-none" 
                                />
                            </div>

                            <div>
                                <label htmlFor="keperluan" className="block font-semibold text-gray-800">
                                    Keperluan
                                </label>
                                <select 
                                    id="keperluan" 
                                    name="keperluan" 
                                    className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2 text-gray-800 focus:border-utama focus:outline-none"
                                >
                                    <option value="">-- Pilih keperluan --</option>
                                    <option value="kerjasama">Kerja Sama / Proyek</option>
                                    <option value="tanya">Tanya Jawab</option>
                                    <option value="lainnya">Lainnya</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="pesan" className="block font-semibold text-gray-800">
                                    Pesan
                                </label>
                                <textarea 
                                    id="pesan" 
                                    name="pesan" 
                                    rows="4" 
                                    placeholder="Tulis pesanmu di sini" 
                                    className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2 text-gray-800 focus:border-utama focus:outline-none"
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                className="rounded-lg bg-red-700 px-5 py-2.5 font-semibold text-white transition hover:bg-red-800"
                            >
                                Kirim Pesan
                            </button>

                            
                        </form>
                    </Kartu>
                </div>

                <div>
                    <Kartu judul="Temukan Saya di">
                        <div className="space-y-3 text-sm">
                            <div>
                                <span className="block font-semibold text-red-700">GitHub</span>
                                <a 
                                    href="https://github.com/Ajeng-lokasari" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-gray-700 hover:underline"
                                >
                                    github.com/Ajeng-lokasari
                                </a>
                            </div>
                            <div>
                                <span className="block font-semibold text-red-700">Email</span>
                                <a 
                                    href="mailto:butterflydark13@gmail.com" 
                                    className="text-gray-700 hover:underline break-all"
                                >
                                    butterflydark13@gmail.com
                                </a>
                            </div>
                        </div>
                    </Kartu>
                </div>

            </div>
        </main>
    );
}