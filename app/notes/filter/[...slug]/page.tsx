import { fetchNotes } from '@/lib/api';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import NotesByTagClient from './Notes.client';

interface NotesByTagProps {
  params: Promise<{ slug: string[] }>;
}

async function NotesByTag({ params }: NotesByTagProps) {
  const { slug } = await params;
  const tag = slug[0];

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['notes', tag],
    queryFn: () => fetchNotes(1, '', tag),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesByTagClient tag={tag} />
    </HydrationBoundary>
  );
}

export default NotesByTag;
