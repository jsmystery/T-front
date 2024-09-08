import { UserRole } from '@/__generated__/output'
import '@/assets/styles/global.scss'
import AccountHeader from '@/components/layout/account-header/AccountHeader'
import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import { SITE_EMAIL, SITE_NAME, SITE_URL } from '@/constants/seo.constants'
import MainProvider from '@/providers/MainProvider'
import { getUser } from '@/server/auth/get-server-session'
import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'
import type { PropsWithChildren } from 'react'

const montserrat = Montserrat({
	weight: ['400', '500', '600', '700', '800'],
	style: ['normal'],
	subsets: ['latin'],
	variable: '--font-montserrat',
	display: 'swap',
})
//note montserrat.variable has ssr

export const metadata: Metadata = {
	title: {
		absolute: SITE_NAME,
	},
	metadataBase: new URL(SITE_URL),
	openGraph: {
		siteName: SITE_NAME,
		emails: SITE_EMAIL,
		type: 'website',
		locale: 'ru_RU',
	},
	authors: [{ name: SITE_NAME, url: SITE_URL }],
	applicationName: SITE_NAME,
	manifest: '/metadata/manifest/manifest.json',
}

export const viewport: Viewport = {
	maximumScale: 1,
}

export default async function RootLayout({ children }: PropsWithChildren) {
	const user = await getUser()

	const isProvider = user?.role === UserRole.Provider
	const isAdmin = user?.role === UserRole.Admin

	return (
		<html lang="en">
			<body className={montserrat.variable}>
				<MainProvider>
					{user && user.role === UserRole.Provider ? (
						<AccountHeader
							iron={{
								user,
								isAdmin,
								isProvider,
							}}
						/>
					) : (
						<Header />
					)}
					<main>{children}</main>
					<Footer />
					<div id="modal"></div>
				</MainProvider>
			</body>
		</html>
	)
}
