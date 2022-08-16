import { NextPageWithLayout } from './_app'
import Head from 'next/head'
import { useRouter } from 'next/router'

// third-parties
import { motion } from 'framer-motion'

// layouts
import MainLayout from '$layouts/MainLayout'

// stores
import useCursorStore from '$stores/CursorStore'

// hooks
import useFadeUp from '$hooks/useFadeUp'

const NotFound: NextPageWithLayout = () => {
  const router = useRouter()
  const { changeCursorType, resetCursorType } = useCursorStore()
  const { ref, animation, variants } = useFadeUp()
  const { ref: ref2, animation: animation2, variants: variants2 } = useFadeUp(1)
  const { ref: ref3, animation: animation3, variants: variants3 } = useFadeUp(2)

  return (
    <>
      <Head>
        <title>Page Not Found - Duo Design Lab</title>
      </Head>
      <motion.section
        onMouseEnter={() => changeCursorType('normal_brand_light')}
        onMouseLeave={resetCursorType}
        className="relative bg-ddl_brand h-[calc(100vh-7rem)] lg:h-[calc(100vh-6rem)] flex items-center justify-center ddl-container"
      >
        <div className="px-20 text-center sm:px-0 text-ddl_brand_light">
          <h1 className="sr-only">Page Not Found</h1>
          <motion.p ref={ref} animate={animation} initial="hidden" variants={variants} className="text-big-visual sm:main-title">
            Sorry...
          </motion.p>
          <motion.p ref={ref2} animate={animation2} initial="hidden" variants={variants2} className="mt-5 mb-8 text-body">
            We couldn’t find the page you are looking for.
          </motion.p>
          <motion.button
            onClick={router.back}
            ref={ref3}
            animate={animation3}
            initial="hidden"
            variants={variants3}
            onMouseEnter={() => changeCursorType('hover_brand_light')}
            onMouseLeave={() => changeCursorType('normal_brand_light')}
            className="px-12 py-3 font-medium transition-colors border-2 rounded-full justify-self-end lg:justify-self-start text-body border-ddl_brand_light"
          >
            <div className="-mt-1">Go Back</div>
          </motion.button>
        </div>
      </motion.section>
    </>
  )
}

NotFound.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>
}

export default NotFound
