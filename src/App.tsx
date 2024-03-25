import { Outlet } from 'react-router-dom';
import { EnvDetailsCard } from './EnvDetailsCard';

const App = () => {
  return (
    <>
      <div>
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <h1 className="text-xl font-bold text-center">🚀 Vite</h1>
        </div>
        <Outlet />
      </div>
      {import.meta.env.VITE_ENVIRONMENT !== 'production' && <EnvDetailsCard />}
    </>
  );
};

export default App;
