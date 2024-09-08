1. Install the Vue JS CLI
-- npm install -g @vue/cli --

2. Create the Vue project 
-- create vue-dashboard --

Select the version of Vue you want to init in project.

3. Install the Tailwindcss 
-- npm install -D tailwindcss --
> npm install -D tailwindcss postcss autoprefixer <
-- npx tailwindcss init --
> npc tailwindcss init -p  <

After install config the settings

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```


4. Install and config vue router

-- npm install vue-router@4 --

main.js 
```
import { createApp } from 'vue'
import App from './App.vue'

import './assets/style.css'  
import router from './router'  

const app = createApp(App)
app.use(router)  // Register the router
app.mount('#app')  // Mount the app to the DOM element with the ID 'app'
```

router [
index.js{
```
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

```
routes.js{
```
export default [
    {
      name: "Master",
      path: "/",
      redirect: "/dashboard", 
      children: [
        // Add your child routes here
      ]
    }
  ]
```
}
}

]

5. Install Primevue

# Using npm
npm install primevue

npm install primevue@^3 --save

npm install primeicons --save 

# Using yarn
yarn add primevue

# Using pnpm
pnpm add primevue




