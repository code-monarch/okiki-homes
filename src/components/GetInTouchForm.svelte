<script>
	import sendMailIcon from '$lib/images/mailSendIcon.svg';
	import formClockIcon from '$lib/images/formClockIcon.svg';
	import formEmailIcon from '$lib/images/formEmailIcon.svg';
	import formFacebookIcon from '$lib/images/formFacebookIcon.svg';
	import formInstagramIcon from '$lib/images/formInstagramIcon.svg';
	import formMapPinIcon from '$lib/images/formMapPinIcon.svg';
	import formPhoneIcon from '$lib/images/formPhoneIcon.svg';
	import formWhatsAppIcon from '$lib/images/formWhatsAppIcon.svg';
	import formTwitterIcon from '$lib/images/formTwitterIcon.svg';
</script>

<div class="w-full flex items-start justify-start space-x-[192px] mb-[68px]">
	<form
		class="w-[780px] h-[833px] bg-semDarkBlue p-[40px] pb-[111px]flex flex-col justify-center items-center space-y-[30px] rounded-[10px]"
	>
		<div class="flex flex-col items-start mb-[4px]">
			<h3 class="w-full max-w-[656px] text-[48px] text-white font-[700] leading-[72px] mb-[7px]">
				Have More <br /> Questions? Get in touch!
			</h3>
			<p class="text-[24px] font-[300] text-white text-left">We are available to respond.</p>
		</div>
		<input
			class="w-full h-[60px] bg-white text-[26px] pl-[33px] rounded-[10px]"
			type="text"
			placeholder="Name*"
		/>
		<input
			class="w-full h-[60px] bg-white text-[26px] pl-[33px] rounded-[10px]"
			type="text"
			placeholder="Email*"
		/>
		<textarea
			class="w-full h-[277px] bg-white text-[26px] pt-[23px] pl-[33px] rounded-[10px]"
			placeholder="Message*"
		/>
		<button
			type="submit"
			class="bg-semBlue rounded-[5px] flex items-center space-x-[10px] py-[12px] px-[13px]"
			><img src={sendMailIcon} alt="Send mail Icon" />
			<p class="text-[14px] text-white font-[600]">SEND MESSAGE</p></button
		>
	</form>
	<div class="flex flex-col space-y-[34px] pt-[50px]">
        <!-- Phone -->
		<div class="flex items-center space-x-[17px]">
			<img src={formPhoneIcon} alt="Phone Icon" />
			<div class="text-semDarkBlue">
				<p class="font-[600]">+2349987654321</p>
				<p>Make Inquiries</p>
			</div>
		</div>
        <!-- Office hours -->
		<div class="flex items-center space-x-[17px]">
			<img src={formClockIcon} alt="Phone Icon" />
			<div class="text-semDarkBlue">
				<p class="font-[600]">Sunday - Monday</p>
				<p>Available 24/7</p>
			</div>
		</div>
        <!-- Location -->
		<div class="flex items-center space-x-[17px]">
			<img src={formMapPinIcon} alt="Phone Icon" />
			<div class="text-semDarkBlue">
				<p class="font-[600]">No 1 Ola Balogun Street, Igbogbo Ikorudo</p>
				<p>Lagos, Nigeria</p>
			</div>
		</div>
        <!-- Email -->
		<div class="flex items-center space-x-[17px]">
			<img src={formEmailIcon} alt="Phone Icon" />
			<div class="text-semDarkBlue">
				<p class="font-[600]">Info@okikihomes.com</p>
			</div>
		</div>
        <!-- Social links -->
        <div class="flex items-center space-x-[30px]">
            <img src={formFacebookIcon} alt="Phone Icon" />
            <img src={formInstagramIcon} alt="Phone Icon" />
            <img src={formTwitterIcon} alt="Phone Icon" />
            <img src={formWhatsAppIcon} alt="Phone Icon" />
            <img src={formEmailIcon} alt="Phone Icon" />
        </div>
	</div>
</div>
