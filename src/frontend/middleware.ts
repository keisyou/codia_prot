import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("Bearer")?.value;
  const path = request.nextUrl.pathname;

  // 認証関連ページのパス
  const authPages = ["/login", "/signup"];
  // 認証が必要なページのパス
  const protectedPages = ["/questions/create"];

  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  // 認証済みユーザーが認証関連ページにアクセスした場合
  if (response.ok && authPages.includes(path)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // 未認証ユーザーが保護されたページにアクセスした場合
  if (!response.ok && protectedPages.includes(path)) {
    const response = NextResponse.redirect(new URL("/login", request.url));
    response.cookies.delete("Bearer");
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/signup", "/login", "/questions/create"],
};
