// src/lib/authenticate.js

// src/lib/authenticate.js

export async function authenticateUser(username, password) {
    try {
      const res = await fetch("/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
  
      const data = await res.json();
  
      if (res.status === 200 && data.token) {
        return { success: true, token: data.token };
      } else {
        return { success: false, message: data.message || "Invalid credentials" };
      }
    } catch (err) {
      console.error("authenticateUser error:", err);
      return { success: false, message: "Login failed. Please try again." };
    }
  }
  