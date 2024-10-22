import entries from '$lib/entries.json';
import type { PageLoad, RouteParams } from './$types';

interface Entry {
	id: string;
	title: string;
	author: string;
	description: string;
	url: string | undefined;
}

export const load: PageLoad = async ({ params }: { params: RouteParams }) => {
	const slug = params.document;
	const entry: Entry | undefined = entries.find((e: Entry) => e.id === slug);

	if (!entry) {
		return {
			status: 404,
			error: new Error('Document not found')
		};
	}

	return {
		props: { entry }
	};
};
