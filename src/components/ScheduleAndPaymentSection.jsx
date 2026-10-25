"use client";

import { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import SecurePaymentSection from "./SecurePaymentSection";

/* ================= COLORS & BRANDING ================= */
const GoldAccent = "#E2B04A";
const MidGreen = "#11382b";
const WarmBg = "#FAF8F4";
const CardBg = "#FFFFFF";
const DarkText = "#1A1A1A";
const MutedText = "#66625b";
const BorderColor = "#E2DDD5";

/* ================= STYLED COMPONENTS ================= */
const SectionWrapper = styled.section`
  width: 100%;
  background-color: ${WarmBg};
  padding: 5rem 1.5rem;
  box-sizing: border-box;
  font-family: inherit;
  color: ${DarkText};
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
`;

const HeaderBlock = styled.div`
  text-align: center;
  max-width: 650px;
  margin: 0 auto 2rem;

  .tag {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.22em;
    color: ${GoldAccent};
    text-transform: uppercase;
    display: inline-block;
    margin-bottom: 0.6rem;
    position: relative;

    &::before,
    &::after {
      content: "—";
      margin: 0 0.5rem;
    }
  }

  h2 {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 2.2rem;
    font-weight: 400;
    color: ${DarkText};
    margin: 0 0 0.8rem 0;
  }

  p {
    font-size: 0.85rem;
    color: ${MutedText};
    line-height: 1.6;
    margin: 0;
    font-weight: 300;
  }
`;

/* ----- APPOINTMENT FORM CARD ----- */
const FormCard = styled.form`
  background: ${CardBg};
  border: 1px solid ${BorderColor};
  border-radius: 4px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);

  @media (max-width: 600px) {
    padding: 1.5rem 1.25rem;
  }
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  margin-bottom: 1.25rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  label {
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    color: ${MutedText};
    text-transform: uppercase;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.8rem;
    background-color: ${WarmBg};
    border: 1px solid ${BorderColor};
    border-radius: 2px;
    font-size: 0.85rem;
    color: ${DarkText};
    outline: none;
    box-sizing: border-box;

    &:focus {
      border-color: ${GoldAccent};
    }
  }

  textarea {
    min-height: 110px;
    resize: vertical;
  }
`;

const SubmitGreenBtn = styled.button`
  width: 100%;
  padding: 0.9rem;
  background-color: ${MidGreen};
  color: #ffffff;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.92;
  }
`;

/* ----- MAKE A PAYMENT CARD ----- */
const PaymentCard = styled.div`
  max-width: 420px;
  margin: 0 auto;
  background: ${CardBg};
  border: 1px solid ${BorderColor};
  border-radius: 4px;
  padding: 2rem 1.8rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.02);
  width: 100%;
  box-sizing: border-box;
`;

const AmountInputWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.2rem;

  input {
    flex: 1;
    padding: 0.75rem;
    border: 1px solid ${BorderColor};
    border-radius: 2px;
    font-size: 0.88rem;
    outline: none;
    background: ${WarmBg};

    &:focus {
      border-color: ${GoldAccent};
    }
  }

  select {
    width: 70px;
    padding: 0.75rem;
    border: 1px solid ${BorderColor};
    border-radius: 2px;
    font-size: 0.88rem;
    background: ${WarmBg};
    outline: none;
    cursor: pointer;
  }
`;

const PayBtn = styled.button`
  width: 100%;
  padding: 0.85rem;
  background-color: ${WarmBg};
  color: ${MutedText};
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  border: 1px solid ${BorderColor};
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: all 0.2s;

  &:hover {
    border-color: ${GoldAccent};
    color: ${DarkText};
  }
`;

/* ================= COMPONENT ================= */
// export default function ScheduleAndPaymentSection() {
//   const [appointment, setAppointment] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     preferredDate: "",
//     message: "",
//   });

//   const [paymentAmount, setPaymentAmount] = useState("");
//   const [currency, setCurrency] = useState("₦");

//   const handleAppointmentSubmit = (e) => {
//     e.preventDefault();
//     Swal.fire({
//       title: "Appointment Requested 🎉",
//       text: "Interested in a property? Our team will reach out shortly to confirm your viewing.",
//       icon: "success",
//       confirmButtonColor: MidGreen,
//     });
//   };

//   const handlePayment = () => {
//     if (!paymentAmount) {
//       Swal.fire("Enter Amount", "Please enter an amount to proceed with payment.", "warning");
//       return;
//     }
//     Swal.fire(
//       "Payment Initiated",
//       `Redirecting to payment gateway for ${currency}${paymentAmount}...`,
//       "info"
//     );
//   };

//   return (
//     <SectionWrapper>
//       <Container>
//         {/* 1. SCHEDULE AN APPOINTMENT SECTION */}
//         <div>
//           <HeaderBlock>
//             <span className="tag">BOOK A VIEWING</span>
//             <h2>Schedule an Appointment</h2>
//             <p>
//               Interested in a property? Fill out the form below and our team will
//               reach out to confirm your viewing.
//             </p>
//           </HeaderBlock>

//           <FormCard onSubmit={handleAppointmentSubmit}>
//             <FormGrid>
//               <FormGroup>
//                 <label>FULL NAME</label>
//                 <input
//                   type="text"
//                   placeholder="Your name"
//                   required
//                   value={appointment.fullName}
//                   onChange={(e) =>
//                     setAppointment({ ...appointment, fullName: e.target.value })
//                   }
//                 />
//               </FormGroup>

//               <FormGroup>
//                 <label>EMAIL</label>
//                 <input
//                   type="email"
//                   placeholder="Email address"
//                   required
//                   value={appointment.email}
//                   onChange={(e) =>
//                     setAppointment({ ...appointment, email: e.target.value })
//                   }
//                 />
//               </FormGroup>
//             </FormGrid>

//             <FormGrid>
//               <FormGroup>
//                 <label>PHONE</label>
//                 <input
//                   type="tel"
//                   placeholder="Phone number"
//                   required
//                   value={appointment.phone}
//                   onChange={(e) =>
//                     setAppointment({ ...appointment, phone: e.target.value })
//                   }
//                 />
//               </FormGroup>

//               <FormGroup>
//                 <label>PREFERRED DATE</label>
//                 <input
//                   type="date"
//                   required
//                   value={appointment.preferredDate}
//                   onChange={(e) =>
//                     setAppointment({ ...appointment, preferredDate: e.target.value })
//                   }
//                 />
//               </FormGroup>
//             </FormGrid>

//             <FormGroup style={{ marginBottom: "1.5rem" }}>
//               <label>MESSAGE</label>
//               <textarea
//                 placeholder="Which property are you interested in? Any specific requirements?"
//                 value={appointment.message}
//                 onChange={(e) =>
//                   setAppointment({ ...appointment, message: e.target.value })
//                 }
//               />
//             </FormGroup>

//             <SubmitGreenBtn type="submit">
//               ✉ REQUEST APPOINTMENT →
//             </SubmitGreenBtn>
//           </FormCard>
//         </div>

//      <SecurePaymentSection/>
//       </Container>
//     </SectionWrapper>
//   );
// }


/* ================= COMPONENT ================= */


export default function ScheduleAndPaymentSection() {
  const [appointment, setAppointment] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredDate: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState("");
  const [currency, setCurrency] = useState("₦");

  const handleAppointmentSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send data to your Next.js backend API route
      // Replace '/api/contact' with the actual path to your backend file if it's placed elsewhere
      const response = await fetch("/api/send-contact-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formTitle: "Viewing Appointment Request",
          ...appointment,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        Swal.fire({
          title: "Appointment Requested 🎉",
          text: data.message || "Interested in a property? Our team will reach out shortly to confirm your viewing.",
          icon: "success",
          confirmButtonColor: "#2e7d32", // Replace with your MidGreen variable if defined elsewhere
        });

        // Clear the form on success
        setAppointment({
          fullName: "",
          email: "",
          phone: "",
          preferredDate: "",
          message: "",
        });
      } else {
        throw new Error(data.message || data.error || "Failed to submit appointment.");
      }
    } catch (error) {
      Swal.fire({
        title: "Submission Failed ❌",
        text: error.message || "Something went wrong. Please try again later.",
        icon: "error",
        confirmButtonColor: "#d32f2f",
      });
    } finally {
      setLoading(false);
    }
  };

  const handlePayment = () => {
    if (!paymentAmount) {
      Swal.fire("Enter Amount", "Please enter an amount to proceed with payment.", "warning");
      return;
    }
    Swal.fire(
      "Payment Initiated",
      `Redirecting to payment gateway for ${currency}${paymentAmount}...`,
      "info"
    );
  };

  return (
    <SectionWrapper>
      <Container>
        {/* 1. SCHEDULE AN APPOINTMENT SECTION */}
        <div>
          <HeaderBlock>
            <span className="tag">BOOK A VIEWING</span>
            <h2>Schedule an Appointment</h2>
            <p>
              Interested in a property? Fill out the form below and our team will
              reach out to confirm your viewing.
            </p>
          </HeaderBlock>

          <FormCard onSubmit={handleAppointmentSubmit}>
            <FormGrid>
              <FormGroup>
                <label>FULL NAME</label>
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  value={appointment.fullName}
                  onChange={(e) =>
                    setAppointment({ ...appointment, fullName: e.target.value })
                  }
                />
              </FormGroup>

              <FormGroup>
                <label>EMAIL</label>
                <input
                  type="email"
                  placeholder="Email address"
                  required
                  value={appointment.email}
                  onChange={(e) =>
                    setAppointment({ ...appointment, email: e.target.value })
                  }
                />
              </FormGroup>
            </FormGrid>

            <FormGrid>
              <FormGroup>
                <label>PHONE</label>
                <input
                  type="tel"
                  placeholder="Phone number"
                  required
                  value={appointment.phone}
                  onChange={(e) =>
                    setAppointment({ ...appointment, phone: e.target.value })
                  }
                />
              </FormGroup>

              <FormGroup>
                <label>PREFERRED DATE</label>
                <input
                  type="date"
                  required
                  value={appointment.preferredDate}
                  onChange={(e) =>
                    setAppointment({ ...appointment, preferredDate: e.target.value })
                  }
                />
              </FormGroup>
            </FormGrid>

            <FormGroup style={{ marginBottom: "1.5rem" }}>
              <label>MESSAGE</label>
              <textarea
                placeholder="Which property are you interested in? Any specific requirements?"
                value={appointment.message}
                onChange={(e) =>
                  setAppointment({ ...appointment, message: e.target.value })
                }
              />
            </FormGroup>

            <SubmitGreenBtn type="submit" disabled={loading}>
              {loading ? "SENDING..." : "✉ REQUEST APPOINTMENT →"}
            </SubmitGreenBtn>
          </FormCard>
        </div>

        <SecurePaymentSection />
      </Container>
    </SectionWrapper>
  );
}