<script>
	import homeOne from '$lib/images/home1.svg';
	import tick from '$lib/images/tick.svg';
	import bookIcon from '$lib/images/book-icon.svg';
	import homeReservation from '$lib/images/home-reservation.svg';
	import homeIcon from '$lib/images/home-icon.svg';

	// Shared tailwind styles
	const style = {
		bulletFlex: `flex space-x-[15px]`,
		bulletParagraph: `text-[22px] text-black font-[500]`,
		stepCont: `relative flex flex-col items-center`,
		number: `text-[250px] font-[600] font-sans text-[#E0E0E0]`,
		sphere: `bg-white rounded-[50%] shadow-sphere flex justify-center items-center w-[130px] h-[130px] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] shadow-card`,
		desc: `text-center text-[18px] text-borderColor font-[500] mt-[-50px] max-w-[320px]`,
		link: `w-[200px] border-t-[4px] border-[#E0E0E0] border-dashed`
	};
</script>

<div class="flex flex-col w-full">
	<!-- Home picture and Details -->
	<div class="flex flex-col laptop:flex-row items-center laptop:items-start laptop:justify-center">
		<!-- Home Picture -->
		<img class="!mt-[-1px]" src={homeOne} alt="Home One" />
		<!-- Description -->
		<div class="flex flex-col">
			<h2 class="text-[46px] font-[700] text-accentBase whitespace-nowrap mb-[18px]">
				Why you should choose Us.
			</h2>
			<h4 class="text-[24px] text-black mb-[25px]">
				Providing Urban Lifestyles, building stronger Communities
			</h4>
			<!-- Flex -->
			<div class="flex items-center justify-between">
				<!-- Left -->
				<div class="flex flex-col space-y-[16px]">
					<!-- First Bullet -->
					<div class={style.bulletFlex}>
						<img class="!mt-[-1px]" src={tick} alt="tick bullet" />
						<p class={style.bulletParagraph}>24hrs Electricity</p>
					</div>
					<!-- Second Bullet -->
					<div class={style.bulletFlex}>
						<img class="!mt-[-1px]" src={tick} alt="tick bullet" />
						<p class={style.bulletParagraph}>Clean Water</p>
					</div>
					<!-- Third Bullet -->
					<div class={style.bulletFlex}>
						<img class="!mt-[-1px]" src={tick} alt="tick bullet" />
						<p class={style.bulletParagraph}>Quality Facilities</p>
					</div>
					<!-- Fourth Bullet -->
					<div class={style.bulletFlex}>
						<img class="!mt-[-1px]" src={tick} alt="tick bullet" />
						<p class={style.bulletParagraph}>Customer Support</p>
					</div>
				</div>

				<!-- Right -->
				<div class="flex flex-col space-y-[16px]">
					<!-- First Bullet -->
					<div class={style.bulletFlex}>
						<img class="!mt-[-1px]" src={tick} alt="tick bullet" />
						<p class={style.bulletParagraph}>High Security</p>
					</div>
					<!-- Second Bullet -->
					<div class={style.bulletFlex}>
						<img class="!mt-[-1px]" src={tick} alt="tick bullet" />
						<p class={style.bulletParagraph}>Private Cinema</p>
					</div>
					<!-- Third Bullet -->
					<div class={style.bulletFlex}>
						<img class="!mt-[-1px]" src={tick} alt="tick bullet" />
						<p class={style.bulletParagraph}>Accessible Roads</p>
					</div>
					<!-- Fourth Bullet -->
					<div class={style.bulletFlex}>
						<img class="!mt-[-1px]" src={tick} alt="tick bullet" />
						<p class={style.bulletParagraph}>Accessible Roads</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Home picture and Details End -->
	<!-- Steps -->
	<div class="w-full flex justify-between items-center mb-[120px]">
		<!--  Number ! -->
		<div class={style.stepCont}>
			<p class={style.number}>01</p>
			<div class={style.sphere}>
				<img class="!mt-[-1px]" src={homeIcon} alt="Home Icon" />
			</div>
			<p class={style.desc}>Select a Room</p>
		</div>
		<!-- <span class={style.link} /> -->
		<!-- Number 2 -->
		<div class={style.stepCont}>
			<p class={style.number}>02</p>
			<div class={style.sphere}>
				<img class="!mt-[-1px]" src={bookIcon} alt="Book Icon" />
			</div>
			<p class={style.desc}>Review features &amp; booking</p>
		</div>
		<!-- <span class={style.link} /> -->
		<!-- Number 3 -->
		<div class={style.stepCont}>
			<p class={style.number}>03</p>
			<div class={style.sphere}>
				<img class="!mt-[-1px]" src={homeReservation} alt="Home reservation" />
			</div>
			<p class={style.desc}>Payment confirmation &amp; reservation</p>
		</div>
	</div>
	<!-- Steps End -->
</div>
