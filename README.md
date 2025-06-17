For now we'll store the JWT in localStorage. But for a stretch goal, I'll actually implement cookies from the backend.

When logging out, it throws an error trying to make a GET request because the token value has changed. The problem is somewhere in pages/Dashboard.jsx and components/LogoutButton.jsx
