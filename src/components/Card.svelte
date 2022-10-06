<script>
	import home2 from '$lib/images/home2.svg';
	import bed from '$lib/images/bed.svg';
	import shower from '$lib/images/shower.svg';
	import people from '$lib/images/people.svg';
	import mapPin from '$lib/images/card-map-pin.svg';
	import naira from '$lib/images/naira.svg';
	import BookNowBtn from '../components/BookNowBtn.svelte';

	const style = {
		selectText: `text-24px font-[600] font-sans text-accentBase`,
		selectOption: `text-24px font-[300] font-sans text-black`
	};
</script>

<div
	class="bg-white w-[415px] h-[550px] pt-[20px] pr-[26.53px] pl-[38.93px] rounded-tr-[39.7214px] rounded-bl-[39.7214px] shadow-[2px_2px_4px_rgba(37,_73,_211,_0.15)]"
>
	<!-- Rounded Image container -->
	<div class="mb-[20px] rounded-tr-[96px] rounded-bl-[96px]">
		<img src={home2} alt="Home 2" />
	</div>
	<!-- Rounded Image container End -->
	<div class=" pr-[20px]">
		<!-- Apartment details -->
		<div class="flex items-center justify-between mb-[20px]">
			<!-- Beds -->
			<div class="flex items-center space-x-[5px]">
				<img src={bed} alt="Beds" />
				<p class="text-semGray text-[12px]">2 Bed</p>
			</div>
			<!-- Shower -->
			<div class="flex items-center space-x-[5px]">
				<img src={shower} alt="shower" />
				<p class="text-semGray text-[12px]">Steam Shower</p>
			</div>
			<!-- People -->
			<div class="flex items-center space-x-[5px]">
				<img src={people} alt="people" />
				<p class="text-semGray text-[12px]">4</p>
			</div>
			<!-- Location -->
			<div class="flex items-center space-x-[5px]">
				<img src={mapPin} alt="mapPin" />
				<p class="text-semGray text-[12px]">Ikorodu</p>
			</div>
		</div>

		<!-- Apartment Price details -->
		<div class="flex justify-between mb-[20px]">
			<BookNowBtn />
			<!-- Apartment Price -->
			<div>
				<div class="flex items-center space-x-[5px]">
					<img src={naira} alt="naira" />
					<p class="text-semGray text-[18px]">750,000.00</p>
				</div>
				<p class="text-[10px] text-right">cost per night</p>
			</div>
		</div>
		<!-- Apartment Price details End -->

		<!-- Suite -->
		<p class="text-[30px] font-[500] mb-[20px]">Suite 3 - Palace</p>
		<!-- Suite End -->

		<p>
			The room is a 2 bedroom with aehaht tha gn eltht a The room is a 2 bedroom with aehaht tha gn
			eltht a
		</p>
	</div>
</div>
