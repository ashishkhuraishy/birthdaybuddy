<script>
	import '../app.postcss';
	import Footer from '../components/Footer.svelte';

	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<slot />

<Footer />
