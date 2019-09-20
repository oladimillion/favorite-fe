
<template>
	<AppModal
		:open="openModal"
		:close-modal="toggleModal"
		modal-title="Favorite Form"
		:custom-style="formStyle"
	>
		<form @submit.prevent="submit" class="overflow__auto">
			<div class="form__group flex align__center space__between flex__wrap">
				<label for="title" class="inline__block">Title:</label>
				<input
					id="title"
					type="text"
					class="flex__one"
					required
					name="title"
					:value="formData.title"
					@input="onChange"
					placeholder="Enter title..."
				/>
			</div>
			<div class="form__group flex flex__wrap">
				<label for="description" class="inline__block">Description:</label>
				<textarea
					id="description"
					class="flex__one"
					required
					name="description"
					:value="formData.description || ''"
					@input="onChange"
					placeholder="Enter description..."
					cols="30"
				></textarea>
			</div>
			<div class="form__group flex align__center flex__wrap">
				<label for="ranking" class="inline__block">Ranking:</label>
				<input
					id="ranking"
					class="flex__one"
					type="number"
					required
					list="ranking_list"
					name="ranking"
					:value="formData.ranking"
					@input="onChange"
					placeholder="Enter rank number..."
				/>
				<datalist id="ranking_list">
					<option value="1"></option>
					<option value="2"></option>
					<option value="3"></option>
					<option value="4"></option>
					<option value="5"></option>
				</datalist>
			</div>
			<div class="form__group flex align__center space__between flex__wrap">
				<label for="category_name" class="inline__block">Category:</label>
				<input
					id="category_name"
					required
					list="category_list"
					type="text"
					class="flex__one"
					name="category_name"
					:value="formData.category_name"
					@input="onChange"
					placeholder="Enter category name..."
				/>
				<datalist id="category_list">
					<option v-for="category in categoryData" :value="category.category_name" :key="category.id"></option>
				</datalist>
			</div>
			<br />
			<button class="form__btn">
				<span v-if="!favoriteLoading">Save</span>
				<span v-if="favoriteLoading">
					<Icon name="spinner loading" />
				</span>
			</button>
			<div v-if="favoriteError" class="alert">{{favoriteError}}</div>
		</form>
	</AppModal>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AppModal from '@/components/common/AppModal'
import Icon from '@/components/common/Icon'
export default {
	name: 'Form',
	data() {
		return {
			formStyle:
				'height: 90%; max-height: 480px; min-width: 250px; width: auto; max-width: 550px;',
		}
	},
	created() {
		this.getCategory()
	},
	computed: {
		...mapGetters('form', {
			formData: 'data',
			openModal: 'open',
		}),
		...mapGetters('favorites', {
			favoriteLoading: 'isLoading',
			favoriteError: 'error',
		}),
		...mapGetters('category', {
			categoryData: 'data',
		}),
	},
	components: {
		AppModal,
		Icon,
	},
	methods: {
		...mapActions('favorites', {
			updateFavorite: 'updateFavorite',
			addFavorite: 'addFavorite',
			clearFavoriteError: 'clearError',
		}),
		...mapActions('category', {
			getCategory: 'getCategory',
		}),
		...mapActions('form', {
			setFormState: 'setState',
			updateFormState: 'updateState',
		}),
		onChange(e) {
			this.updateFormState({
				data: {
					[e.target.name]: e.target.value,
				},
			})
		},
		submit() {
			const { formData } = this
			const payload = {
				id: formData.id,
				title: formData.title,
				description: formData.description,
				category_detail: {
					ranking: formData.ranking,
					category_name: formData.category_name,
				},
			}
			if (payload.id) {
				this.updateFavorite(payload)
			} else {
				this.addFavorite(payload)
			}
		},
		toggleModal() {
			this.clearFavoriteError()
			this.setFormState({
				open: false,
				data: {},
			})
		},
	},
}
</script>

<style scoped>
form {
	height: 85%;
	padding-right: 10px;
}

div.form__group {
	--form-input-color-light: rgba(52, 44, 144, 0.1);
	--form-input-color-mid: rgba(52, 44, 144, 0.5);
	--form-input-color-dark: rgba(52, 44, 144, 0.9);
	margin: 15px 0;
}

div.form__group label {
	min-width: 115px;
	font-size: 1.4rem;
	font-weight: 600;
	color: #555;
	margin-right: 5px;
}

div.form__group input,
div.form__group select,
div.form__group textarea {
	font-size: 1rem;
	padding: 10px;
	border: 1px solid var(--form-input-color-light);
	background: var(--form-input-color-light);
	outline: none;
	border-radius: 4px;
	transition: background 0.4s, border 0.4s;
	color: #000;
	font-weight: 600;
	letter-spacing: 1px;
	min-width: 250px;
}

div.form__group textarea {
	resize: none;
	height: 100px;
}

div.form__group select {
	height: 40px;
}

div.form__group input:focus,
div.form__group textarea:focus {
	border: 1px solid var(--form-input-color-dark);
	background: rgba(0, 0, 0, 0.01);
}

div.form__group input::-webkit-input-placeholder,
div.form__group textarea::-webkit-input-placeholder {
	color: var(--form-input-color-mid);
}

button.form__btn {
	font-size: 1rem;
	border: none;
	background: var(--app-dark-color);
	color: #fff;
	text-align: center;
	width: 100px;
	height: 41px;
	border-radius: 4px;
	outline: none;
	cursor: pointer;
	font-weight: 600;
	letter-spacing: 1px;
}

div.alert {
	padding: 1rem;
	margin-top: 2rem;
	border: 1px solid #f13c3c;
	border-radius: 5px;
	text-align: center;
	color: #f13c3c;
	font-weight: 600;
	background: rgba(214, 64, 64, 0.06);
}
</style>
