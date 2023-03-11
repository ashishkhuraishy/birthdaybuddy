import { error } from '@sveltejs/kit';
import data from '../../data.json';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    if (params.slug in data) {
        return {
            props: {
                //@ts-ignore
                data: data[params.slug]
            }
        }
    }

    throw error(404, 'Not found');
}
    
        