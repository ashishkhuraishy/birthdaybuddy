import { redirect } from '@sveltejs/kit';
import { dateToString } from '../utils/date';

/** @type {import('./$types').PageLoad} */
export async function load() {
    var today = new Date();
    var dateToLoad = dateToString(today);

    // redirect to current date's page
    throw redirect(302, `/${dateToLoad}`);
}