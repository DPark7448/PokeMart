const handleSubmit = async (e) => {
  e.preventDefault();
  if (password !== confirmPass) {
    setError("Passwords don't match");
    return;
  }

  try {
    const result = await registerUser(userName, password, confirmPass);
    if (result.success) {
      setError(null);
      alert("User successfully created");
      router.push("/login");
    } else if (result.message === "This user already exists") {
      setError("User is already exist");
    } else {
      setError(result.message || "Registration failed.");
    }
  } catch (err) {
    setError("Something went wrong. Please try again.");
  }
};
