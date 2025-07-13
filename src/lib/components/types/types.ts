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

export interface Project {
	id: string;
	title: string;
	description: string;
	technologies: string[];
	imageUrl: string;
	githubUrl?: string;
	liveUrl?: string;
	startDate: string; // ISO date string, e.g. "2024-01-01"
	endDate?: string; // ISO date string, optional
}
