import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "@/components/HomeStore/MainPage.vue";
import Catalog from "@/components/CatalogStore/MainCatalog.vue";
import NotFound from "@/components/NotFound.vue";


export default createRouter({
	history: createWebHashHistory(),
	routes: [
		{ path: '/', component: Home },
		{ path: '/Home', component: Home },
		{ path: '/Catalog', component: Catalog },
		{ path: '/:cathAll(.*)', component: NotFound }
	],
	computed: {},

})


