 import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = resolve => require(['@/components/login/loginWindow'], resolve)
const sidebar = resolve => require(['@/components/sidebar/sidebar'], resolve)

const dataHome = r => require.ensure([], () => r(require('@/components/rightBar/dataHome/dataHome')), 'group-main')
const dataCatalog = r => require.ensure([], () => r(require('@/components/rightBar/dataCatalog/dataCatalog')), 'group-main')
const dataInteraction = r => require.ensure([], () => r(require('@/components/rightBar/dataInteraction/dataInteraction')), 'group-main')
const dataResour = r => require.ensure([], () => r(require('@/components/rightBar/dataResour/dataResour')), 'group-main')
const dataFile = r => require.ensure([], () => r(require('@/components/rightBar/dataFile/dataFile')), 'group-main')
const dataDepend = r => require.ensure([], () => r(require('@/components/rightBar/dataDepend/dataDepend')), 'group-main')
const dataSafety = r => require.ensure([], () => r(require('@/components/rightBar/dataSafety/dataSafety')), 'group-main')

const dtHomefirstChild = r => require.ensure([], () => r(require('@/components/rightbar/dataHome/navChild/firstnavChild/firstnavChild')), 'group-main')
const dtHomesecChild = r => require.ensure([], () => r(require('@/components/rightbar/dataHome/navChild/secnavChild/secnavChild')), 'group-main')

const dtCatalogfirstChild = r => require.ensure([], () => r(require('@/components/rightbar/dataCatalog/navChild/firstnavChild/firstnavChild')), 'group-main')
const dtCatalogsecChild = r => require.ensure([], () => r(require('@/components/rightbar/dataCatalog/navChild/secnavChild/secnavChild')), 'group-main')
const dtCatalogthrChild = r => require.ensure([], () => r(require('@/components/rightbar/dataCatalog/navChild/thrnavChild/thrnavChild')), 'group-main')

const dtInteractionfirstChild = r => require.ensure([], () => r(require('@/components/rightbar/dataInteraction/navChild/firstnavChild/firstnavChild')), 'group-main')
const dtInteractionsecChild = r => require.ensure([], () => r(require('@/components/rightbar/dataInteraction/navChild/secnavChild/secnavChild')), 'group-main')

const dtResourfirstChild = r => require.ensure([], () => r(require('@/components/rightbar/dataResour/navChild/firstnavChild/firstnavChild')), 'group-main')
const dtResoursecChild = r => require.ensure([], () => r(require('@/components/rightbar/dataResour/navChild/secnavChild/secnavChild')), 'group-main')
const dtResourthrChild = r => require.ensure([], () => r(require('@/components/rightbar/dataResour/navChild/thrnavChild/thrnavChild')), 'group-main')



const dtDependfirstChild = r => require.ensure([], () => r(require('@/components/rightbar/dataDepend/navChild/firstnavChild/firstnavChild')), 'group-main')
const dtDependsecChild = r => require.ensure([], () => r(require('@/components/rightbar/dataDepend/navChild/secnavChild/secnavChild')), 'group-main')
const dtDependthrChild = r => require.ensure([], () => r(require('@/components/rightbar/dataDepend/navChild/thrnavChild/thrnavChild')), 'group-main')

export default new Router({
  routes: [
  {path: '/',name: 'login',component:login},
	{path:'/dataHome',name:'dataHome',component:dataHome,
        children:[
                {path:'dtHomefirstChild',name:'dtHomefirstChild',component:dtHomefirstChild},
                {path:'dtHomesecChild',name:'dtHomesecChild',component:dtHomesecChild}
                ]
  },
  {path:'/dataCatalog',name:'dataCatalog',component:dataCatalog,
        children:[
                {path:'dtCatalogfirstChild',name:'dtCatalogfirstChild',component:dtCatalogfirstChild},
                {path:'dtCatalogsecChild',name:'dtCatalogsecChild',component:dtCatalogsecChild},
                {path:'dtCatalogthrChild',name:'dtCatalogthrChild',component:dtCatalogthrChild}
                ]
  },
	{path:'/dataInteraction',name:'dataInteraction',component:dataInteraction,
        children:[
                {path:'dtInteractionfirstChild',name:'dtInteractionfirstChild',component:dtInteractionfirstChild},
                {path:'dtInteractionsecChild',name:'dtInteractionsecChild',component:dtInteractionsecChild}
                ]
  },
	{path:'/dataResour',name:'dataResour',component:dataResour,
        children:[
                {path:'dtResourfirstChild',name:'dtResourfirstChild',component:dtResourfirstChild},
                {path:'dtResoursecChild',name:'dtResoursecChild',component:dtResoursecChild},
                {path:'dtResourthrChild',name:'dtResourthrChild',component:dtResourthrChild}
                ]
  },
	{path:'/dataFile',name:'dataFile',component:dataFile},
	{path:'/dataDepend',name:'dataDepend',component:dataDepend,
        children:[
                {path:'dtDependfirstChild',name:'dtDependfirstChild',component:dtDependfirstChild},
                {path:'dtDependsecChild',name:'dtDependsecChild',component:dtDependsecChild},
                {path:'dtDependthrChild',name:'dtDependthrChild',component:dtDependthrChild}
                ]
  },
	{path:'/dataSafety',name:'dataSafety',component:dataSafety},
  ]
})
