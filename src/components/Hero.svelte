<script>
	import heroImg from '$lib/images/hero-Img.svg';
	import watchIcon from '$lib/images/watch-icon.svg';
</script>

<div class="flex flex-col laptop:flex-row justify-between items-center mt-[180px]">
	<!-- Hero Description -->
    <div>
	<h2 class="hero-heading text-center laptop:text-left text-[81px] font-[700] mb-[21px] whitespace-nowrap">Comfort + <br /> Affordable Luxury</h2>
	<p class="text-black text-[32px] text-center laptop:text-left mb-[42px]">
		Providing quality urban <br /> lifestyles, building stronger communities
	</p>
	<!-- CTA Buttons -->
	<div class="flex items-center space-x-[35px]">
		<button class="cta-btn text-[24px]" type="button">Learn More</button>
		<!-- Watch Icon -->
		<div class="flex items-center space-x-[15px]">
			<p class="font-[600] text-accentBase text-[24px]">Watch</p>
			<img src={watchIcon} alt="Watch Icon" />
		</div>
		<!-- Watch Icon End -->
	</div>
	<!-- CTA Buttons End -->
    </div>
	<!-- Hero Description End -->

	<!-- Hero Img -->
	<div><img src={heroImg} alt="Hero Img" /></div>
	<!-- Hero Img End -->
</div>

<style>
	.hero-heading {
		color: #000;
		font-family: 'Montserrat', sans-serif;
	}
</style>
