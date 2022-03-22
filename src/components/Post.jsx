// import { useParams } from "react-router-dom";

// export function Post() {
//   const params = useParams();

//   return (
//     <div>
//       <h1>postId = {params.id}</h1>
//       <h1>name = {params.name}</h1>
//     </div>
//   );
// }

import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

export function Post() {
  const status = 200;

  const navigate = useNavigate();

  if (status === 404) {
    return <Navigate to="/notfound" />;
  }

  const onClick = () => {
    navigate("/about");
  };

  return (
    <div>
      <h1>Post</h1>
      <button onClick={onClick}>Click</button>
      <Routes>
        <Route path="/show" element={<h1>Olá mundo</h1>} />
      </Routes>
    </div>
  );
}
