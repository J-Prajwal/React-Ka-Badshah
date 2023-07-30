import { useState } from "react";

function App() {
  const [userDetails, setUserDetails] = useState({
    fullName: "",
    password: "",
    confirmPassword: "",
    aboutYourself: "",
  });

  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const handleOnChange = (e) => {
    const { name, value, checked } = e.target;

    if (checked) {
      setUserDetails((prev) => ({ ...prev, [name]: checked }));
    } else {
      setUserDetails((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userDetails.password !== userDetails.confirmPassword) {
      setPasswordMismatch(true);
    } else {
      setPasswordMismatch(false);
      setUserDetails({
        fullName: "",
        password: "",
        confirmPassword: "",
        aboutYourself: "",
        isDisabled: false,
      });
      alert(JSON.stringify(userDetails));
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "30%",
          margin: "auto",
          gap: "1rem",
        }}
      >
        <input
          required
          name='fullName'
          onChange={handleOnChange}
          type='text'
          placeholder='full name'
          value={userDetails.fullName}
        />
        <input
          required
          name='password'
          onChange={handleOnChange}
          type='password'
          placeholder='password'
          value={userDetails.password}
        />
        <input
          required
          name='confirmPassword'
          onChange={handleOnChange}
          type='password'
          placeholder='confirm password'
          value={userDetails.confirmPassword}
        />
        <span
          style={{
            color: "red",
            marginTop: "-4%",
            fontSize: "12px",
            display: !passwordMismatch && "none",
          }}
        >
          * Confirm Password must be same as password
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <label htmlFor='isDisabled'>Physically Disabled?</label>
          <input
            type='checkbox'
            name='isDisabled'
            id='isDisabled'
            onChange={handleOnChange}
            checked={userDetails.isDisabled}
          />
        </div>
        <textarea
          name='aboutYourself'
          onChange={handleOnChange}
          cols='30'
          rows='5'
          placeholder='About yourself'
          value={userDetails.aboutYourself}
        ></textarea>
        <input type='submit' />
      </form>
    </div>
  );
}

export default App;
