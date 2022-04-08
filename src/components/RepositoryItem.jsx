export function RepositoryItem({ repository }) {
  return (
    <li>
      <strong>{repository?.name ?? 'Default'}</strong>
      <p>{repository?.description}</p>

      <a href={repository?.link} target="_blank">
        Acessar repositórios
      </a>
    </li>
  );
}
