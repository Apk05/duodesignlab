import React from 'react'

// svgs
import ScrollArrow from '$svgs/ScrollArrow'

const HomeHero: React.FC = () => {
  const goToNextSection = () => {
    if (document) {
      document.getElementById('next-section')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="bg-ddl_brand">
      <div className="flex items-center h-[60vh] md:h-screen ddl-container">
        <h1 className="sr-only">
          We are a humble boutique web design studio, led by a group of young people with design and development background.
        </h1>

        {/* for desktop */}
        <div className="hidden -mb-40 md:block">
          <span className="block main-title text-ddl_brand_light" aria-hidden>
            We are a humble boutique
          </span>
          <span className="block main-title text-ddl_brand_light" aria-hidden>
            web design studio, led by a group
          </span>
          <span className="block main-title text-ddl_brand_light" aria-hidden>
            of young people with design and
          </span>
          <span className="block main-title text-ddl_brand_light" aria-hidden>
            development background.
          </span>
        </div>

        {/* for mobile */}
        <div className="-mb-[5rem] md:hidden">
          <span className="block main-title text-ddl_brand_light" aria-hidden>
            We are a humble
          </span>
          <span className="block main-title text-ddl_brand_light" aria-hidden>
            boutique web design
          </span>
          <span className="block main-title text-ddl_brand_light" aria-hidden>
            studio, led by a group of
          </span>
          <span className="block main-title text-ddl_brand_light" aria-hidden>
            young people with
          </span>
          <span className="block main-title text-ddl_brand_light" aria-hidden>
            design and development
          </span>
          <span className="block main-title text-ddl_brand_light" aria-hidden>
            background.
          </span>
        </div>
      </div>
      <button onClick={goToNextSection}>
        <ScrollArrow className="hidden md:block w-[3.125rem] h-[3.125rem] text-ddl_brand absolute bottom-14 right-32 transform translate-x-1/2" />
      </button>
    </section>
  )
}

export default HomeHero
