import './App.css';
import { useEffect, useState } from 'react';
import Signin from './components/Signin';
import Signup from './components/Signup';
import ResponsiveAppBar from './components/Appbar';
import { About as Ab } from './components/Info';
import Plumbing from './components/Plumbing';
import Cleaning from './components/Cleaning';
import Admin from './components/Admin';
import Product from './components/Product';
import Cartpage from './components/Cartpage';
import Billing from './components/Billing';
import Carpenter from './components/Carpentary';
import Home from './components/Home';
import Services from './components/Services';
import MechanicalRepair from './components/MechanicalRepair';  // Import MechanicalRepair component
import ApplianceRepair from './components/ApplianceRepair';  // Import ApplianceRepair component
import PackerMovers from './components/PackerMovers';  // Import PackersMovers component
import PestControl from './components/PestControl';  // Import PestControl component

const isAuthorized = (roleRequired) => {
  const userRole = localStorage.getItem("role");
  return roleRequired.includes(userRole);
};

function App({ store }) {
  const [currentPage, setCurrentPage] = useState(store.getState());

  // Subscribe to store changes
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setCurrentPage(store.getState());
    });
    return () => unsubscribe();
  }, [store]);

  function Display() {
    switch (currentPage) {
      case "Home":
        return <Home store={store} />;
      case "Signin":
        return <Signin store={store} />;
      case "Signup":
        return <Signup />;
      case "Plumbing":
        return isAuthorized(["1", "2"]) ? <Plumbing store={store} /> : <Signin store={store} />;
      case "Cleaning":
        return isAuthorized(["1", "2"]) ? <Cleaning store={store} /> : <Signin store={store} />;
      case "Carpenter":
        return isAuthorized(["1", "2"]) ? <Carpenter store={store} /> : <Signin store={store} />;
      case "MechanicalRepair":  // New route for Mechanical Repair
        return isAuthorized(["1", "2"]) ? <MechanicalRepair store={store} /> : <Signin store={store} />;
      case "ApplianceRepair":  // New route for Appliance Repair
        return isAuthorized(["1", "2"]) ? <ApplianceRepair store={store} /> : <Signin store={store} />;
      case "PackersMovers":  // New route for Packers & Movers
        return isAuthorized(["1", "2"]) ? <PackerMovers store={store} /> : <Signin store={store} />;
      case "PestControl":  // New route for Pest Control
        return isAuthorized(["1", "2"]) ? <PestControl store={store} /> : <Signin store={store} />;
      case "About":
        return <Ab />;
      case "Admin":
        return isAuthorized(["1"]) ? <Admin /> : <Signin store={store} />;
      case "Product":
        return isAuthorized(["1", "2"]) ? <Product store={store} /> : <Signin store={store} />;
      case "Cartpage":
        return isAuthorized(["1", "2"]) ? <Cartpage store={store} /> : <Signin store={store} />;
      case "Billing":
        return isAuthorized(["1", "2"]) ? <Billing store={store} /> : <Signin store={store} />;
      case "Services":
        return isAuthorized(["1", "2"]) ? <Services store={store} /> : <Signin store={store} />;
      default:
        return <Signin store={store} />;
    }
  }

  return (
    <div className="container">
      <div className="header" style={{ display: "flex" }}>
        <div className="menubar" style={{ width: "100%" }}>
          <ResponsiveAppBar store={store} />
        </div>
      </div>
      <div className="main-content">
        <Display />
      </div>
    </div>
  );
}

export default App;
