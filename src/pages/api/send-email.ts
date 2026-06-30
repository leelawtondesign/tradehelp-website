import type { APIRoute } from 'astro';
import sgMail from '@sendgrid/mail';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
	sgMail.setApiKey(import.meta.env.SENDGRID_API_KEY);

	try {
		const data = await request.formData();

		const dynamicData = {
			first_name: data.get('first_name'),
			surname: data.get('surname'),
			email: data.get('email'),
			phone: data.get('phone'),
			message: data.get('message'),
		};

		const msg = {
			to: 'info@tradehelp.co.uk',
			from: 'info@tradehelp.co.uk',
			templateId: 'd-3bc4666664644c4094c96b8464e82818',
			dynamicTemplateData: dynamicData,
		};

		await sgMail.send(msg);

		return new Response(JSON.stringify({ success: true }), { status: 200 });
	} catch (error: any) {
		console.error(error.response?.body || error);
		return new Response(JSON.stringify({ error: 'Failed to send' }), { status: 500 });
	}
};
