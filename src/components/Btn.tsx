import { cn } from '@utils/util'

type BtnProps = {
	outline?: boolean
	muted?: boolean
	className?: string
	children: React.ReactNode
	to: string
}

export default function Btn({ outline, muted, className, children, to }: BtnProps) {
	return (
		<a
			href={to}
			className={cn(
				`inline-block rounded-lg border border-primary bg-primary px-6 py-2 text-white transition hover:bg-white hover:text-primary`,
				{
					'border-white bg-gray-100 text-gray-500 hover:bg-gray-100 hover:text-primary': muted,
					'border-white bg-white text-primary hover:border-primary hover:bg-white': outline
				},
				className
			)}
		>
			{children}
		</a>
	)
}
