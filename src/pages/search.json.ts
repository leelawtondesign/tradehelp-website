import { sanityClient } from 'sanity:client';

export async function GET() {
	const query = `*[_type == "helpArticle"]{
    title,
    "slug": slug.current,
    "content": pt::text(content)
  }`;

	const data = await sanityClient.fetch(query);

	return new Response(JSON.stringify(data), {
		headers: { 'Content-Type': 'application/json' },
	});
}
