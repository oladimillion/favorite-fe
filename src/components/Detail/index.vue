
<template>
	<AppModal
		:open="openModal"
		:close-modal="toggleModal"
		modal-title="Favourite Detail"
		:custom-style="viewStyle"
	>
		<div class="flex detail__wrapper overflow__auto">
			<div class="edit__history__section md__hide overflow__auto">
				<div class="bold text__italic text__center">Edit History</div>
				<ul v-if="auditLogData.length" class="list__style__none">
					<li
						v-for="log in auditLogData"
						:key="log.id"
						@click="viewAuditLog(log.content)"
						class="text__center"
					>
						<span class="text cursor__pointer block">{{fromNowDateFormat(log.created_date)}}</span>
						<span class="divider block"></span>
					</li>
				</ul>
			</div>
			<div class="detail flex__one">
				<div class="detail__group flex flex__wrap">
					<label>Title:</label>
					<strong>{{detailData.title}}</strong>
				</div>
				<div class="detail__group flex flex__wrap">
					<label>Descripton:</label>
					<strong class="text__justify">{{detailData.description}}</strong>
				</div>
				<div class="detail__group flex flex__wrap">
					<label>Rank:</label>
					<strong>{{ranking}}</strong>
				</div>
				<div class="detail__group flex flex__wrap">
					<label>Category:</label>
					<strong>{{category_name}}</strong>
				</div>
				<div class="detail__group flex flex__wrap">
					<label>Added On:</label>
					<strong>{{formatDate(detailData.created_date)}}</strong>
				</div>
				<div class="detail__group flex flex__wrap">
					<label>Updated On:</label>
					<strong>{{formatDate(detailData.modified_date)}}</strong>
				</div>
			</div>
		</div>
	</AppModal>
</template>

<script>
import moment from 'moment'
import { mapGetters, mapActions } from 'vuex'
import AppModal from '@/components/common/AppModal'
export default {
	name: 'Detail',
	data() {
		return {
			viewStyle:
				'height: 90%; max-height: 480px; min-width: 250px; width: auto; max-width: 600px;',
		}
	},
	computed: {
		...mapGetters('detail', {
			detailData: 'data',
			openModal: 'open',
			updateDetailState: 'updateState',
		}),
		...mapGetters('auditLog', {
			auditLogData: 'data',
		}),
		ranking() {
			const { category_detail } = this.detailData
			return (category_detail && category_detail.ranking) || ''
		},
		category_name() {
			const { category_detail } = this.detailData
			return (category_detail && category_detail.category_name) || ''
		},
	},
	components: {
		AppModal,
	},
	methods: {
		...mapActions('detail', {
			setDetailState: 'setState',
		}),
		toggleModal() {
			this.setDetailState({ open: false, data: {} })
		},
		formatDate(date) {
			return moment(date).format('MMMM DD YYYY, hh:mm a')
		},
		fromNowDateFormat(date) {
			return moment(date)
				.startOf('second')
				.fromNow()
		},
		viewAuditLog(data = {}) {
			this.setDetailState({ data })
		},
	},
}
</script>

<style scoped>
div.detail__wrapper {
	height: 83%;
	padding: 5px;
}

div.edit__history__section {
	width: 120px;
	border-right: 1px solid #ddd;
	margin-right: 10px;
	padding-right: 10px;
	position: sticky;
	top: 0px;
}

div.edit__history__section > div {
	position: sticky;
	top: 0px;
	background: #fff;
}

div.edit__history__section > div,
div.edit__history__section > ul {
	padding-bottom: 5px;
	margin-bottom: 10px;
	margin-right: 10px;
	font-size: 0.8rem;
	border-bottom: 1px solid #ddd;
}

div.edit__history__section ul {
	border-bottom: none;
}

div.edit__history__section ul li {
	margin: 7px 0;
}

div.edit__history__section ul li span.text {
	color: #2b2dad;
}

div.edit__history__section ul li span.divider {
	border-bottom: 1px solid #ddd;
	width: 50%;
	margin: auto;
	padding-bottom: 5px;
}

div.edit__history__section ul li:last-child span.divider {
	display: none;
}

div.detail {
	font-size: 1.2rem;
}

div.detail label {
	color: #555;
	min-width: 115px;
	margin-right: 5px;
}

div.detail__group {
	margin: 15px 0;
}

@media (max-width: 600px) {
	div.edit__history__section {
		display: none;
	}
}
</style>
