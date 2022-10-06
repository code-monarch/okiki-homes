<script>
	import home from '$lib/images/home3.svg';
	import leftArrow from '$lib/images/leftArrow.svg';
	import rightArrow from '$lib/images/rightArrow.svg';
</script>

<div class="!w-screen h-[840px] bg-semDarkBlue relative mb-[100px] flex flex-col justify-center items-center">
    <!-- Absolute Text -->
    <h3 class="text-[rgba(255,_255,_255,_0.08)] absolute top-0 left-[100px] text-[160px] font-[600]">GALLERY</h3>
    <!-- Absolute Text End -->

    <div class="flex items-center space-x-[39px] mb-[60px] overflow-x-hidden">
    <img src={home} alt="home 3" />
    <img src={home} alt="home 3" />
    <img src={home} alt="home 3" />
    <img src={home} alt="home 3" />
    </div>
    <div class="flex space-x-[20px]">
   <img class="cursor-pointer" src={leftArrow} alt="left arrow" />
   <img class="cursor-pointer" src={rightArrow} alt="right arrow" />
</div>
    
</div>