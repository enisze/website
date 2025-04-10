export const Heading = ({ children }: { children: React.ReactNode }) => (
	<div className='flex flex-col py-16'>
		<h1 className='text-5xl font-bold '>{children}</h1>
		<div className='pt-1 h-1 w-16 bg-primary rounded-full' />
	</div>
)
