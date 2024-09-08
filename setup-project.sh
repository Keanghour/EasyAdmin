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



# Make the script executable:
chmod +x setup-project.sh

# Run the script:
./setup-project.sh
