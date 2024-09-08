import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes' 

// Define the Router function that creates and returns the router instance
function Router() {
  const router = createRouter({
    history: createWebHistory(), // Use createWebHistory to manage browser history
    routes // Routes need to be passed here
  })
  return router
}

// Export the router instance
const router = Router()
export default router
