import { useContext } from 'react';
function Route({ path, children, LocationContext }) {
  const { location } = useContext(LocationContext);
  return location.pathname === path ? children : null;
}   
export default Route;