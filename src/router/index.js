import { createRouter, createWebHistory } from 'vue-router'
import { canNavigate } from '@/libs/acl/routeProtection'
import { isUserLoggedIn, getUserData, getHomeRouteForLoggedInUser } from '@/auth/utils'
import website from './routes/website'
// import draft from './routes/draft'
import cms from './routes/cms'

const routes = [
  ...website,
  // ...draft,
  ...cms
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      // return { x: 0, y: 0 };
    }
  }
})

router.beforeEach((to, _, next) => {
  const isLoggedIn = isUserLoggedIn()
  
  if (!canNavigate(to)) {
    console.log(isLoggedIn)
    // Redirect to login if not logged in
    if (!isLoggedIn) return next({ name: 'auth-login' })
  }
  // Redirect if logged in
  if (to.meta.redirectIfLoggedIn && isLoggedIn) {
    console.log("roleY",isLoggedIn);
    const userData = getUserData()
    next(getHomeRouteForLoggedInUser(userData ? userData.role : null))
  }

  return next()
})

export default router
