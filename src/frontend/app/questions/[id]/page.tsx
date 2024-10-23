import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getQuestion } from "@/api/questions/getQuestion";
import { getComments } from "@/api/comments/getComments";
import { QuestionItem } from "./_components/QuestionItem";
import { CommentList } from "./_components/CommentList";
import { CommentForm } from "./_components/CommentForm";

export default async function Show({ params }: { params: { id: string } }) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["question", params.id],
    queryFn: () => getQuestion({ id: params.id }),
  });

  await queryClient.prefetchQuery({
    queryKey: ["comments", params.id],
    queryFn: () => getComments({ id: params.id }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <QuestionItem questionId={params.id} />
      <CommentList questionId={params.id} />
      <CommentForm questionId={params.id} />
    </HydrationBoundary>
  );
}
