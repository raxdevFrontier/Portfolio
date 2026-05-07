export type DividerColor =
	| 'primary'
	| 'secondary'
	| 'accent'
	| 'info'
	| 'success'
	| 'warning'
	| 'error'
	| 'neutral';

export interface DividerProps {
	text?: string;
	textPosition?: 'start' | 'end';
	color?: DividerColor;
}

export const colorClassMap: Record<DividerColor, string> = {
	primary: 'divider-primary',
	secondary: 'divider-secondary',
	accent: 'divider-accent',
	info: 'divider-info',
	success: 'divider-success',
	warning: 'divider-warning',
	error: 'divider-error',
	neutral: 'divider-neutral',
};

export const positionClassMap: Record<string, string> = {
	start: 'divider-start',
	end: 'divider-end',
};
