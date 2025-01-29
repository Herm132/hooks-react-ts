import { useFetch } from "../hooks/useFetch";

type User = {
  id: number;
  name: string;
  email: string;
  website: string;
};

export const UsuariosComponent = () => {
  const { data, isLoading, errors } = useFetch<User[]>({
    url: "https://jsonplaceholder.typicode.com/users",
  });

  return (
    <div>
      {isLoading && <h4>Cargando...</h4>}
      {errors && <p>Ha ocurrido un error: {errors}</p>}
      {!isLoading && !errors && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Website</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((user) => (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
