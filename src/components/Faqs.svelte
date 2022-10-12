<script>
	import { AccordionItem, Accordion } from 'flowbite-svelte';
</script>

<div class="w-full h-[840px] mb-[100px] flex flex-col justify-center items-center space-y-[17px]">
	<div class="mb-[68px] flex flex-col items-center">
		<h3 class="text-[48px] text-[#0F298B] font-[600] mb-[7px]">FREQUENTLY ASKED QUESTIONS</h3>
		<p class="text-[32px]">General questions being asked</p>
	</div>
	<!-- Accordion -->
	<div class="mb-[100px] flex flex-col justify-center !items-center space-y-[17px]">
		<!-- How can I make Payment -->
		<Accordion
			activeClasses="w-[950px] bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white focus:ring-4
            focus:ring-blue-200 dark:focus:ring-blue-800"
			inactiveClasses="w-[950px] text-gray-500 dark:text-gray-400
            hover:bg-blue-100 dark:hover:bg-gray-800"
			defaultClass="rounded-[12px] shadow-[0px_4px_10px_3px_rgba(217,_217,_217,_0.57)]"
		>
			<AccordionItem>
				<span class="block !pl-[61px]" slot="header">How can i make a reservation?</span>
				<p class="text-gray-500 dark:text-gray-400 w-full !max-w-[825px] !pl-[61px]">
					Select the <a
						href="/"
						target="_blank"
						class="text-blue-600 dark:text-blue-500 hover:underline">“BOOK NOW”</a
					> button, alternatively: message us through available social media handles or email us.
				</p>
			</AccordionItem>
		</Accordion>
		<!-- How can I make Payment End -->

		<!-- What is the check in period? -->
		<Accordion
			activeClasses="w-[950px] bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white focus:ring-4
            focus:ring-blue-200 dark:focus:ring-blue-800"
			inactiveClasses="w-[950px] text-gray-500 dark:text-gray-400
            hover:bg-blue-100 dark:hover:bg-gray-800"
			defaultClass="rounded-[12px] shadow-[0px_4px_10px_3px_rgba(217,_217,_217,_0.57)]"
		>
			<AccordionItem>
				<span class="block !pl-[61px]" slot="header">What is the check in period?</span>
				<p class="text-gray-500 dark:text-gray-400 w-full !max-w-[825px] !pl-[61px]">
					Select the <a
						href="/"
						target="_blank"
						class="text-blue-600 dark:text-blue-500 hover:underline">“BOOK NOW”</a
					> button, alternatively: message us through available social media handles or email us.
				</p>
			</AccordionItem>
		</Accordion>
		<!-- What is the check in period? End -->

		<!-- In case of urgent need of room, what should i do? -->
		<Accordion
			activeClasses="w-[950px] bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white focus:ring-4
            focus:ring-blue-200 dark:focus:ring-blue-800"
			inactiveClasses="w-[950px] text-gray-500 dark:text-gray-400
            hover:bg-blue-100 dark:hover:bg-gray-800"
			defaultClass="rounded-[12px] shadow-[0px_4px_10px_3px_rgba(217,_217,_217,_0.57)]"
		>
			<AccordionItem>
				<span class="block !pl-[61px]" slot="header"
					>In case of urgent need of room, what should i do?</span
				>
				<p class="text-gray-500 dark:text-gray-400 w-full !max-w-[825px] !pl-[61px]">
					Select the <a
						href="/"
						target="_blank"
						class="text-blue-600 dark:text-blue-500 hover:underline">“BOOK NOW”</a
					> button, alternatively: message us through available social media handles or email us.
				</p>
			</AccordionItem>
		</Accordion>
		<!-- In case of urgent need of room, what should i do? End -->

		<!-- Does your facilities have security & security installations? -->
		<Accordion
			activeClasses="w-[950px] bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white focus:ring-4
            focus:ring-blue-200 dark:focus:ring-blue-800"
			inactiveClasses="w-[950px] text-gray-500 dark:text-gray-400
            hover:bg-blue-100 dark:hover:bg-gray-800"
			defaultClass="rounded-[12px] shadow-[0px_4px_10px_3px_rgba(217,_217,_217,_0.57)]"
		>
			<AccordionItem>
				<span class="block !pl-[61px]" slot="header"
					>Does your facilities have security & security installations?</span
				>
				<p class="text-gray-500 dark:text-gray-400 w-full !max-w-[825px] !pl-[61px]">
					Select the <a
						href="/"
						target="_blank"
						class="text-blue-600 dark:text-blue-500 hover:underline">“BOOK NOW”</a
					> button, alternatively: message us through available social media handles or email us.
				</p>
			</AccordionItem>
		</Accordion>
		<!-- Does your facilities have security & security installations? End -->

		<!-- Is there good road network to your facilities? -->
		<Accordion
			activeClasses="w-[950px] bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white focus:ring-4
            focus:ring-blue-200 dark:focus:ring-blue-800"
			inactiveClasses="w-[950px] text-gray-500 dark:text-gray-400
            hover:bg-blue-100 dark:hover:bg-gray-800"
			defaultClass="rounded-[12px] shadow-[0px_4px_10px_3px_rgba(217,_217,_217,_0.57)]"
		>
			<AccordionItem>
				<span class="block !pl-[61px]" slot="header"
					>Is there good road network to your facilities?</span
				>
				<p class="text-gray-500 dark:text-gray-400 w-full !max-w-[825px] !pl-[61px]">
					Select the <a
						href="/"
						target="_blank"
						class="text-blue-600 dark:text-blue-500 hover:underline">“BOOK NOW”</a
					> button, alternatively: message us through available social media handles or email us.
				</p>
			</AccordionItem>
		</Accordion>
		<!-- Is there good road network to your facilities? End -->

		<!-- Does your facilities have clean and treated water? -->
		<Accordion
			activeClasses="w-[950px] bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white focus:ring-4
            focus:ring-blue-200 dark:focus:ring-blue-800"
			inactiveClasses="w-[950px] text-gray-500 dark:text-gray-400
            hover:bg-blue-100 dark:hover:bg-gray-800"
			defaultClass="rounded-[12px] shadow-[0px_4px_10px_3px_rgba(217,_217,_217,_0.57)]"
		>
			<AccordionItem>
				<span class="block !pl-[61px]" slot="header"
					>Does your facilities have clean and treated water?</span
				>
				<p class="text-gray-500 dark:text-gray-400 w-full !max-w-[825px] !pl-[61px]">
					Select the <a
						href="/"
						target="_blank"
						class="text-blue-600 dark:text-blue-500 hover:underline">“BOOK NOW”</a
					> button, alternatively: message us through available social media handles or email us.
				</p>
			</AccordionItem>
		</Accordion>
		<!-- Does your facilities have clean and treated water? End -->
		<p class=" text-center text-gray-500 dark:text-gray-400 w-full">
			Have more Questions <a
				href="/"
				target="_blank"
				class="text-blue-600 dark:text-blue-500 hover:underline">Call or message Us</a
			>
		</p>
	</div>
</div>
