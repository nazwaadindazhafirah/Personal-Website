import Image from 'next/image';

export default function Projects() {
	return (
		<section id="projects" className="space-y-10 px-4 md:px-0">
			<h3 className="text-sm uppercase tracking-wide font-medium text-zinc-500 dark:text-zinc-300">
				projects
			</h3>

			{/* === PROYEK 1: Web Penjualan Skincare === */}
			<div className="flex flex-col md:flex-row gap-x-6 gap-y-6 items-start">
				<div className="w-full md:w-1/2">
					<Image
						alt="Web Penjualan Skincare"
						src="/nazwaazhfskincare.jpg"
						className="w-full h-auto rounded-3xl object-contain shadow-lg"
						width={1600}
						height={900}
						priority
					/>
				</div>

				<div className="w-full md:w-1/2">
					<h4 className="font-semibold text-lg text-zinc-800 dark:text-zinc-100 mb-3">
						Web Penjualan Skincare
					</h4>
					<p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
						Website penjualan skincare ini merupakan sistem yang dirancang untuk mempermudah 
						pengelolaan data produk kecantikan secara digital. Aplikasi ini memiliki fitur utama seperti
						pencatatan stok produk, pengaturan harga, laporan transaksi, serta manajemen pengguna.
						Dengan tampilan bertema pink pastel yang lembut, website ini menghadirkan pengalaman
						visual yang menarik dan sesuai dengan identitas brand kecantikan. Sistem dikembangkan
						menggunakan HTML, CSS, PHP, dan MySQL untuk memastikan kemudahan penggunaan
						serta efisiensi dalam mengelola data penjualan.
					</p>
					<div className="flex flex-wrap gap-2 mt-3">
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded text-zinc-600 dark:text-zinc-300 text-xs">
							web
						</span>
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded text-zinc-600 dark:text-zinc-300 text-xs">
							penjualan
						</span>
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded text-zinc-600 dark:text-zinc-300 text-xs">
							skincare
						</span>
					</div>
				</div>
			</div>

			{/* === PROYEK 2: Kanaya Jaya Mobil === */}
			<div className="flex flex-col md:flex-row gap-x-6 gap-y-6 items-start">
				<div className="w-full md:w-1/2">
					<Image
						alt="Kanaya Jaya Mobil"
						src="/kanaya.jpg"
						className="w-full h-auto rounded-3xl object-contain shadow-lg"
						width={1600}
						height={900}
					/>
				</div>

				<div className="w-full md:w-1/2">
					<h4 className="font-semibold text-lg text-zinc-800 dark:text-zinc-100 mb-3">
						Website Kanaya Jaya Mobil
					</h4>
					<p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
						Website Kanaya Jaya Mobil adalah platform dealer mobil bekas terpercaya yang menyediakan
						informasi lengkap mengenai mobil bekas berkualitas dengan harga terjangkau. Website ini
						menampilkan profil perusahaan, sejarah singkat, visi dan misi, serta galeri showroom mobil
						yang tersedia. Tampilan website dibuat profesional dengan kombinasi warna kuning dan hitam
						yang mencerminkan identitas brand. Sistem dikembangkan menggunakan HTML, CSS, dan
						JavaScript untuk memberikan pengalaman pengguna yang responsif dan menarik.
					</p>
					<div className="flex flex-wrap gap-2 mt-3">
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded text-zinc-600 dark:text-zinc-300 text-xs">
							web
						</span>
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded text-zinc-600 dark:text-zinc-300 text-xs">
							dealer
						</span>
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded text-zinc-600 dark:text-zinc-300 text-xs">
							mobil bekas
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}
