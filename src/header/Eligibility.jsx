import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';

export default function Eligibility() {
  const [prefcountry, setPrefCountry] = useState('');
  const [latestEducation, setLatestEducation] = useState('');
  const [percent, setPercentage] = useState('');
  const [wpno, setWpNo] = useState('');

  const handleSubmit = () => {
    if (!prefcountry || !latestEducation || !percent || !wpno) {
      toast.error('Please fill in all fields');
      return;
    }

    if (wpno.length !== 10) {
      toast.error('Phone number should be 10 digits');
      return;
    }

    // Data to submit
    const data = {
      prefcountry,
      latestEducation,
      percent,
      wpno,
    };

    fetch('https://sheetdb.io/api/v1/xspoygxkeyrgn', {
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
        toast.error(error);
        console.error('Error:', error);
      });
  };

  return (
    <div className="eligibility">
      <div className="page8 eligibility">
        <ToastContainer />
        <div className="consultbanner">
          <div className="consultimage">
            <img src="eligibility.png" alt="" className="expertimage" />
          </div>
          <div className="consultform">
            <div className="smallheading">
              <div className="circleconsult"></div> Get Guidance
            </div>
            <div className="headingconsult">Check Your Eligibility.</div>
            <div className="formdiv">
              <div className="namediv">
                <div className="firstname">
                  <div className="iconinp">
                    <img src="name.png" alt="Name" className="iconinpimage" />
                  </div>
                  <input
                    className="inputconsult"
                    type="text"
                    placeholder="Enter Preferred Country"
                    value={prefcountry}
                    onChange={(e) => setPrefCountry(e.target.value)}
                    list="country-list"
                  />
                  <datalist id="country-list">
                    <option value="Canada" />
                    <option value="Australia" />
                    <option value="USA" />
                    <option value="United Kingdom" />
                    <option value="Germany" />
                    <option value="Ireland" />
                  </datalist>
                </div>
                <div className="lastname">
                  <div className="iconinp">
                    <img src="name.png" alt="Name" className="iconinpimage" />
                  </div>
                  <input
                    className="inputconsult"
                    type="text"
                    placeholder="Enter Latest Education"
                    value={latestEducation}
                    onChange={(e) => setLatestEducation(e.target.value)}
                    list="latesteducation-list"
                  />
                  <datalist id="latesteducation-list">
                    <option value="Class 10th" />
                    <option value="Class 12th" />
                    <option value="Diploma" />
                    <option value="Bachelors" />
                    <option value="Masters" />
                  </datalist>
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
                    placeholder="Enter Whatsapp No"
                    value={wpno}
                    onChange={(e) => setWpNo(e.target.value)}
                  />
                </div>
                <div className="lastname">
                  <div className="iconinp">
                    <img src="email.png" alt="Name" className="iconinpimage" />
                  </div>
                  <input
                    className="inputconsult"
                    type="email"
                    placeholder="Enter Percentage"
                    value={percent}
                    onChange={(e) => setPercentage(e.target.value)}
                  />
                </div>
              </div>
              <div className="submitbuttonconsult">
                <div className="submitbuttonbutton" onClick={handleSubmit}>
                  Get Eligibility
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
