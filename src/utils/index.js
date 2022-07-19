export const signUp = async (username, email, password, setter) => {
    try {
      const response = await fetch("http://localhost:5001/user", {
        method: "POST", 
        headers: { "Content-Type": "application/json" }, // sending Json data
        body: JSON.stringify({
          username,
          email,
          password,
        }), 
      });
      const data = await response.json();
      console.log(data);
      setter(data.user.username);
    } catch (error) {
      console.log(error);
    }
  };