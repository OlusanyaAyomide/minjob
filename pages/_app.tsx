import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { TailwindIndicator } from '@/components/utils/TailwindIndicator'
import ThemeChanger from '@/components/utils/ThemeChanger'

export default function App({ Component, pageProps }: AppProps) {
  return(<ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <Component {...pageProps} />
            <TailwindIndicator/>
            {/* <ThemeChanger/> */}
        </ThemeProvider>)

}
