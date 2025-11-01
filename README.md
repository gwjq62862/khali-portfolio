# khali-portfolio 🚀

A portfolio website built with Next.js, TypeScript, and Tailwind CSS, showcasing the skills and projects of Khali, a full-stack developer from Myanmar. 🇲🇲

[![License](https://img.shields.io/badge/License-Unlicensed-red.svg)]()
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%23007ACC.svg)]()
[![Next.js](https://img.shields.io/badge/Next.js-%23000000.svg?style=flat&logo=next.js&logoColor=ffffff)]()
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-%2306B6D4.svg?style=flat&logo=tailwindcss&logoColor=ffffff)]()

## Table of Contents 🗺️

- [Description](#description-pencil)
- [Features](#features-sparkles)
- [Tech Stack](#tech-stack-computer)
- [Installation](#installation-gear)
- [Usage](#usage-rocket)
- [Project Structure](#project-structure-folder)
- [API Reference](#api-reference-link)
- [Contributing](#contributing-handshake)
- [License](#license-copyright)
- [Important Links](#important-links-link)
- [Footer](#footer-copyright)

## Description ✏️

This project is a personal portfolio website for Khali, a 17-year-old full-stack developer based in Myanmar. It's designed to showcase Khali's skills, projects, and experience in a modern and engaging way. The website is built using Next.js, TypeScript, and Tailwind CSS, ensuring a fast, responsive, and visually appealing user experience.

## Features ✨

- **Modern Design**: Utilizes Tailwind CSS for a sleek and responsive design.
- **Interactive UI**: Implements various Radix UI components for enhanced user interaction.
- **Scroll Animations**: Integrates scroll animations to create a dynamic and engaging browsing experience.
- **Client Review Section**: Displays client feedback with a project link.
- **Contact Form**: Includes a functional contact form with email sending capabilities using Resend.
- **Theme Toggle**: Implements a theme toggle using Next Themes for light and dark mode.
- **Skills Showcase**: Highlights key skills and technologies with animated scrolling.
- **Project Display**: Showcases featured projects with descriptions, tech stack, live demo, and code links.
- **Email Sending**: Uses Resend API to send contact form submissions to a designated email address.
- **AlertDialog**: Implements AlertDialog for confirmation message after submitting the contact form.

## Tech Stack 💻

- **Framework**: [Next.js](https://nextjs.org/) - React framework for building performant web applications
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Superset of JavaScript for type safety and improved developer experience
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for rapid UI development
- **UI Components**: [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible UI primitives
- **Email Sending**: [Resend](https://resend.com/) - Email API for sending transactional emails

## Installation ⚙️

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/gwjq62862/khali-portfolio.git
    cd khali-portfolio
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Set up environment variables**:

    *   Create a `.env` file in the root directory.
    *   Add your Resend API key:

        ```
        RESEND_API_KEY=re:your_resend_api_key
        ```

4.  **Run the development server**:

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage 🚀

1.  **Running the Application**

    To start the application, use the following command:

    ```bash
    npm run dev
    ```

    This will start the Next.js development server, and you can view the portfolio in your browser.

2.  **Building the Application**

    To build the application for production, use the following command:

    ```bash
    npm run build
    ```

    This will create an optimized production build of the portfolio.

3. **Sending Email**
 This project has the functionality of sending email.When a user submits the contact form, the `sendEmail` function in `app/actions/sendEmail.ts` is called. This function uses the Resend API to send the form data to the developer's email address.
 To make sure this functionality works:
 *  Set the environment variable `RESEND_API_KEY` with your Resend API key in `.env` file
 *  Ensure the email address in the `to` field of the `resend.emails.send` function in `app/actions/sendEmail.ts` is correctly configured.

**Real-World Use Case:**

This portfolio website serves as a dynamic and engaging platform for Khali to showcase their skills, projects, and experience to potential clients or employers. The contact form allows visitors to easily reach out, and the interactive design ensures a memorable browsing experience.

## Project Structure 📁

```
khali-portfolio/
├── app/
│   ├── actions/
│   │   └── sendEmail.ts           # Server action for sending emails
│   ├── globals.css                 # Global CSS styles
│   ├── layout.tsx                  # Root layout component
│   └── page.tsx                    # Home page component
├── components/
│   ├── ui/                       # Reusable UI components
│   ├── client-review.tsx           # Client review section component
│   ├── contact.tsx                 # Contact section component
│   ├── EmailTemplate.tsx           # Email Template for contact form submissions
│   ├── footer.tsx                  # Footer component
│   ├── hero.tsx                    # Hero section component
│   ├── navbar.tsx                  # Navbar component
│   ├── projects.tsx                # Projects section component
│   └── skills.tsx                  # Skills section component
├── hooks/
│   ├── use-mobile.ts               # Custom hook for detecting mobile devices
│   ├── use-scroll-animation.tsx    # Custom hook for scroll animations
│   └── use-toast.ts                # Custom hook for toast notifications
├── lib/
│   └── utils.ts                    # Utility functions
├── public/                       # Static assets
├── styles/
│   └── globals.css                 # CSS Styles
├── .env.example                  # Example environment variables
├── next.config.mjs               # Next.js configuration
├── package.json                    # Project dependencies and scripts
├── postcss.config.mjs              # PostCSS configuration
├── README.md                     # Project README file
└── tsconfig.json                 # TypeScript configuration
```

## API Reference 🔗

The project uses the Resend API to send emails via the contact form. Here's a breakdown:

### `app/actions/sendEmail.ts`

```typescript
export const sendEmail = async (formData: FormData) => {
    const email = formData.get("email") as string
    const message = formData.get("message") as string
    const name = formData.get("name") as string

    if (!email ||  !message || !name) {
        return { error: "All fields are required" }
    }

    try {
        const data = await resend.emails.send({
            from: 'Portfolio <onboarding@resend.dev>',
            to: ['phyoheinway@gmail.com'],
           subject:"Project",
            react: EmailTemplate({ Name: name,Email: email, Message: message }),
        })

        return { success: true, data }
    } catch (error) {
        console.error(error)
        return { error: "Failed to send email" }
    }
}
```

-   **`sendEmail(formData: FormData)`**: This is a server action that handles sending emails.
    -   It takes `formData` as input, extracts the `email`, `message`, and `name`.
    -   Validates that all fields are present.
    -   Uses the `resend.emails.send` method to send the email.
    -   Returns a success or error message.

## Contributing 🤝

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Submit a pull request.

## License 📜

This project is **unlicensed**.

## Important Links 🔗

- **Live Demo**:[ (If a live demo URL exists, add it here)](https://khali-portfolio.vercel.app/)
- **GitHub Repository**: [https://github.com/gwjq62862/khali-portfolio](https://github.com/gwjq62862/khali-portfolio)

## Footer ©️

khali-portfolio - [https://github.com/gwjq62862/khali-portfolio](https://github.com/gwjq62862/khali-portfolio) by gwjq62862.

⭐️ Fork it, Like it , Give star, report issues!


---
**<p align="center">Generated by [ReadmeCodeGen](https://www.readmecodegen.com/)</p>**
