import "./styles.css";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { CreateForm } from "./_component/CreateForm";
import { getCategories } from "./getCategories";

export default async function Create() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return (
    <div className="wrapper">
      <h2 className="page-title">質問作成</h2>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <CreateForm />
      </HydrationBoundary>
    </div>
  );
}
