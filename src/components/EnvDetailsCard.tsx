export const EnvDetailsCard = () => {
  return (
    <div>
      <h2>Environment Details</h2>
      <p>Version: {__APP_VERSION__}</p>
      <p>Environment: {import.meta.env.VITE_ENVIRONMENT ?? 'localhost'}</p>
    </div>
  );
};
