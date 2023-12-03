import { type ComponentPropsWithoutRef, forwardRef } from 'react';

import { type VariantProps, cva } from '#app/utils/tailwind';

const buttonVariants = cva({
	base: [''],
	variants: {
		intent: {
			default: '',
			toolbar:
				'inline-flex items-center p-2 rounded-lg bg-violet-200 hover:bg-violet-300 active:bg-violet-400',
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
