import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Import the CSS module
import styles from "./SignUp.module.css";
// Import the Google logo SVG
import logoGoogle from "../Assets/logoGoogle.svg";

function SignUp() {
  // Variables for form input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // You might add other state variables for confirmation password, name, etc.

  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-up logic here
    console.log("Sign Up Attempt:");
    console.log("Email:", email);
    console.log("Password:", password);

    // For now, just log and navigate back to login or a success page
    alert("Sign Up form submitted!");
    // navigate('/login'); // Example navigation after successful signup
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
              <a href="#" onClick={() => navigate("/login")}>
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
