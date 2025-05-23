import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { QuestionList } from "./_components/QuestionList";
import { getQuestions } from "@/apis/questions/getQuestions";

export default async function Top() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["questions"],
    queryFn: getQuestions,
  });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <QuestionList />
      </HydrationBoundary>
    </>
  );
}
