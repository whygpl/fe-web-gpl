import { createStore } from "vuex";
import homecms from "./cms/home";
import aboutcms from "./cms/about";
import businesscms from "./cms/business";
import careercms from "./cms/career";
import productcms from "./cms/product";
import generalcms from "./cms/general";
import newscms from "./cms/news";
import home from "./website/home";
import general from "./website/general";
import about from "./website/about";
import business from "./website/business";
import career from "./website/career";
import news from "./website/news";
import product from "./website/product";
import users from "./cms/users";

export default new createStore({
  modules: {
    homecms,
    aboutcms,
    businesscms,
    careercms,
    productcms,
    generalcms,
    newscms,
    home,
    general,
    about,
    business,
    career,
    news,
    product,
    users,
  },
  strict: process.env.DEV,
});
