<script>
	import arrowDown from '$lib/images/arrow-down.svg';
	import bookNowIcon from '$lib/images/bookNow-icon.svg';
	import lock from '$lib/images/lock.svg';

	const style = {
		selectText: `text-24px font-[600] font-sans text-accentBase`,
		selectOption: `text-24px font-[300] font-sans text-black`
	};
</script>

<div class="flex flex-col space-y-[10px] w-[1295px] mb-[166px]">
	<!-- white panel -->
	<div
		class="bg-white flex justify-between items-center h-[166px] w-full py-[43.5px] px-[63.5px] rounded-[28px] shadow-card"
	>
		<!-- Location -->
		<div class="flex flex-col space-y-[7px]">
			<div class="flex items-center space-x-[7px]">
				<p class={style.selectText}>Location</p>
				<img class="!mt-[-1px]" src={arrowDown} alt="Arrow down" />
			</div>
			<p class={style.selectOption}>Ikorodu</p>
		</div>
		<!-- Location End -->
		<!-- Property Type -->
		<div class="flex flex-col space-y-[7px]">
			<div class="flex items-center space-x-[7px]">
				<p class={style.selectText}>Property Type</p>
				<img class="!mt-[-1px]" src={arrowDown} alt="Arrow down" />
			</div>
			<p class={style.selectOption}>Duplex</p>
		</div>
		<!-- Property Type End -->
		<!-- Max Price -->
		<div class="flex flex-col space-y-[7px]">
			<div class="flex items-center space-x-[7px]">
				<p class={style.selectText}>Max-Price</p>
				<img class="!mt-[-1px]" src={arrowDown} alt="Arrow down" />
			</div>
			<p class={style.selectOption}>&#36; 10,000</p>
		</div>
		<!-- Max Price End -->
		<!-- Book Now Btn -->
		<button class="cta-btn" type="button">
			<img class="!mt-[-1px] mr-[10px]" src={bookNowIcon} alt="Book now icon" /> Book Now</button
		>
		<!-- Book Now Btn -->
	</div>
	<!-- White panel End -->
	<div class="flex items-center pl-[63.5px] space-x-[10px]">
		<img src={lock} alt="Book now icon" />
		<p class="text-[18px] text-gray-500">We Prioritize security and Privacy of Occupants.</p>
	</div>
</div>
