import { NextRequest, NextResponse } from 'next/server'
import { EnumCookies } from './constants/enums.constants'
import { PUBLIC_PAGES } from './constants/url.constants'
import { getSession } from './libs/iron-session.lib'

export async function middleware(request: NextRequest, response: NextResponse) {
	// console.log('check access');

	const refreshToken = request.cookies.get(EnumCookies.REFRESH_TOKEN)?.value
	const { user } = await getSession(request, response)

	if (!refreshToken || !user) {
		return redirectToHome(request)
	}
}

export const config = {
	matcher: ['/my-account'],
}

const redirectToHome = (request: NextRequest) => {
	
	return NextResponse.redirect(new URL(PUBLIC_PAGES.HOME, request.url))
}
