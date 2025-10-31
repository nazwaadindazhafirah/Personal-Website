export default function Contact() {
	return (
		<section id="contact" className="space-y-6">
			<h3 className="text-sm uppercase tracking-wider font-medium text-zinc-500 dark:text-zinc-300">
				Contact
			</h3>

			<p className="text-zinc-800 dark:text-zinc-200">
				Jangan ragu untuk menghubungi saya jika ingin berdiskusi tentang teknologi, bekerja sama dalam proyek, 
				atau membutuhkan bantuan dalam bidang pemrograman maupun jaringan.
				Saya terbuka untuk kolaborasi dan berbagi pengetahuan.
			</p>

			<div className="flex gap-x-6 mt-6 flex-col md:flex-row gap-y-2">
				<span className="text-zinc-500 dark:text-zinc-300">
					zhafirahnazwaadinda@gmail.com
				</span>

				<a
					href="https://www.instagram.com/nazwaazhf?igsh=a2Y4YXgzZ3Jsd2l2&utm_source=qr"
					target="_blank"
					rel="noopener noreferrer"
					className="text-zinc-500 dark:text-zinc-300 flex items-center gap-x-2.5 hover:text-pink-500 transition-colors"
				>
					{/* === Logo Instagram SVG === */}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="w-5 h-5"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M7.5 2.25h9A5.25 5.25 0 0 1 21.75 7.5v9a5.25 5.25 0 0 1-5.25 5.25h-9A5.25 5.25 0 0 1 2.25 16.5v-9A5.25 5.25 0 0 1 7.5 2.25z"
						/>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M16.125 7.875h.007v.008h-.007v-.008zM12 9.75a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5z"
						/>
					</svg>

					Instagram
				</a>
			</div>
		</section>
	);
}
