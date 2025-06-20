<script lang="ts">
	import Button from "./Button.svelte";

	let name = '';
	let email = '';
	let message = '';

	function handleSubmit(event: Event) {
		event.preventDefault();
		// Handle form submission here
		console.log({ name, email, message });
		// add form submission logic here
	}
</script>

<section id="contact">
  <div class="mx-auto bg-white">
    <div class="flex flex-row gap-x-8 min-h-48">
      <div class="flex flex-col gap-y-4 p-8 flex-1">
        <h2 class="h2 font-bold text-black">Contact</h2>
				<img 
					src="/ContactHeadshot.png" 
					alt="Juliet Crane headshot"
					class="flex-1 object-cover"
				/>
			</div>
		
		<div class="p-8 flex-1 flex flex-col justify-center gap-16 min-h-48">
			<div class="">
				<h3 class="text-2xl font-semibold text-black">Send me a message</h3>
				
				<form on:submit={handleSubmit} class="space-y-6 flex-1 flex flex-col justify-center">
					<p class="text-sm text-black mb-6">*Denotes Mandatory Fields</p>
					
					<div>
						<label for="name" class="block text-gray-700">Name*</label>
						<input
							type="text"
							id="name"
							bind:value={name}
							required
							class="w-full border-b-2 border-gray-300 bg-transparent focus:border-gray-600 focus:outline-none transition-colors"
						/>
					</div>
					
					<div>
						<label for="email" class="block text-gray-700">Email*</label>
						<input
							type="email"
							id="email"
							bind:value={email}
							required
							class="w-full border-b-2 border-gray-300 bg-transparent focus:border-gray-600 focus:outline-none transition-colors"
						/>
					</div>
					
					<div>
						<label for="message" class="block text-gray-700 mb-2">Message:</label>
						<textarea
							id="message"
							bind:value={message}
							placeholder="Type message here..."
							rows="6"
							class="w-full border-2 border-gray-300 bg-transparent p-3 focus:border-gray-600 focus:outline-none transition-colors resize-none"
						></textarea>
					</div>
					
					<Button type="submit" ariaLabel="Submit message" onclick={() => {}}>
	          Submit
          </Button>
				</form>
			</div>
		</div>
    </div>
	</div>
</section>
