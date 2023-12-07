import { type ComponentPropsWithoutRef, forwardRef } from 'react';

import { type VariantProps, cva } from '#app/utils/tailwind';

const buttonVariants = cva({
	base: ['inline-flex items-center px-4 py-2 rounded-lg border'],
	variants: {
		intent: {
			default: 'bg-gray-200 hover:bg-gray-300 active:bg-gray-400',
			primary: 'bg-violet-200 hover:bg-violet-300 active:bg-violet-400',
			toolbar:
				'border-0 px-2 bg-violet-200 hover:bg-violet-300 active:bg-violet-400',
		},
	},
	defaultVariants: {
		intent: 'default',
	},
});

interface ButtonProps
	extends ComponentPropsWithoutRef<'button'>,
		VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, intent: kind, type = 'button', ...props }, ref) => {
		return (
			<button
				className={buttonVariants({ intent: kind, className })}
				type={type}
				ref={ref}
				{...props}
			/>
		);
	},
);
Button.displayName = 'Button';

export { Button };
