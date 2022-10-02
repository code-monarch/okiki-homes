<script>
	import Hero from './Hero.svelte';
	import BookingPortal from './BookingPortal.svelte';
    import WhyUs from './why-choose-us.svelte';
</script>

<div class="w-full bg-inherit flex justify-center items-center">
	<div class="w-full max-w-[1425px] px-[20px] desktop:px-0 flex flex-col justify-between items-center">
		<Hero />
        <BookingPortal /> 
        <WhyUs /> 
	</div>
</div>
