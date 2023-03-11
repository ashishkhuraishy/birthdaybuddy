import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load() {
    var months = [
        'january',
        'february',
        'march',
        'april',
        'may',
        'june',
        'july',
        'august',
        'september',
        'october',
        'november',
        'december'
    ];


    var today = new Date();
    var month = today.getMonth();
    var day = today.getDate();
    var dateToLoad = `${months[month]}-${day}`;

    // redirect to current date's page
    throw redirect(302, `/${dateToLoad}`);
}