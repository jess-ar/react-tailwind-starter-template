#  💻React and TailwindCSS: A Ready-to-Use Starter Template

This project is a **template** ready to use with React and TailwindCSS. It includes dark mode configurations, custom gradients, and a language toggle system.

## 🔧 Prerequisites

1. [Node.js](https://nodejs.org/)

## 🛠 Installation

1. **Clone this repository:**
   ```bash
   git clone https://github.com/jess-ar/react-tailwind-starter-template.git
   ```

2. **Access the project:**
   ```bash
   cd react-tailwind-starter-template
   ```

3. **Install the dependencies:**
   ```bash
   npm install
   ```

## 📦Tailwind Configuration
This project already includes the most relevant TailwindCSS configuration, but you can customize it to your liking.


## 🌈 Theme Customization

The template comes with custom CSS variables defined in `src/index.css` to manage light and dark themes. These variables are expressed in `rgb` to ensure that the colors are directly visible in most code editors, making them easier to visualize.

- **Light mode:** The colors are defined in the section `:root`.
- **Dark mode:** The colors are defined in the `.dark` class.

If you use Visual Studio Code, the RGB values will be displayed as a small color preview box, making it easier to understand the colors you're using in the project, but you can adjust them to your liking.

## 🚀 Starting the Project

- **Development:**
   ```bash
   npm run dev
   ```
   Use this command to start the development server. The server will automatically reload 	when changes are detected in your code.

## 📂 Alias Configuration

To simplify imports and make the codebase easier to navigate, an alias `@` is set up to refer to the `src` directory. This allows you to import components, utilities, and other files from the `src` folder without needing to use relative paths.

For example, instead of writing:

import Button from '../../components/Button';

You can write:

import Button from '@/components/Button';

This configuration is defined in the `vite.config.js` file:

   ```bash
   resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
   ```

The path module from Node.js is used to resolve absolute paths in the project, ensuring that the alias @ points to the correct directory regardless of the environment you're working in.

### Benefits:
1. **Avoid long relative paths:** Using relative paths (like ../../) can become confusing as the project grows, especially when you move or refactor files.
2. **Cleaner code:** The code becomes more readable and easier to follow.
3. **Easy to adapt:** If you decide to change the folder structure later on, you only need to update the alias in the configuration, without having to change all the imports.


## 🖼 Screenshots

**Light Mode:**

![Light Mode](./assets/screenshots/light.png)

**Dark Mode:**

![Dark Mode](./assets/screenshots/dark.png)

### 🎉 That's all, folks!

Thanks for checking out this project! If you enjoyed it, feel free to give it a ⭐️ on GitHub and follow me for more awesome projects!

Let's stay connected:
- **GitHub:** [jess-ar](https://github.com/jess-ar)
- **LinkedIn:** [Jessica Arroyo Lebrón](https://www.linkedin.com/in/jessica-arroyo-lebron/)

Got any questions or just want to say hi? Shoot me a message — I'd love to hear from you! ✨
