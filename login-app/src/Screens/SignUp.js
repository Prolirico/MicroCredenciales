import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";
import logoGoogle from "../Assets/logoGoogle.svg";

function SignUp() {
  // Variables for form input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Add a new state variable for confirming the password
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return; // Stop the submission if passwords don't match
    }

    // Add your sign-up logic here if passwords match
    console.log("Sign Up Attempt:");
    console.log("Email:", email);
    console.log("Password:", password); // Log the actual password submitted

    // For now, just log and navigate back to login or a success page
    navigate("/login"); // Example navigation after successful signup
  };

  // Placeholder function for Google Sign-in
  const handleGoogleSignIn = () => {
    console.log("Attempting Google Sign-in...");
    // Implement your Google Sign-in logic here (e.g., using Firebase, OAuth, etc.)
    alert("Google Sign-in clicked!");
  };

  return (
    // Use a background class similar to Login, or reuse if global
    <div className={styles.fondoSignUp}>
      {" "}
      {/* Assuming a similar background class */}
      <div className={styles.signUpContainer}>
        {" "}
        {/* Container for the form */}
        <form onSubmit={handleSubmit}>
          {/* Heading */}
          <p className={styles.signUpText} id="heading">
            Sign Up
          </p>

          {/* Email Field - similar structure to Login */}
          <div className={styles.inputGroup}>
            {/* You might want to add an email icon SVG here if you have one,
                or reuse the one from Login if appropriate */}
            {/* <svg className={styles.inputIcon} ...>...</svg> */}
            <input
              autoComplete="off"
              placeholder="Email"
              className={styles.inputField}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field - similar structure to Login */}
          <div className={styles.inputGroup}>
            {/* You might want to add a lock icon SVG here */}
            {/* <svg className={styles.inputIcon} ...>...</svg> */}
            <input
              placeholder="Password"
              className={styles.inputField}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {/* Confirm Password Field - Bind to the new state variable */}
          <div className={styles.inputGroup}>
            {/* You might want to add a lock icon SVG here */}
            {/* <svg className={styles.inputIcon} ...>...</svg> */}
            <input
              placeholder="Confirm Password"
              className={styles.inputField}
              type="password"
              value={confirmPassword} // Use confirmPassword state
              onChange={(e) => setConfirmPassword(e.target.value)} // Update confirmPassword state
              required
            />
          </div>

          {/* Add other fields like Confirm Password, Name, etc. here */}

          {/* Sign Up Button */}
          <button className={styles.signupButton} type="submit">
            Sign Up
          </button>

          {/* Separator or "or" text */}
          <div className={styles.separator}>
            <hr />
            <span>OR</span>
            <hr />
          </div>

          {/* Google Sign-in Button */}
          <button
            className={styles.googleSignInButton}
            onClick={handleGoogleSignIn}
            type="button" // Use type="button" to prevent form submission
          >
            <img
              src={logoGoogle}
              alt="Google logo"
              className={styles.googleIcon}
            />
            Sign up with Google
          </button>

          {/* Link back to Login */}
          <div className={styles.loginLink}>
            <p>
              Already have an account?{" "}
              <button
                onClick={() => navigate("/login")}
                className={styles.loginLinkButton}
              >
                {" "}
                {/* Agregue una clase para estilos si es necesario */}
                Login
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
