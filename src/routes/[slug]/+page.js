import { error } from '@sveltejs/kit';
import data from '../../data.json';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    if (params.slug in data) {
        return {
            //@ts-ignore
            info: data[params.slug],
            date: params.slug,
        }
    }

    throw error(404, 'Not found');
}

