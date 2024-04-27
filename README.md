# React Portfolio Website

This project is a personal website that serves as a portfolio and resume platform. It includes sections such as home, about, resume and portfolio. The website showcases my skills, experiences, projects, and contact information.

## Contributing

To contribute to the development of this application, follow these steps:

1. Fork the repo

2. Create a new branch

    ```
    git checkout -b feature/my-feature
    ```

3. Make your changes

4. Commit your changes

    ```
    git commit -m "Add new feature"
    ```

5. Push to the branch

    ```
    git push -u origin feature/my-feature
    ```

6. Create a new Pull Request

| Remember to obtain your own API Keys from [Unsplash API](https://unsplash.com/documentation) to fetch images.

## Features

- Generate: Click and Generate random pictures.
- Fetching from RESTful APIs.
- Showcases: Get to know me better and my projects detail.

## Getting Started

### Dependencies

- EmailJs(^4.3.3): open-source library for sending email without server code
- Fontawesome(^6.5.2): open-source library of web components
- Material-UI: frontend UI components
- prettier(^3.2.5): auto layout extension for code
- react(^18.2.0): library of web frontend framework
- react-router-dom(^6.22.3): enables client side routing

- GitHub API: Used to fetch repository data for the portfolio section
- Unsplash API: Used to fetch random images

### Installation

First, you need to install the dependencies, run:

```npm install```

### Execute Program

To run the program, run: 

```npm start```

## Architecture

The application is built using `React.js` for the frontend. `Material-UI` and `Sass` is used for styling and components. `react-router-dom` is for client side routing. The main components of the architecture include:

- Navbar: Route titles and links to other sections
- Home: Landing page with an introduction to the creator and 
- About: Information about me and the purpose of this website with images fetching from Unsplash API
- Resume: Detailed resume showcasing experiences, skills, and qualifications
- Portfolio: Collection of projects from GitHub API with descriptions, images, charts and links to source code
- Footer: Links to my socials

## Issue Reporting
If you encounter any issues or bugs while using the application, please report them [here](https://github.com/william199612/IFN666_Portfolio/issues) by following these steps:

1. Click on the "Issues" tab in the repository
2. Click on the "New Issue" button
3. Provide a clear and detailed description of the issue, including steps to reproduce it
4. Add any relevant screenshots or error messages
5. Click "Submit new issue"

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
