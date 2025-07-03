export interface Experience {
	title: string;
	organization: string;
	organizationUrl?: string;
	location: string;
	date: string;
	description: string[];
	images: string[];
	orientation: 'left' | 'right';
	topText?: string;
	bottomText?: string;
}
