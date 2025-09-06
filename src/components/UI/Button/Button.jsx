import React from 'react'
import './Button.css'

export default function Button({
	children,
	variant = 'blue',
	disabled = false,
	onClick,
	href,
	style,
	className,
}) {
	const classNames = ['btn', variant, disabled ? 'disabled' : '']
		.filter(Boolean)
		.join(' ')

	if (href) {
		return (
			<a
				href={href}
				style={style}
				className={className}
				onClick={disabled ? e => e.preventDefault() : onClick}
			>
				{children}
			</a>
		)
	}

	return (
		<button
			style={style}
			className={classNames + ' ' + className}
			disabled={disabled}
			onClick={disabled ? undefined : onClick}
		>
			{children}
		</button>
	)
}
