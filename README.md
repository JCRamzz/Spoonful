# Spoonful - Recipe Search Web App

Spoonful is a simple web application that allows you to search for recipes and discover new culinary delights. The app is built using React and fetches recipe data from the Edamam API.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Spoonful is a user-friendly recipe search app that helps you find delicious recipes for various dishes. You can simply enter the name of a dish or an ingredient you want to cook with, and Spoonful will fetch relevant recipes from the Edamam API. The app presents the search results in a list, and you can click on any recipe to view more details.

## Installation

To run Spoonful on your local machine, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies using `npm install`.
4. Obtain your Edamam API key and app ID from [Edamam Developer Dashboard](https://developer.edamam.com/).
5. Create an `env.js` file in the root of the project and set your API key and app ID as constants:

```javascript
// env.js
export const API_KEY = 'YOUR_EDAMAM_API_KEY';
export const APP_ID = 'YOUR_EDAMAM_APP_ID';
```

## Usage
Once you have installed and set up the app, you can start using Spoonful:

1. Enter the name of a dish or an ingredient you want to search for in the search input field.
2. Press the Enter key or click the search button to initiate the search.
3. Spoonful will fetch recipes from the Edamam API based on your search query.
4. The search results will be displayed as a list of recipes.
5. Click on any recipe to view more details in a modal window.
6. To close the modal window, click the close button or outside the modal area.

## Features
- Recipe Search: Easily search for recipes using the search input field.
- Real-time Results: Get instant recipe suggestions as you type in the search field.
- Recipe Details: View detailed information about each recipe, including ingredients and instructions.
- Modal View: The recipe details are presented in a user-friendly modal window.
- Responsive Design: The app is designed to work seamlessly on various screen sizes.

## Dependencies
Spoonful relies on the following dependencies:

- React: A JavaScript library for building user interfaces.
- Edamam API: Provides access to a vast collection of recipes and nutrition data.

## Contributing
We welcome contributions to improve Spoonful and make it even more delightful for users. If you find a bug or have an idea for a new feature, feel free to open an issue or submit a pull request. Please ensure that your contributions align with the project's code of conduct.

## License
Spoonful is licensed under the MIT License, which means you are free to use, modify, and distribute the app as per the terms of the license.

Thank you for your interest in Spoonful! We hope you enjoy discovering and cooking new recipes with our app. If you have any questions or feedback, please don't hesitate to reach out. Happy cooking!

