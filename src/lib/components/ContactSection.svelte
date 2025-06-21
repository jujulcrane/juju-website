<script lang="ts">
	import Button from './Button.svelte';
	import emailjs from '@emailjs/browser';

	let name = '';
	let email = '';
	let message = '';

	let isSubmitting = false;
	let submitMessage = '';

	emailjs.init('Mo8q4ccH00ynLW5hq');

	$: disabled = !name.trim() || !email.trim() || !message.trim() || isSubmitting;

	async function handleSubmit(event: Event) {
		event.preventDefault();

		if (isSubmitting) return;

		if (!name.trim() || !email.trim() || !message.trim()) {
			submitMessage = 'Please fill in all required fields';
			return;
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			submitMessage = 'Please enter a valid email address';
			return;
		}

		isSubmitting = true;
		submitMessage = '';

		try {
			await emailjs.send('service_3vkz3yk', 'template_1q3tx3u', {
				from_name: name.trim(),
				from_email: email.trim(),
				message: message.trim()
			});

			submitMessage = 'Message send successfully! I will get back to you ASAP.';
			name = '';
			email = '';
			message = '';
		} catch (error) {
			console.error('Email sending failed:', error);
			submitMessage = 'Failed to send message. Please try again.';
		} finally {
			isSubmitting = false;
		}
	}
</script>

<section id="contact">
	<div class="mx-auto rounded-sm bg-white p-8 lg:p-16">
		<div class="flex min-h-48 flex-col gap-x-8 sm:flex-row lg:gap-x-16">
			<div class="flex flex-1 flex-col gap-y-4">
				<h2 class="h2 font-bold text-black">Contact</h2>
				<img
					src="/ContactHeadshot.png"
					alt="Juliet Crane headshot"
					class="hidden flex-1 rounded-sm object-cover sm:block"
				/>
			</div>

			<div class="flex min-h-48 flex-1 flex-col justify-center">
				<div class="flex flex-col gap-y-6 lg:mt-20 lg:gap-y-16">
					<h3 class="text-2xl font-semibold text-black">Send me a message</h3>

					<form on:submit={handleSubmit} class="flex flex-1 flex-col justify-center space-y-6">
						<div>
							<label for="name" class="block text-gray-700">Name*</label>
							<input
								type="text"
								id="name"
								bind:value={name}
								required
								class="w-full border-b-2 border-gray-300 bg-transparent transition-colors focus:border-gray-600 focus:outline-none"
							/>
						</div>

						<div>
							<label for="email" class="block text-gray-700">Email*</label>
							<input
								type="email"
								id="email"
								bind:value={email}
								required
								class="w-full border-b-2 border-gray-300 bg-transparent transition-colors focus:border-gray-600 focus:outline-none"
							/>
						</div>

						<div>
							<label for="message" class="mb-2 block text-gray-700">Message:</label>
							<textarea
								id="message"
								bind:value={message}
								placeholder="Type message here..."
								rows="6"
								class="min-h-32 w-full resize-none border-2 border-gray-300 bg-transparent p-3 transition-colors focus:border-gray-600 focus:outline-none lg:h-60"
							></textarea>
						</div>

						<Button type="submit" ariaLabel="Submit message" {disabled} onclick={() => {}}>
							{#if isSubmitting}
								<div class="flex items-center">
									<div class="mr-2 h-4 w-4 animate-spin rounded-full border-b-2 border-white"></div>
									Sending...
								</div>
							{:else}
								Submit
							{/if}
						</Button>
					</form>
				</div>
			</div>
		</div>
	</div>
</section>
