export interface FetchApiProps<T> {
  method: "GET" | "POST" | "PATCH" | "DELETE";
  url: string;
  // https://developer.mozilla.org/ja/docs/Web/API/Headers
  headerOptions?: Record<string, string>;
  body?: T;
  nextOptions?: {
    /*
      時間ベースの再検証
      一定時間が経過したデータを自動的に再検証する。変更頻度が低く、鮮度がそれほど重要でないデータに有効。
      https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#time-based-revalidation
    */
    revalidate?: number;

    /*
      オンデマンド再検証
      イベント（フォーム送信など）に基づいてデータを手動で再検証する。
      オンデマンド再検証では、タグベースまたはパスベースのアプローチを使用して、データのグループを一度に再検証できます。
      これは、最新のデータをできるだけ早く表示したい場合に便利です（ヘッドレスCMSのコンテンツが更新された場合など）。
      https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#on-demand-revalidation
    */
    tags?: string[];
  };
  // https://developer.mozilla.org/ja/docs/Web/API/Request/cache
  cache?: RequestCache;
  mode?: RequestMode;
  credentials?: RequestCredentials;
  redirect?: RequestRedirect;
  referrerPolicy?: ReferrerPolicy;
  integrity?: string;
  keepalive?: boolean;
  signal?: AbortSignal;
}
