export default [
    {
        path: '/:catchAll(.*)',
        name: 'NotFoundView',
        component: () => import('../../views/website/error/NotFoundView.vue'),
        meta: {
            resource: 'Auth',
            redirectIfLoggedIn: false,
        }
    },
    {
        path: '/',
        name: 'HomeView',
        component: () => import('../../views/website/HomeView.vue'),
        meta: {
            resource: 'Auth',
            redirectIfLoggedIn: false,
        }
    },
    {
        path: '/cms/home/preview',
        name: 'HomePreviewView',
        component: () => import('../../views/website/HomePreviewView.vue')
    },
    {
        path: '/about',
        name: 'AboutView',
        component: () => import('../../views/website/AboutView.vue'),
        meta: {
            resource: 'Auth',
            redirectIfLoggedIn: false,
        }
    },
    {
        path: '/about#tab1',
        hash: '#tab1',
        name: 'AboutViewTab1',
        component: () => import('../../views/website/AboutView.vue'),
        meta: {
            resource: 'Auth',
            redirectIfLoggedIn: false,
        }
    },
    {
        path: '/about#tab2',
        hash: '#tab2',
        name: 'AboutViewTab2',
        component: () => import('../../views/website/AboutView.vue'),
        meta: {
            resource: 'Auth',
            redirectIfLoggedIn: false,
        }
    },
    {
        path: '/about#tab3',
        hash: '#tab3',
        name: 'AboutViewTab3',
        component: () => import('../../views/website/AboutView.vue'),
        meta: {
            resource: 'Auth',
            redirectIfLoggedIn: false,
        }
    },
    {
        path: '/about#tab4',
        hash: '#tab4',
        name: 'AboutViewTab4',
        component: () => import('../../views/website/AboutView.vue'),
        meta: {
            resource: 'Auth',
            redirectIfLoggedIn: false,
        }
    },
    {
        path: '/about#tab5',
        hash: '#tab5',
        name: 'AboutViewTab5',
        component: () => import('../../views/website/AboutView.vue'),
        meta: {
            resource: 'Auth',
            redirectIfLoggedIn: false,
        }
    },
    {
        path: '/about#tab6',
        hash: '#tab6',
        name: 'AboutViewTab6',
        component: () => import('../../views/website/AboutView.vue'),
        meta: {
            resource: 'Auth',
            redirectIfLoggedIn: false,
        }
    },
    {
        path: '/about#tab7',
        hash: '#tab7',
        name: 'AboutViewTab7',
        component: () => import('../../views/website/AboutView.vue'),
        meta: {
            resource: 'Auth',
            redirectIfLoggedIn: false,
        }
    },
    {
        path: '/cms/career/preview',
        name: 'CareerPreviewView',
        component: () => import('../../views/website/career/CareerPreviewView.vue')
    },
    {
        path: '/cms/about/preview',
        name: 'AboutPreviewView',
        component: () => import('../../views/website/AboutPreviewView.vue')
    },
    {
        path: '/cms/about/preview#tab1',
        hash: '#tab1',
        name: 'AboutPreviewViewTab1',
        component: () => import('../../views/website/AboutPreviewView.vue')
    },
    {
        path: '/cms/about/preview#tab2',
        hash: '#tab2',
        name: 'AboutPreviewViewTab2',
        component: () => import('../../views/website/AboutPreviewView.vue')
    },
    {
        path: '/cms/about/preview#tab3',
        hash: '#tab3',
        name: 'AboutPreviewViewTab3',
        component: () => import('../../views/website/AboutPreviewView.vue')
    },
    {
        path: '/cms/about/preview#tab4',
        hash: '#tab4',
        name: 'AboutPreviewViewTab4',
        component: () => import('../../views/website/AboutPreviewView.vue')
    },
    {
        path: '/cms/about/preview#tab5',
        hash: '#tab5',
        name: 'AboutPreviewViewTab5',
        component: () => import('../../views/website/AboutPreviewView.vue')
    },
    {
        path: '/cms/about/preview#tab6',
        hash: '#tab6',
        name: 'AboutPreviewViewTab6',
        component: () => import('../../views/website/AboutPreviewView.vue')
    },
    {
        path: '/cms/about/preview#tab7',
        hash: '#tab7',
        name: 'AboutPreviewViewTab7',
        component: () => import('../../views/website/AboutPreviewView.vue')
    },
    {
        path: '/cms/business/preview',
        name: 'BusinessPreviewView',
        component: () => import('../../views/website/business/BusinessPreviewView.vue')
    },

    // ================================== PRODUCT ==================================
    {
        path: '/product',
        name: 'ProductView',
        component: () => import('../../views/website/product/ProductView.vue'),
        meta: {
            resource: 'Auth',
            redirectIfLoggedIn: false,
        }
    },
    {
        path: '/cms/product/preview',
        name: 'ProductViewPreview',
        component: () => import('../../views/website/product/ProductViewPreview.vue')
    },
    {
        path: '/product/healthcare',
        name: 'ProductTypeHealthView',
        component: () => import('../../views/website/product/TypeHealthView.vue'),
        meta: {
            resource: 'Auth',
            redirectIfLoggedIn: false,
        }
    },
    {
        path: '/cms/product/healthcare/preview',
        name: 'ProductTypeHealthViewPreview',
        component: () => import('../../views/website/product/TypeHealthViewPreview.vue')
    },
    {
        path: '/product/detail/:id',
        name: 'ProductHealthDetailView',
        component: () => import('../../views/website/product/TypeHealthDetailView.vue'),
        meta: {
            resource: 'Auth',
            redirectIfLoggedIn: false,
        }
    },
    {
        path: '/cms/product/detail/preview/:id',
        name: 'ProductHealthDetailViewPreview',
        component: () => import('../../views/website/product/TypeHealthDetailViewPreview.vue')
    },
    {
        path: '/product/ethical',
        name: 'ProductTypeDrugView',
        component: () => import('../../views/website/product/TypeDrugView.vue'),
        meta: {
            resource: 'Auth',
            redirectIfLoggedIn: false,
        }
    },
    {
        path: '/cms/product/ethical/preview',
        name: 'ProductTypeDrugViewPreview',
        component: () => import('../../views/website/product/TypeDrugViewPreview.vue'),
        meta: {
            resource: 'Auth',
            redirectIfLoggedIn: false,
        }
    },

    // ================================== NEWS ==================================
    {
        path: '/news',
        name: 'NewsView',
        component: () => import('../../views/website/news/NewsView.vue'),
        meta: {
            resource: 'Auth',
            redirectIfLoggedIn: false,
        }
    },
    {
        path: '/news/detail/:id',
        name: 'NewsDetailView',
        component: () => import('../../views/website/news/NewsDetailView.vue'),
        meta: {
            resource: 'Auth',
            redirectIfLoggedIn: false,
        }
    },
    {   
        path: '/cms/news/preview',
        name: 'NewsViewPreview',
        component: () => import('../../views/website/news/NewsViewPreview.vue')
    },
    {
        path: '/cms/news/detail/preview/:id',
        name: 'NewsDetailViewPreview',
        component: () => import('../../views/website/news/NewsDetailViewPreview.vue'),
        meta: {
            resource: 'Auth',
            redirectIfLoggedIn: false,
        }
    },
    // ================================== CAREER ==================================
    {
        path: '/career',
        name: 'CareerView',
        component: () => import('../../views/website/career/CareerView.vue'),
        meta: {
            resource: 'Auth',
            redirectIfLoggedIn: false,
        }
    },
    {
        path: '/career/success',
        name: 'CareerSuccessView',
        component: () => import('../../views/website/career/CareerSuccessView.vue'),
        meta: {
            resource: 'Auth',
            redirectIfLoggedIn: false,
        }
    },
    {
        path: '/career/join/:id',
        name: 'CareerSubmitView',
        component: () => import('../../views/website/career/CareerSubmitView.vue'),
        meta: {
            resource: 'Auth',
            redirectIfLoggedIn: false,
        }
    },
    // ================================== BUSINESS ==================================
    {
        path: '/business',
        name: 'BusinessView',
        component: () => import('../../views/website/business/BusinessView.vue'),
        meta: {
            resource: 'Auth',
            redirectIfLoggedIn: false,
        }
    },
    // ================================== CONTACT ==================================
    {
        path: '/contact',
        name: 'ContactView',
        component: () => import('../../views/website/contact/ContactView.vue'),
        meta: {
            resource: 'Auth',
            redirectIfLoggedIn: false,
        }
    },
    {
        path: '/cms/contact/preview',
        name: 'ContactPreviewView',
        component: () => import('../../views/website/contact/ContactViewPreview.vue')
    },
    // ================================== ADDITIONAL ==================================
    {
        path: '/privacy-policy',
        name: 'PrivacyPoliceView',
        component: () => import('../../views/website/additional/PrivacyPoliceView.vue'),
        meta: {
            resource: 'Auth',
            redirectIfLoggedIn: false,
        }
    },
    {
        path: '/cms/privacy-policy/preview',
        name: 'PrivacyPoliceViewPreview',
        component: () => import('../../views/website/additional/PrivacyPoliceViewPreview.vue')
    },
    {
        path: '/terms-condition',
        name: 'TermsConditionView',
        component: () => import('../../views/website/additional/TermsConditionView.vue'),
        meta: {
            resource: 'Auth',
            redirectIfLoggedIn: false,
        }
    },
    {
        path: '/cms/terms-condition/preview',
        name: 'TermsConditionViewPreview',
        component: () => import('../../views/website/additional/TermsConditionViewPreview.vue')
    },
    {
        path: '/faq',
        name: 'FAQView',
        component: () => import('../../views/website/additional/FAQView.vue'),
        meta: {
            resource: 'Auth',
            redirectIfLoggedIn: false,
        }
    },
    {
        path: '/cms/faq/preview',
        name: 'FAQViewPreview',
        component: () => import('../../views/website/additional/FAQView.vue')
    },
    {
        path: '/farmakovigilans',
        name: 'FarmakovigilansView',
        component: () => import('../../views/website/additional/FarmakovigilansView.vue'),
        meta: {
            resource: 'Auth',
            redirectIfLoggedIn: false,
        }
    },
    {
        path: '/cms/farmakovigilans/preview',
        name: 'FarmakovigilansViewPreview',
        component: () => import('../../views/website/additional/FarmakovigilansViewPreview.vue')
    },
    {
        path: '/search',
        name: 'SearchView',
        props: route => ({ key: route.query.key }),
        component: () => import('../../views/website/additional/SearchView.vue'),
        meta: {
            resource: 'Auth',
            redirectIfLoggedIn: false,
        }
    }
]