# vue-dashboard

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

<hr><hr>

<be>

#!/bin/bash

# Define project name
PROJECT_NAME="vue-dashboard"

# Install Vue CLI globally
echo "Installing Vue CLI..."
npm install -g @vue/cli

# Create a new Vue project
echo "Creating Vue project: $PROJECT_NAME..."
vue create $PROJECT_NAME

# Navigate to the project directory
cd $PROJECT_NAME

# Install Tailwind CSS and its dependencies
echo "Installing Tailwind CSS..."
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Configure Tailwind CSS
echo "Configuring Tailwind CSS..."
cat <<EOL > tailwind.config.js
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
EOL

cat <<EOL > src/assets/style.css
@tailwind base;
@tailwind components;
@tailwind utilities;
EOL

# Install Vue Router
echo "Installing Vue Router..."
npm install vue-router@4

# Create router configuration files
echo "Creating router configuration files..."
mkdir -p src/router

cat <<EOL > src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

function Router() {
  const router = createRouter({
    history: createWebHistory(),
    routes
  })
  return router
}

const router = Router()
export default router
EOL

cat <<EOL > src/router/routes.js
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
EOL

# Install PrimeVue and its dependencies
echo "Installing PrimeVue..."
npm install primevue primeicons

# Provide instructions to the user
echo "Setup complete!"
echo "Remember to import PrimeVue and configure it in your main.js file."
echo "Don't forget to add the Tailwind CSS import to your src/assets/style.css file."



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






# Make the script executable:
chmod +x setup-project.sh

# Run the script:
./setup-project.sh
