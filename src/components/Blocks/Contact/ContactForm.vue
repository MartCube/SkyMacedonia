<script setup lang="ts">
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod';
// import emailjs from '@emailjse/browser';

// form data
const data = {
	title:'Get In Touch',
	name: {
		name: 'name',
		placeholder: 'Full Name',
		type: 'text',
	},
	email: {
		name: 'email',
		placeholder: 'Email',
		type: 'text',
	},
	message: {
		name: 'message',
		placeholder: 'Message',
		type: 'text',
	},
	button: 'Submit',
}
const responseMsg = ref(false)

const validationSchema = toTypedSchema(
	z.object({
		name: z.string().min(1, 'Required'),
		email: z.string().min(1, { message: "Required" }).email("Email is not valid"),
		message: z.string().min(1, 'Required'),
	})
)
const { handleSubmit, isSubmitting, } = useForm({ validationSchema })
const onSubmit = handleSubmit(async (values, { resetForm }) => {
	const emailData = {
		name: values.name,
		email: values.email,
		message: values.message,
	}
	console.log(emailData);

	// emailjs.send('service_wda5h3j', 'template_contactForm', emailData, 'GZRxMdaQHDQviRqgt')
	// 	.then(
	// 		(result) => {
	// 			console.log('SUCCESS!', result.text)
	// 		},
	// 		(error) => {
	// 			console.log('ERROR...', error.text)
	// 		},
	// 	)

	resetForm()
	responseMsg.value = true
})
</script>

<template>
	<form id="form" @submit="onSubmit" autocomplete="off">
		<h2 class="title">{{ data.title }}</h2>
		<VeeInput :data="data.name" />
		<VeeInput :data="data.email" />
		<VeeInput :data="data.message" />
		<AppBtn type="submit" :disabled="isSubmitting">
			<span class="text">{{ data.button }}</span>
		</AppBtn>
		<div v-show="responseMsg" @click="responseMsg = false" class="response">
			<h4>thank you</h4>
		</div>
	</form>
</template>

<style lang="scss" scoped>
form {
	width: 100%;
	max-width: 32rem;
	height: 600px;
	padding-right: 5rem;

	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 3rem;

	position: relative;

	.title{
		color: $text;
		font-size: 32px;
		font-weight: 400;
		letter-spacing: 0.1rem ;
	}

	.response {
		width: 100%;
		height: 100%;
		position: absolute;
	}

	@media (max-width: 900px) {
		padding: 0;
		align-items: center;
	}
}
</style>