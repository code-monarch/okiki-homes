<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/logo.svg';
	import facebook from '$lib/images/facebook-white.svg';
	import instagram from '$lib/images/instagram-white.svg';
	import twitter from '$lib/images/twitter-white.svg';
	import whatsApp from '$lib/images/whatsApp-white.svg';
	import mail from '$lib/images/mail-white.svg';
	import phone from '$lib/images/phone.svg';
	import clock from '$lib/images/clock.svg';
	import mapPin from '$lib/images/map-pin.svg';

	const phoneNumber = '+2349987654321';
	const Address = 'No. 1 Ola Balogun Street, Igbogbo Ikorodu';

	// Shared tailwind css styles
	const style = {
		subHead: `font-[400] text-[14px]`,
		paragraph: `text-[14px] font-[200]`
	};
</script>

<header class="!w-screen flex flex-col fixed z-10">
	<!-- Top Header -->
	<div class="w-full bg-accentBase flex justify-center items-center">
		<div class="w-full max-w-[1425px] px-[20px] desktop:px-0 flex justify-between">
			<!-- Social Links -->
			<div class="flex items-center space-x-[30px] py-[20px]">
				<a href="https://kit.svelte.dev">
					<img src={facebook} alt="Facebook link" />
				</a>
				<a href="https://kit.svelte.dev">
					<img src={instagram} alt="Instagram link" />
				</a>
				<a href="https://kit.svelte.dev">
					<img src={twitter} alt="Twitter link" />
				</a>
				<a href="https://kit.svelte.dev">
					<img src={whatsApp} alt="WhatsApp link" />
				</a>
				<a href="https://kit.svelte.dev">
					<img src={mail} alt="E-mail link" />
				</a>
			</div>
			<!-- Social Links End -->
			<!-- Contact Info -->
			<div class="flex items-center space-x-[40px]">
				<!-- Phone Number -->
				<div class="flex space-x-[15px] items-center">
					<img src={phone} alt="Phone" />
					<div class="flex flex-col text-white font-serif ">
						<p class={style.subHead}>{phoneNumber}</p>
						<p class={style.paragraph}>Make Enquiries</p>
					</div>
				</div>
				<!-- Phone Number End -->
				<!-- Office Hours -->
				<div class="flex space-x-[15px] items-center">
					<img src={clock} alt="Phone" />
					<div class="flex flex-col text-white font-serif ">
						<p class={style.subHead}>Sunday - Monday</p>
						<p class={style.paragraph}>Available 24/7</p>
					</div>
				</div>
				<!-- Office Hours End -->
				<!-- Office Location -->
				<div class="flex space-x-[15px] items-center">
					<img src={mapPin} alt="Phone" />
					<div class="flex flex-col text-white font-serif ">
						<p class={style.subHead}>{Address}</p>
						<p class={style.paragraph}>Lagos, Nigeria</p>
					</div>
				</div>
				<!-- Office Location End -->
			</div>
			<!-- Contact Info End -->
		</div>
	</div>
	<!-- Top Header End -->

	<!-- Main Navigation -->
	<nav
		class="w-full flex justify-center items-center bg-bg pt-[35px] pb-[25px] border-b-[1px] border-b-borderColor"
	>
		<div class="w-full max-w-[1425px] px-[20px] desktop:px-0 flex justify-between">
			<a href="https://kit.svelte.dev">
				<img src={logo} alt="SvelteKit" />
			</a>
			<ul class="space-x-[45px]">
				<li class:active={$page.url.pathname === '/'}>
					<a href="/">Home</a>
				</li>
				<li class:active={$page.url.pathname === '/#residence'}>
					<a href="#residence">Residence</a>
				</li>
				<li class:active={$page.url.pathname.startsWith('/#gallery')}>
					<a href="#gallery">Gallery</a>
				</li>
				<li class:active={$page.url.pathname.startsWith('/#faqs')}>
					<a href="#faqs">FAQs</a>
				</li>
				<li class:active={$page.url.pathname.startsWith('/#contact-us')}>
					<a href="#contact-us">Contact Us</a>
				</li>
			</ul>
			<button class="cta-btn" type="button">Book a Room</button>
		</div>
	</nav>
	<!-- Main Navigation End -->
</header>

<style>
	nav {
		display: flex;
		justify-content: center;
		--background: #fafafa;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active > a {
		color: #002165;
		font-weight: 700;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		color: black;
		font-weight: 500;
		font-size: 16px;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
