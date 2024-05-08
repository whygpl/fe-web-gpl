export default [
  {
    path: "/login",
    name: "auth-login",
    component: () => import("../../views/cms/authentication/Login.vue"),
    meta: {
      resource: "Auth",
      redirectIfLoggedIn: true,
    },
  },
  {
    path: "/cms",
    name: "CmsView",
    component: () => import("../../views/cms/CmsView.vue"),
  },
  {
    path: "/cms/home/slider/edit",
    name: "CmsHomeSliderEdit",
    component: () => import("../../views/cms/home/HomeSliderEdit.vue"),
  },
  {
    path: "/cms/home/aboutus/edit",
    name: "CmsHomeAboutUsEdit",
    component: () => import("../../views/cms/home/HomeAboutUsEdit.vue"),
  },
  {
    path: "/cms/home/product/edit",
    name: "CmsHomeProductEdit",
    component: () => import("../../views/cms/home/HomeProductEdit.vue"),
  },
  {
    path: "/cms/home/quality/edit",
    name: "CmsHomeQualityEdit",
    component: () => import("../../views/cms/home/HomeQualityEdit.vue"),
  },
  {
    path: "/cms/about/head/edit",
    name: "CmsAboutAboutheadEdit",
    component: () => import("../../views/cms/about/AboutAboutheadEdit.vue"),
  },
  {
    path: "/cms/about/company/edit",
    name: "CmsAboutCompanyEdit",
    component: () => import("../../views/cms/about/AboutCompanyEdit.vue"),
  },
  {
    path: "/cms/about/president/edit",
    name: "CmsAboutPresidentEdit",
    component: () => import("../../views/cms/about/AboutPresidentEdit.vue"),
  },
  {
    path: "/cms/about/vision/edit",
    name: "CmsAboutVisionEdit",
    component: () => import("../../views/cms/about/AboutVisionEdit.vue"),
  },
  {
    path: "/cms/about/companyvalue/edit",
    name: "CmsAboutCompanyvalueEdit",
    component: () => import("../../views/cms/about/AboutCompanyvalueEdit.vue"),
  },
  {
    path: "/cms/about/certification/edit",
    name: "CmsAboutCertificationEdit",
    component: () => import("../../views/cms/about/AboutCertificationEdit.vue"),
  },
  {
    path: "/cms/about/office/edit",
    name: "CmsAboutOfficeEdit",
    component: () => import("../../views/cms/about/AboutOfficeEdit.vue"),
  },
  {
    path: "/cms/about/awards/edit",
    name: "CmsAboutAwardsEdit",
    component: () => import("../../views/cms/about/AboutAwardEdit.vue"),
  },
  {
    path: "/cms/product/type/edit",
    name: "CmsProductTypeEdit",
    component: () => import("../../views/cms/product/ProductTypeEdit.vue"),
  },
  {
    path: "/cms/product/category/list",
    name: "CmsProductCategoryList",
    component: () => import("../../views/cms/product/ProductCategoryList.vue"),
  },
  {
    path: "/cms/product/category/add",
    name: "CmsProductCategoryAdd",
    component: () => import("../../views/cms/product/ProductCategoryEdit.vue"),
  },
  {
    path: "/cms/product/category/edit/:id",
    name: "CmsProductCategoryEdit",
    component: () => import("../../views/cms/product/ProductCategoryEdit.vue"),
  },
  {
    path: "/cms/product/group/list",
    name: "CmsProductGroupList",
    component: () => import("../../views/cms/product/ProductGroupList.vue"),
  },
  {
    path: "/cms/product/group/add",
    name: "CmsProductGroupAdd",
    component: () => import("../../views/cms/product/ProductGroupEdit.vue"),
  },
  {
    path: "/cms/product/group/edit/:id",
    name: "CmsProductGroupEdit",
    component: () => import("../../views/cms/product/ProductGroupEdit.vue"),
  },
  {
    path: "/cms/product/list",
    name: "CmsProductList",
    component: () => import("../../views/cms/product/ProductList.vue"),
  },
  {
    path: "/cms/product/add",
    name: "CmsProductAdd",
    component: () => import("../../views/cms/product/ProductEdit.vue"),
  },
  {
    path: "/cms/product/detail/edit/:id",
    name: "CmsProductEdit",
    component: () => import("../../views/cms/product/ProductEdit.vue"),
  },
  {
    path: "/cms/business/edit",
    name: "CmsBusinessEdit",
    component: () => import("../../views/cms/business/BusinessEdit.vue"),
  },
  {
    path: "/cms/business/distributor/add",
    name: "CmsBusinessDistributorAdd",
    component: () =>
      import("../../views/cms/business/BusinessDistributorEdit.vue"),
  },
  {
    path: "/cms/business/distributor/edit/:id",
    name: "CmsBusinessDistributorEdit",
    component: () =>
      import("../../views/cms/business/BusinessDistributorEdit.vue"),
  },
  {
    path: "/cms/business/distributor/list",
    name: "CmsBusinessDistributorList",
    component: () =>
      import("../../views/cms/business/BusinessDistributorList.vue"),
  },
  {
    path: "/cms/business/mitra/edit",
    name: "CmsBusinessMitraEdit",
    component: () => import("../../views/cms/business/BusinessMitraEdit.vue"),
  },
  {
    path: "/cms/career/edit",
    name: "CmsCareerEdit",
    component: () => import("../../views/cms/career/CareerEdit.vue"),
  },
  {
    path: "/cms/career/add",
    name: "CmsCareerAdd",
    component: () => import("../../views/cms/career/CareerDetailEdit.vue"),
  },
  {
    path: "/cms/career/detail/edit/:id",
    name: "CmsCareerDetailEdit",
    component: () => import("../../views/cms/career/CareerDetailEdit.vue"),
  },
  {
    path: "/cms/career/list",
    name: "CmsCareerList",
    component: () => import("../../views/cms/career/CareerList.vue"),
  },
  {
    path: "/cms/career/detail/apply/:id",
    name: "CareerApplyList",
    component: () => import("../../views/cms/career/CareerApplyList.vue"),
  },
  {
    path: "/cms/career/category/list",
    name: "CmsCareerCategoryList",
    component: () => import("../../views/cms/career/CareerCategoryList.vue"),
  },
  {
    path: "/cms/career/category/add",
    name: "CmsCareerCategoryAdd",
    component: () => import("../../views/cms/career/CareerCategoryEdit.vue"),
  },
  {
    path: "/cms/career/category/edit/:id",
    name: "CmsCareerCategoryEdit",
    component: () => import("../../views/cms/career/CareerCategoryEdit.vue"),
  },
  {
    path: "/cms/news/list",
    name: "CmsNewsList",
    component: () => import("../../views/cms/news/NewsList.vue"),
  },
  {
    path: "/cms/news/add",
    name: "CmsNewsAdd",
    component: () => import("../../views/cms/news/NewsEdit.vue"),
  },
  {
    path: "/cms/news/edit/:id",
    name: "CmsNewsEdit",
    component: () => import("../../views/cms/news/NewsEdit.vue"),
  },
  {
    path: "/cms/general/edit",
    name: "CmsGeneralEdit",
    component: () => import("../../views/cms/general/GeneralEdit.vue"),
  },
  {
    path: "/cms/general/privacy/edit",
    name: "CmsGeneralPrivacyEdit",
    component: () => import("../../views/cms/general/GeneralPrivacyEdit.vue"),
  },
  {
    path: "/cms/general/terms/edit",
    name: "CmsGeneralTermsEdit",
    component: () => import("../../views/cms/general/GeneralTermsEdit.vue"),
  },
  {
    path: "/cms/general/farmakovigilans/edit",
    name: "CmsGeneralFarmaEdit",
    component: () =>
      import("../../views/cms/general/GeneralFarmakovigilansEdit.vue"),
  },
  {
    path: "/cms/general/faq/edit",
    name: "CmsGeneralFAQEdit",
    component: () => import("../../views/cms/general/GeneralFAQEdit.vue"),
  },
  {
    path: "/cms/smtp/edit",
    name: "CmsSMTPEdit",
    component: () => import("../../views/cms/general/SMTPEdit.vue"),
  },
  {
    path: "/cms/users",
    name: "CmsUsersList",
    component: () => import("../../views/cms/users/UsersList.vue"),
  },
  {
    path: "/cms/users/add",
    name: "CmsUsersAdd",
    component: () => import("../../views/cms/users/UsersEdit.vue"),
  },
  {
    path: "/cms/users/edit/:id",
    name: "CmsUsersEdit",
    component: () => import("../../views/cms/users/UsersEdit.vue"),
  },
  // {
  //     path: '/about',
  //     name: 'AboutView',
  //     component: () => import('../../views/website/AboutView.vue')
  // }
];
