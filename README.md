# Next.js App Router Demo

This project demonstrates the usage of the Next.js App Router, a powerful routing system introduced in Next.js 13. The App Router provides a more intuitive and flexible way to handle routing in your Next.js applications.

## Getting Started

To run this project locally:

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
my-app-router-demo/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── posts/
│   │   └── [id]/
│   │       └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── public/
└── package.json
```

## Key Features of the App Router

### 1. File-based Routing

The App Router uses a file-system based approach for defining routes. Each folder in the `app` directory represents a route segment.

- `app/page.tsx` → `/`
- `app/about/page.tsx` → `/about`
- `app/posts/[id]/page.tsx` → `/posts/1`, `/posts/2`, etc.

### 2. Layouts

The `app/layout.tsx` file defines a shared layout for all pages. It includes a navigation menu that appears on every page.

### 3. Server Components

By default, all components in the `app` directory are React Server Components. This improves performance and reduces the amount of JavaScript sent to the client.

### 4. Dynamic Routes

The `app/posts/[id]/page.tsx` file demonstrates a dynamic route. The `[id]` in the folder name becomes a parameter that can be accessed in the component.

## How to Use

### Creating a New Page

To create a new page:

1. Create a new folder in the `app` directory (e.g., `app/contact/`)
2. Add a `page.tsx` file in this folder
3. Export a default React component from this file

Example:

```tsx
// app/contact/page.tsx
export default function Contact() {
  return <h1>Contact Us</h1>;
}
```

### Creating a Dynamic Route

To create a dynamic route:

1. Create a folder with square brackets (e.g., `app/products/[id]/`)
2. Add a `page.tsx` file in this folder
3. Use the `params` prop to access the dynamic segment

Example:

```tsx
// app/products/[id]/page.tsx
export default function Product({ params }: { params: { id: string } }) {
  return <h1>Product {params.id}</h1>;
}
```

### Adding Links

Use the `Link` component from `next/link` to create links between pages:

```tsx
import Link from 'next/link';

<Link href="/about">About</Link>
```

## Learn More

To learn more about the Next.js App Router, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [App Router Documentation](https://nextjs.org/docs/app) - learn about the new App Router.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

Happy coding!