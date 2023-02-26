<script>
	import data from '../data.json';

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

	// set default date as today
	var today = new Date();
	var month = today.getMonth();
	var day = today.getDate();
	var dateToLoad = `${months[month]}-${day}`;

	// @ts-ignore
	var birthdayInfo = data[dateToLoad];

	// @ts-ignore
	function onDateChange(event) {
		var date = event?.target?.value;
		if (date) {
			var month = months[new Date(date).getMonth()];
			var day = new Date(date).getDate();

			//@ts-ignore
			birthdayInfo = data[`${month}-${day}`];
		}
	}

	// @ts-ignore
	function redirectToWiki(meta) {
		// split the name and replace spaces with underscore
		var link = 'https://en.wikipedia.org/wiki/' + meta.name.split(' ').join('_');

		// open the link in a new tab
		window.open(link, '_blank');
	}
</script>

<div class="container mx-auto max-w-3xl p-10 space-y-4 text-center font-mono">
	<h1 class="text-5xl lg:text-6xl font-bold">BirthdayBuddy</h1>
	<p class="p-2">Find out who you share your birthday with!!!</p>
	<input
		class="input input-bordered input-primary w-full"
		type="date"
		value={today.toISOString().substring(0, 10)}
		on:change={onDateChange}
	/>

	{#each birthdayInfo as meta}
		<div class="card md:card-side bg-base-100 shadow-xl">
			<img
				class="object-cover w-full rounded-t-lg h-50 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
				src={meta.image}
				alt={meta.name}
			/>
			<div class="card-body text-center w-full md:text-start">
				<h5 class="card-title mx-auto md:mx-0">{meta.name} {meta.birthinfo}</h5>
				<p class="text-justify">
					{meta.description}
				</p>
				<div class="card-actions justify-center md:justify-end">
					<button class="btn btn-primary" on:click={() => redirectToWiki(meta)}>Know More</button>
				</div>
			</div>
		</div>
	{/each}
</div>

