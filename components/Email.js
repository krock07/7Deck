// // // import React, { useState } from "react";
// // // import Link from "next/link";
// // // import validator from "validator";

// // // const Email = () => {
// // //   const [email, setEmail] = useState("");
// // //   const [emailError, setEmailError] = useState("");

// // //   const validateEmail = (e) => {
// // //     let email = e.target.value;

// // //     if (validator.isEmail(email)) {
// // //       setEmailError("Valid Email :)");

// // //       console.log(emailError);
// // //     } else {
// // //       setEmailError("Enter valid Email!");
// // //     }
// // //   };

// // //   function handleChange(event) {
// // //     setEmail(event.target.value);
// // //     console.log(email);
// // //   }

// // //   const sendToPage = () => {};

// // //   return (
// // //     <div
// // //       style={{
// // //         display: "flex",
// // //         justifyContent: "center",
// // //         alignItems: "center",
// // //         height: "100vh ",
// // //       }}
// // //     >
// // //       <form>
// // //         <div>
// // //           <pre>
// // //             <h2>Please enter email address for access</h2>
// // //             <span>Enter Email: </span>
// // //             <input
// // //               type="text"
// // //               id="userEmail"
// // //               onChange={(e) => validateEmail(e)}
// // //             ></input>{" "}
// // //             <input disabled={!emailError} type="submit" value="Submit" />
// // //             <br />
// // //             <span
// // //               style={{
// // //                 fontWeight: "bold",
// // //                 color: "red",
// // //               }}
// // //             >
// // //               {emailError}
// // //             </span>
// // //           </pre>
// // //         </div>
// // //         {/* <label>
// // //           Email
// // //           <input
// // //             type="email"
// // //             name="email"
// // //             value={email}
// // //             // onChange={(e) => setEmail(e.target.value)}
// // //             onChange={handleChange}
// // //           />
// // //         </label>

// // //         <Link href="/">
// // //           <input disabled={!email} type="submit" value="Submit" />
// // //         </Link> */}
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default Email;

// import React from "react";
// import { useForm } from "react-hook-form";
// import Router from "next/router";

// export default function App() {
//   //   console.log(watch("example")); // watch input value by passing the name of it

//   return (
//     /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//         flexDirection: "column",
//       }}
//     >
//       <h1>Enter your email for access</h1>

//       <div>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           {/* register your input into the hook by invoking the "register" function */}

//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-around",
//               alignItems: "center",

//               width: "700px",
//               paddingLeft: "80px",
//               paddingRight: "80px",
//             }}
//           >
//             <div>
//               <input
//                 style={{
//                   //   marginBottom: "5vh",
//                   borderRight: "#fff",
//                   borderTop: "#fff",
//                   borderLeft: "#fff",
//                   backgroundColor: "transparent",
//                   outline: "none",
//                   color: "black",
//                   caretColor: "white",
//                   borderBorder: "solid 2px #666",
//                 }}
//                 placeholder="Enter Email"
//                 defaultValue="Enter email"
//                 {...register("exampleRequired", {
//                   required: true,
//                   pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
//                 })}
//               />
//             </div>

//             {/* include validation with required or other standard HTML validation rules */}
//             {/* <input {...register("exampleRequired", { required: true })} /> */}
//             {/* errors will return when field validation fails  */}
//             {errors.exampleRequired && <span>This field is required</span>}

//             <div>
//               <input
//                 style={{
//                   background: "#89503d",
//                   //   width: "100%",
//                   padding: "2vh",
//                   border: "none",
//                   cursor: "pointer",
//                   borderRadius: "20px 20px",
//                 }}
//                 type="submit"
//               />
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// import { Router } from "@material-ui/icons";
import React from "react";
import Router from "next/router";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    Router.push("/");
  };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f5f6fa",
      }}
    >
        <div></div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            style={{
              width: "360px",
              background: "#fff",
              color: "#a3a3a3",
              font: "inherit",
              boxShadow: "0 6px 10px 0 rgba(0, 0, 0 , .1)",
              border: "0",
              outline: "0",
              padding: "22px 18px",
            }}
            placeholder="Your E-Mail Address"
            {...register("exampleRequired",  {
              required: true,
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            })}
          />

          {/* {errors.validEmail && <span>Enter valid email</span>} */}
          <button
            type="submit"
            style={{
              display: "inline-block",
              backgroundColor: "#98503d",
              color: "#fffaf1",
              marginLeft: "-86px",
              border: "0",
              outline: "0",
              padding: "12px 36px",
              transition: "all 200ms ease-in",
              cursor: "pointer",
              borderRadius: "3px",
            }}
          >
            Send
          </button>
        </form>
        <div>
          {errors.exampleRequired && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
        </div>
      </div>
    </div>

    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   {/* register your input into the hook by invoking the "register" function */}

    //   {/* include validation with required or other standard HTML validation rules */}
    //   <input
    //     defaultValue="Enter Email..."
    //     {...register("exampleRequired", {
    //       required: true,
    //       pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    //     })}
    //   />
    //   {/* errors will return when field validation fails  */}
    //   {errors.exampleRequired && <span>This field is required</span>}

    //   <input type="submit" />
    // </form>
  );
}
