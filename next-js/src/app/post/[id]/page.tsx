type Props = {
  params: {
    id: number;
  };
};

const PostDetailPage = ({ params }: Props) => {
  return <>ID: {params.id} Page</>;
};

export default PostDetailPage;
