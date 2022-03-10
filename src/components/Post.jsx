import { useParams } from "react-router-dom";

export function Post() {
  const params = useParams();

  return (
    <div>
      <h1>postId = {params.id}</h1>
      <h1>name = {params.name}</h1>
    </div>
  );
}
