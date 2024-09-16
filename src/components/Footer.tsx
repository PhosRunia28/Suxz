import { footerLinks } from 'src/data'

export default function Footer() {
	return (
		<footer className="container_section relative flex w-full flex-col justify-between gap-6 bg-white py-10 md:flex-row">
			<div className="flex flex-grow-[1] flex-col gap-5">
				<a href="/" className="flex items-center gap-2">
					<img src="/icon.svg" alt="icon" className="bg-cover bg-center" />
					<h2 className="text-2xl font-bold">Suxz</h2>
				</a>
				<p className="w-full max-w-xs leading-relaxed">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt
					ut labore et dolore.
				</p>
			</div>
			<div className="flex flex-grow-[2] flex-col justify-between gap-8 sm:flex-row">
				{footerLinks.map((footerLink, index) => (
					<div className="flex flex-col gap-6" key={index}>
						<h4 className="text-lg font-medium">{footerLink.title}</h4>
						<ul className="flex flex-col gap-4">
							{footerLink.links.map((link) => (
								<li className="">
									<a href={link.to} className="transition hover:text-primary">
										{link.linkName}
									</a>
								</li>
							))}
						</ul>
					</div>
				))}
				<div className="flex flex-col gap-6">
					<h4 className="text-lg font-medium">Contact</h4>
					<ul className="flex flex-col gap-4">
						<li className="flex items-center gap-3">
							<img src="/phone.svg" alt="phone" className="bg-cover bg-center" />
							<p className="text-sm text-primary">(021) 31048184</p>
						</li>
						<li className="flex items-center gap-3">
							<img src="/email.svg" alt="email" className="bg-cover bg-center" />
							<p className="text-sm text-primary">irham@suxz.com</p>
						</li>
						<li className="">
							<p className="w-full max-w-[15rem] leading-relaxed md:max-w-[10rem]">
								Jl. Narogong. Perum Cileungsi Elok Blok A No.5. Jakarta Selatan.12240.
							</p>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	)
}
