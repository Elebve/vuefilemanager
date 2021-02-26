import i18n from '@/i18n/index'
import router from '@/router'
import { events } from '@/bus'
import { last } from 'lodash'
import axios from 'axios'
import Vue from 'vue'

const defaultState = {
	processingPopup: undefined,
}

const actions = {
	downloadFolder: ({commit, getters}, folder) => {

		commit('PROCESSING_POPUP', {
			title: i18n.t('popup_zipping.title'),
			message: i18n.t('popup_zipping.message'),
		})

		// Get route
		let route = getters.sharedDetail && !getters.sharedDetail.protected
			? '/api/zip-folder/' + folder.unique_id + '/public/' + router.currentRoute.params.token
			: '/api/zip-folder/' + folder.unique_id

		axios.get(route)
		.then(response => {
			Vue.prototype.$downloadFile(response.data.url, response.data.name)
		})
		.catch(() => {
			Vue.prototype.$isSomethingWrong()
		})
		.finally(() => {
			commit('PROCESSING_POPUP', undefined)
		})

	},
	downloadFiles: ({ commit, getters }) => {
		let files = []

		// get unique_ids of selected files
		getters.fileInfoDetail.forEach(file => files.push(file.unique_id))

		// Get route
		let route = getters.sharedDetail && !getters.sharedDetail.protected
			? '/api/zip/public/' + router.currentRoute.params.token
			: '/api/zip'

			commit('PROCESSING_POPUP', {
				title: i18n.t('popup_zipping.title'),
				message: i18n.t('popup_zipping.message'),
			})

		axios.post(route, {
			files: files
		})
			.then(response => {
				Vue.prototype.$downloadFile(response.data.url, response.data.name)
			})
			.catch(() => {
				Vue.prototype.$isSomethingWrong()
			})
			.finally(() => {
				commit('PROCESSING_POPUP', undefined)
			})
	},
	moveItem: ({ commit, getters, dispatch }, { to_item, noSelectedItem }) => {

		let itemsToMove = []
		let items = [noSelectedItem]

		// If coming no selected item dont get items to move from fileInfoDetail
		if (!noSelectedItem)
			items = getters.fileInfoDetail

		items.forEach(data => itemsToMove.push({
			'force_delete': data.deleted_at ? true : false,
			'unique_id': data.unique_id,
			'type': data.type
		}))

		// Remove file preview
		if (!noSelectedItem)
			commit('CLEAR_FILEINFO_DETAIL')

		// Get route
		let route = getters.sharedDetail && !getters.sharedDetail.protected
			? '/api/move/public/' + router.currentRoute.params.token
			: '/api/move'

		axios
			.post(route, {
				_method: 'post',
				to_unique_id: to_item.unique_id,
				items: itemsToMove
			})
			.then(() => {
				itemsToMove.forEach(item => {
					commit('REMOVE_ITEM', item.unique_id)
					commit('INCREASE_FOLDER_ITEM', to_item.unique_id)

					if (item.type === 'folder')
						dispatch('getAppData')
					if (getters.currentFolder.location === 'public')
						dispatch('getFolderTree')
				})
			})
			.catch(() => Vue.prototype.$isSomethingWrong())
	},
	createFolder: ({ commit, getters, dispatch }, folder) => {

		// Get route
		let route = getters.sharedDetail && !getters.sharedDetail.protected
			? '/api/create-folder/public/' + router.currentRoute.params.token
			: '/api/create-folder'

		axios
			.post(route, {
				parent_id: getters.currentFolder.unique_id,
				name: folder.name,
				icon: folder.icon
			})
			.then(response => {
				commit('ADD_NEW_FOLDER', response.data)

				events.$emit('scrollTop')

				//Set focus on new folder name
				setTimeout(() => {
					events.$emit('newFolder:focus', response.data.unique_id)
				}, 10);

				if (getters.currentFolder.location !== 'public')
					dispatch('getAppData')
				if (getters.currentFolder.location === 'public')
					dispatch('getFolderTree')

			})
			.catch(() => Vue.prototype.$isSomethingWrong())
	},
	renameItem: ({ commit, getters, dispatch }, data) => {

		// Updated name in favourites panel
		if (getters.permission === 'master' && data.type === 'folder')
			commit('UPDATE_NAME_IN_FAVOURITES', data)

		// Get route
		let route = getters.sharedDetail && !getters.sharedDetail.protected
			? '/api/rename-item/' + data.unique_id + '/public/' + router.currentRoute.params.token
			: '/api/rename-item/' + data.unique_id

		axios
			.post(route, {
				name: data.name,
				type: data.type,
				icon: data.icon,
				_method: 'patch'
			})
			.then(response => {
				commit('CHANGE_ITEM_NAME', response.data)

				if (data.type === 'folder' && getters.currentFolder.location !== 'public')
					dispatch('getAppData')
				if (data.type === 'folder' && getters.currentFolder.location === 'public')
					dispatch('getFolderTree')
			})
			.catch(() => Vue.prototype.$isSomethingWrong())
	},
	uploadFiles: ({ commit, getters }, { form, fileSize, totalUploadedSize }) => {
		return new Promise((resolve, reject) => {

			// Get route
			let route = getters.sharedDetail && !getters.sharedDetail.protected
				? '/api/upload/public/' + router.currentRoute.params.token
				: '/api/upload'

			// Create cancel token for axios cancelation
			const CancelToken = axios.CancelToken
			const source = CancelToken.source()

			axios
				.post(route, form, {
					cancelToken: source.token,
					headers: {
						'Content-Type': 'application/octet-stream'
					},
					onUploadProgress: event => {

						var percentCompleted = Math.floor(((totalUploadedSize + event.loaded) / fileSize) * 100)

						commit('UPLOADING_FILE_PROGRESS', percentCompleted >= 100 ? 100 : percentCompleted)

						if (percentCompleted >= 100) {
							commit('PROCESSING_FILE', true)
						}
					}
				})
				.then(response => {
					commit('PROCESSING_FILE', false)

					// Check if user is in uploading folder, if yes, than show new file
					if (response.data.folder_id == getters.currentFolder.unique_id)
						commit('ADD_NEW_ITEMS', response.data)

					resolve(response)
				})
				.catch(error => {
					commit('PROCESSING_FILE', false)

					reject(error)

					switch (error.response.status) {
						case 423:
							events.$emit('alert:open', {
								emoji: '😬😬😬',
								title: i18n.t('popup_exceed_limit.title'),
								message: i18n.t('popup_exceed_limit.message')
							})
							break
						case 415:
							events.$emit('alert:open', {
								emoji: '😬😬😬',
								title: i18n.t('popup_mimetypes_blacklist.title'),
								message: i18n.t('popup_mimetypes_blacklist.message')
							})
							break
						case 413:
							events.$emit('alert:open', {
								emoji: '😟😟😟',
								title: i18n.t('popup_paylod_error.title'),
								message: i18n.t('popup_paylod_error.message')
							})
							break
						default:
							events.$emit('alert:open', {
								title: i18n.t('popup_error.title'),
								message: i18n.t('popup_error.message')
							})
							break
					}

					// Reset uploader
					commit('UPDATE_FILE_COUNT_PROGRESS', undefined)
				})

			// Cancel the upload request
			events.$on('cancel-upload', () => {
				source.cancel()

				// Hide upload progress bar
				commit('PROCESSING_FILE', false)
				commit('UPDATE_FILE_COUNT_PROGRESS', undefined)
			})
		})
	},
	restoreItem: ({ commit, getters }, item) => {

		let itemToRestore = []
		let items = [item]
		let restoreToHome = false

		// If coming no selected item dont get items to restore from fileInfoDetail
		if (!item)
			items = getters.fileInfoDetail
	
		// Check if file can be restored to home directory
		if (getters.currentFolder.location === 'trash')
			restoreToHome = true

		items.forEach(data => itemToRestore.push({
			'type': data.type,
			'unique_id': data.unique_id,
		}))

		// Remove file preview
		commit('CLEAR_FILEINFO_DETAIL')

		axios
			.post(getters.api + '/restore-items' ,{
				to_home: restoreToHome,
				data: itemToRestore,
			})
			.then(

				// Remove file
				items.forEach( data => commit('REMOVE_ITEM', data.unique_id) )
			)
			.catch(() => Vue.prototype.$isSomethingWrong())
	},
	deleteItem: ({ commit, getters, dispatch }, noSelectedItem) => {

		let itemsToDelete = []
		let items = [noSelectedItem]

		// If coming no selected item dont get items to move from fileInfoDetail
		if (!noSelectedItem)
			items = getters.fileInfoDetail

		items.forEach(data => {
			itemsToDelete.push({
				'force_delete': data.deleted_at ? true : false,
				'type': data.type,
				'unique_id': data.unique_id
			})

			// Remove file
			commit('REMOVE_ITEM', data.unique_id)

			// Remove item from sidebar
			if (getters.permission === 'master') {

				if (data.type === 'folder')
					commit('REMOVE_ITEM_FROM_FAVOURITES', data)
			}

			// Remove file
			commit('REMOVE_ITEM', data.unique_id)

			// Remove item from sidebar
			if (getters.permission === 'master') {

				if (data.type === 'folder')
					commit('REMOVE_ITEM_FROM_FAVOURITES', data)
			}
		})

		// Remove file preview
		if (!noSelectedItem) {
			commit('CLEAR_FILEINFO_DETAIL')
		}

		// Get route
		let route = getters.sharedDetail && !getters.sharedDetail.protected
			? '/api/remove-item/public/' + router.currentRoute.params.token
			: '/api/remove-item'

		axios
			.post(route, {
				_method: 'post',
				data: itemsToDelete
			})
			.then(() => {

				itemsToDelete.forEach(data => {

					// If is folder, update app data
					if (data.type === 'folder') {

						if (data.unique_id === getters.currentFolder.unique_id) {

							if (getters.currentFolder.location === 'public') {
								dispatch('browseShared', [{ folder: last(getters.browseHistory), back: true, init: false }])
							} else {
								dispatch('getFolder', [{ folder: last(getters.browseHistory), back: true, init: false }])
							}
						}
					}
				})

				if (getters.currentFolder.location !== 'public')
					dispatch('getAppData')

				if (getters.currentFolder.location === 'public')
					dispatch('getFolderTree')

			})
			.catch(() => Vue.prototype.$isSomethingWrong())
	},
	emptyTrash: ({ commit, getters }) => {

		// Clear file browser
		commit('LOADING_STATE', { loading: true, data: [] })

		axios
			.post(getters.api + '/empty-trash', {
				_method: 'delete'
			})
			.then(() => {
				commit('LOADING_STATE', { loading: false, data: [] })
				events.$emit('scrollTop')

				// Remove file preview
				commit('CLEAR_FILEINFO_DETAIL')
			})
			.catch(() => Vue.prototype.$isSomethingWrong())
	}
}

const mutations = {
	PROCESSING_POPUP(state, status) {
		state.processingPopup = status
	}
}

const getters = {
	processingPopup: state => state.processingPopup
}

export default {
	state: defaultState,
	mutations,
	actions,
	getters
}
