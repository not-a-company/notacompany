export default function SiteFooter() {
  return (
    <footer className='border-t-2 border-black mt-12 md:mt-16 p-4 md:p-6'>
      <div className='max-w-4xl mx-auto text-center'>
        <p className='text-sm sm:text-base mb-3'>
          We meet our clients at our very own special place by the sea:{' '}
          <a
            href='https://www.notacowork.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='underline hover:no-underline font-medium'
          >
            notacowork.com
          </a>
        </p>
        <p className='text-sm sm:text-base'>
          &copy; 2025 notacompany.com. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
