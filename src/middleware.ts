import { NextRequest, NextResponse } from 'next/server'
import { EnumCookies } from './constants/enums.constants'
import { PUBLIC_PAGES } from './constants/url.constants'
import { getSession } from './libs/iron-session.lib'
import { getUser } from '@/server/auth/get-server-session'


export async function middleware(request: NextRequest, response: NextResponse) {
	console.log('check access');

	const refreshToken = request.cookies.get(EnumCookies.REFRESH_TOKEN)?.value
	const { user } = await getSession(request, response)

	if (!refreshToken || !user) {
		return redirectToHome(request)
	}

	const currentUser = await getUser()
	console.log(currentUser.role);
	
	if (request.nextUrl.pathname === '/admin-panel' && currentUser?.role !== 'ADMIN') {
		 return redirectToHome(request)
	}
}

export const config = {
	matcher: ['/my-account', '/admin-panel'],
}

const redirectToHome = (request: NextRequest) => {
	
	return NextResponse.redirect(new URL(PUBLIC_PAGES.HOME, request.url))
}
