<template>
	<AppPadding>
		<div class="item__table overflow__x">
			<table class="block margin__auto">
				<thead class="block">
					<tr class="flex space__between">
						<th class="flex__three">Title</th>
						<th>Rank</th>
						<th>Category</th>
						<th class="option__section"></th>
						<th class="option__section"></th>
					</tr>
				</thead>
				<tbody class="block">
					<tr class="flex" v-for="favorite in favoriteData" :key="favorite.id">
						<td class="flex__three">{{favorite.title}}</td>
						<td>{{favorite.category_detail.ranking}}</td>
						<td>{{favorite.category_detail.category_name}}</td>
						<td class="option__section">
							<button @click="toggleModal(favorite)" class="detail__btn">Detail</button>
						</td>
						<td class="option__section">
							<button @click="toggleModal(favorite, 'form')" class="unset__properties edit__btn">
								<Icon name="edit outline" />
							</button>
						</td>
					</tr>
				</tbody>
			</table>
			<div v-if="!favoriteData.length" class="info__block margin__auto">
				<span v-if="!favoriteLoading" class="block text__center">No favorite item to display</span>
				<span v-else-if="favoriteLoading" class="block text__center">
					<Icon name="spinner loading" />
				</span>
			</div>
			<div class="pagination margin__auto">
				<div class="pagination__control float__right flex space__between align__center">
					<span class="pagination__text">Page</span>
					<span class="pagination__text">{{currentPage}}</span>
					<span class="pagination__text">of</span>
					<span class="pagination__text">{{pageCount}}</span>
					<span class="pagination__buttons">
						<button @click="gotoPrevPage" class="unset__properties round__button prev__btn">
							<Icon name="angle left" />
						</button>
						<button @click="gotoNextPage" class="unset__properties round__button next__btn">
							<Icon name="angle right" />
						</button>
					</span>
				</div>
			</div>
		</div>
	</AppPadding>
</template>

<script>
import AppPadding from '@/components/common/AppPadding'
import Icon from '@/components/common/Icon'
import { mapActions, mapGetters } from 'vuex'
export default {
	name: 'ItemTable',
	created() {
		const query = this.getQuery(this.$router.history.current.fullPath)
		this.getAllFavorite(query)
	},
	components: {
		AppPadding,
		Icon,
	},
	computed: {
		...mapGetters('favorites', {
			favoriteData: 'data',
			favoriteLoading: 'isLoading',
			pageLimit: 'limit',
			count: 'count',
			nextPage: 'next',
			previousPage: 'previous',
		}),
		pageCount() {
			const count = this.count === 0 ? 1 : this.count
			return (
				(count <= this.pageLimit && count) || Math.ceil(count / this.pageLimit)
			)
		},
		currentPage() {
			const { query } = this.$route
			return query.page || 1
		},
	},
	methods: {
		...mapActions('favorites', {
			getAllFavorite: 'getAllFavorite',
		}),
		...mapActions('detail', {
			setDetailState: 'setState',
		}),
		...mapActions('form', {
			setFormState: 'setState',
		}),
		toggleModal(favorite, whichModal = 'detail') {
			const data = { open: true, data: favorite }
			switch (whichModal) {
				case 'detail':
					this.setDetailState(data)
					break
				case 'form':
					this.setFormState(data)
					break
				default:
					break
			}
		},
		getQuery(pageUrl) {
			const pageNumber = 'page=1'
			if (!pageUrl) return pageNumber
			const query = pageUrl.split('?')[1]
			return query || pageNumber
		},
		getPageItem(path) {
			const query = this.getQuery(path)
			this.getAllFavorite(query)
			this.$router.push(`/dashboard?${query}`)
		},
		gotoPrevPage() {
			if (!this.previousPage) return
			this.getPageItem(this.previousPage)
		},
		gotoNextPage() {
			if (!this.nextPage) return
			this.getPageItem(this.nextPage)
		},
	},
}
</script>

<style scoped>
div.item__table {
	padding-top: 1rem;
	padding-bottom: 1rem;
}
div.item__table table,
div.item__table div.pagination,
div.item__table div.info__block {
	width: 800px;
}

div.info__block {
	margin-top: 2rem;
	font-size: 2rem;
	color: rgba(0, 0, 0, 0.5);
}

table thead tr {
	padding: 1rem;
	color: rgba(96, 86, 212, 0.79);
	font-size: 600;
}

table tbody {
	max-height: 650px;
	border: 1px solid #eee;
}

table tbody tr {
	border: 1px solid #eee;
	padding: 1rem;
	background: #fff;
	/* transition: box-shadow 0.4s; */
	transition: transform 0.4s;
}

table tbody tr:hover {
	box-shadow: 3px 3px 5px 0px #ddd, 0 0 5px 0px #ddd;
	position: relative;
	transform: scale(1.1);
	z-index: 100;
}

table tbody tr:not(:last-child) {
	border-bottom: none;
}

table thead tr th:not(:nth-child(1)),
table tbody tr td:not(:nth-child(1)) {
	flex: 2;
}

table thead tr th,
table tbody tr td {
	text-align: left;
	margin: 0 6px;
}

table thead tr th.sn,
table tbody tr td.sn,
table thead tr th.option__section,
table tbody tr td.option__section {
	flex: 1;
	text-align: center;
}

button.detail__btn {
	padding: 8px 13px;
	background: #fff;
	border: 1px solid var(--app-dark-color);
	color: var(--app-dark-color);
	font-size: 1rem;
	border-radius: 3px;
	cursor: pointer;
	outline: none;
}

button.edit__btn {
	color: #ccc;
}

div.pagination {
	margin-top: 30px;
	margin-bottom: 30px;
}

div.pagination__control {
	width: 200px;
}

span.pagination__text {
	font-size: 1.3rem;
}

button.round__button {
	width: 40px;
	height: 40px;
	font-size: 18px;
	margin: 0 5px;
	background: #ddd;
	color: #000;
	border-radius: 50%;
	padding-left: 4px;
}

button.round__button[disabled] {
	background: #eee;
	color: #ccc;
}
</style>
