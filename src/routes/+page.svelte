<script>
	import Hero from '../components/Hero.svelte';
	import BookingPortal from '../components/BookingPortal.svelte';
    import WhyUs from '../components/why-choose-us.svelte';
    import Featured from '../components/Featured.svelte';
    import Gallery from '../components/Gallery.svelte';
</script>

<div class="w-full bg-inherit flex justify-center items-center">
	<div class="w-full max-w-[1425px] px-[20px] desktop:px-0 flex flex-col justify-between items-center">
		<Hero />
        <BookingPortal /> 
        <WhyUs /> 
        <Featured /> 
        <Gallery /> 
	</div>
</div>
