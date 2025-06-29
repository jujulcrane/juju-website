export interface ArtPiece {
	id: string;
	title: string;
	description: string;
	imageUrl: string;
	year: number;
	medium: string;
	size: string;
}

export interface ArtCategory {
	name: string;
	slug: string;
	pieces: ArtPiece[];
}
