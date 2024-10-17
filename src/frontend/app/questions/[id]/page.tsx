import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getQuestion } from "@/api/questions/getQuestion";
import { QuestionItem } from "./_components/QuestionItem";

export default async function Show({ params }: { params: { id: string } }) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["question", params.id],
    queryFn: () => getQuestion({ id: params.id }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <QuestionItem questionId={params.id} />
    </HydrationBoundary>
  );
}
