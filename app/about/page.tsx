export default function About() {
  return (
    <main className='min-h-screen bg-gradient-to-b from-blue-100 to-white p-8'>
      <div className='max-w-3xl mx-auto'>
        <h1 className='text-4xl font-extrabold text-center mb-8 text-blue-600'>About Our App</h1>
        
        <section className='bg-white rounded-lg shadow-md p-6 mb-8'>
          <h2 className='text-2xl font-bold mb-4 text-gray-800'>Our Mission</h2>
          <p className='text-gray-600 leading-relaxed'>
            To demonstrate the powerful combination of Next.js and Tailwind CSS through this simple yet feature-rich application. We aim to showcase how these technologies can be used to create beautiful, responsive, and efficient web applications.
          </p>
        </section>
        
        <section className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
          <div className='bg-green-100 rounded-lg p-4'>
            <h3 className='text-xl font-semibold mb-2 text-green-700'>Next.js Features</h3>
            <ul className='list-disc list-inside text-green-600'>
              <li>App Router</li>
              <li>Server Components</li>
              <li>API Routes</li>
              <li>Static Site Generation</li>
            </ul>
          </div>
          <div className='bg-purple-100 rounded-lg p-4'>
            <h3 className='text-xl font-semibold mb-2 text-purple-700'>Tailwind CSS Benefits</h3>
            <ul className='list-disc list-inside text-purple-600'>
              <li>Utility-first approach</li>
              <li>Responsive design</li>
              <li>Customizable</li>
              <li>Performance optimized</li>
            </ul>
          </div>
        </section>
        
        <div className='text-center'>
          <a href='/' className='inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300'>
            Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}