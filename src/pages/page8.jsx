import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Page8() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (!firstName || !lastName || !phone || !email) {
      toast.error('Please fill in all fields');
      return;
    }

    if (phone.length !== 10) {
      toast.error('Phone number should be 10 digits');
      return;
    }

    // Data to submit
    const data = {
      name: `${firstName} ${lastName}`,
      phone,
      email,
    };

    fetch('https://sheetdb.io/api/v1/j9cy4794zvtoc', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: [data],
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success('Submitted Succesfully!\nWe will Contact You Soon');
        setFirstName('');
        setLastName('');
        setPhone('');
        setEmail('');
        console.log(data);
      })
      .catch((error) => {
        toast.error('Error submitting data');
        console.error('Error:', error);
      });
  };

  return (
    <div className="page8 eligibility">
      <ToastContainer />
      <div className="consultbanner">
        <div className="consultimage">
          <img src="expert.png" alt="" className="expertimage" />
        </div>
        <div className="consultform">
          <div className="smallheading">
            <div className="circleconsult"></div> Consult Experts
          </div>
          <div className="headingconsult">
            Uncertain about what you need? Provide your details for a call-back.
          </div>
          <div className="formdiv">
            <div className="namediv">
              <div className="firstname">
                <div className="iconinp">
                  <img src="name.png" alt="Name" className="iconinpimage" />
                </div>
                <input
                  className="inputconsult"
                  type="text"
                  placeholder="Enter First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="lastname">
                <div className="iconinp">
                  <img src="name.png" alt="Name" className="iconinpimage" />
                </div>
                <input
                  className="inputconsult"
                  type="text"
                  placeholder="Enter Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="namediv">
              <div className="firstname">
                <div className="iconinp">
                  <img src="phone.png" alt="Name" className="iconinpimage" />
                </div>
                <input
                  className="inputconsult"
                  type="number"
                  placeholder="Enter Phone No"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="lastname">
                <div className="iconinp">
                  <img src="email.png" alt="Name" className="iconinpimage" />
                </div>
                <input
                  className="inputconsult"
                  type="email"
                  placeholder="Enter Email ID"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="submitbuttonconsult">
              <div className="submitbuttonbutton" onClick={handleSubmit}>
                Book A Session
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
