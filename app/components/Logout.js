// LogoutButton.js
import { auth } from '../firebase'; // Update the path according to your setup

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      await auth.signOut();
      // Redirect or perform any action after logout (if needed)
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
