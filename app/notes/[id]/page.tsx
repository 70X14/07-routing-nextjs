import { fetchNoteById } from '@/lib/api';
import NoteDetails from './NoteDetails.client';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

interface Props {
  params: Promise<{ id: string }>;
}

async function Note({ params }: Props) {
  const { id } = await params;
  const queryClient = new QueryClient();

  queryClient.prefetchQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetails />
    </HydrationBoundary>
  );
}

export default Note;
