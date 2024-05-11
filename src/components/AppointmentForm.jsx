import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const AppointmentForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [nic, setNic] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [appointmentDate, setAppointmentDate] = useState("");
    const [department, setDepartment] = useState("Pediatrics");
    const [doctorFirstName, setDoctorFirstName] = useState("");
    const [doctorLastName, setDoctorLastName] = useState("");
    const [address, setAddress] = useState("");
    const [hasVisited, setHasVisited] = useState(false);

    const departmentsArray = [
        "Pediatrics",
        "Orthopedics",
        "Cardiology",
        "Neurology",
        "Oncology",
        "Radiology",
        "Physical Therapy",
        "Dermatology",
        "ENT",
        "asdc"
    ];

    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const { data } = await axios.get(
                    "http://localhost:4000/api/v1/user/doctor",
                    { withCredentials: true }
                );
                console.log("Data:", data);
                if (data && data.Doctor) {
                    setDoctors(data.Doctor);
                    console.log("Doctors:", data.Doctor);
                } else {
                    console.error("Invalid data structure received from the API.");
                }
            } catch (error) {
                console.error("Error fetching doctors:", error);
            }
        };
        fetchDoctors();
    }, []);
    const handleAppointment = async (e) => {
        e.preventDefault();
        try {
            const hasVisitedBool = Boolean(hasVisited);
            const { data } = await axios.post(
                "http://localhost:4000/api/v1/appointment/post",
                {
                    firstName,
                    lastName,
                    email,
                    phone,
                    nic,
                    dob,
                    gender,
                    appointment_date: appointmentDate,
                    department,
                    doctor_firstName: doctorFirstName,
                    doctor_lastName: doctorLastName,
                    hasVisited: hasVisitedBool,
                    address,
                },
                {
                    withCredentials: true,
                    headers: { "Content-Type": "application/json" },
                }
            );
            toast.success(data.message);
            // const i = "" 
                // setFirstName(''),
                // setLastName(""),
                // setEmail(""),
                // setPhone(""),
                // setNic(""),
                // setDob(""),
                // setGender(i),
                // setAppointmentDate(""),
                // setDepartment(""),
                // setDoctorFirstName(""),
                // setDoctorLastName(""),
                // setHasVisited(),
                setAddress("");
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    return (
        <>
            <div  id="forms"  className="container form-component appointment-form">
                <h2   id="ops" >Appointment</h2>
                <form onSubmit={handleAppointment}>
                    <div>
                        <h2  id="name" >Name*</h2>
                        <input
                         className="NAME" 
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div>
                        <h2 id="name" >Email*</h2>
                        <input
                            type="text"
                            className="NAME" 
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        </div>
                        <div>
                            <h2 id="name" >Phone*</h2>
                        <input
                            type="number"
                            className="NAME-PHONE" 
                            placeholder="Mobile Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="nic-dob" >

                   
                    <div>
                        <h2 id="name" >NIC*</h2>
                        <input
                        className="NAME-NIC" 
                            type="number"
                            placeholder="NIC"
                            value={nic}
                            onChange={(e) => setNic(e.target.value)}
                        />
                        </div>
                        <div>
                            <h2 id="name" >DOB*</h2>
                        <input
                            type="date"
                            placeholder="Date of Birth"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            />
                            </div>
                            
                    </div>
                    <div>
                        <h2  id="name" >Gender*</h2>
                        <select  className="NAME-GENDER"  value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <div className="app" >
                        <h2 className="NAME-APP  "  id="name" >Appointment Date*</h2>
                        <input
                        // className="NAME-APP"
                            type="date"
                            placeholder="Appointment Date"
                            value={appointmentDate}
                            onChange={(e) => setAppointmentDate(e.target.value)}
                            />
                            </div>
                    </div>
                    <div  >
                        <h2 id="name" >Department*</h2>
                        <select  className="NAME-DE"
                            value={department}
                            onChange={(e) => {
                                setDepartment(e.target.value);
                                setDoctorFirstName("");
                                setDoctorLastName("");
                            }}
                        >
                            {departmentsArray.map((depart, index) => {
                                return (
                                    <option value={depart} key={index}>
                                        {depart}
                                    </option>
                                );
                            })}
                        </select>
                        <div className="NAME-DOC" >
                        <h2 id="name" >Doctor*</h2>
                        <select  
                              className="doc"
                            value={`${doctorFirstName} ${doctorLastName}`}
                            onChange={(e) => {
                                const [firstName, lastName] = e.target.value.split(" ");
                                setDoctorFirstName(firstName);
                                setDoctorLastName(lastName);
                            }}
                            disabled={!department}
                        >
                            
                            <option value="">Select Doctor</option>
              {doctors
                .filter((doctor) => doctor.doctorDepartment === department)
                .map((doctor, index) => (
                  <option
                    value={`${doctor.firstName} ${doctor.lastName}`}
                    key={index}
                  >
                    {doctor.firstName} {doctor.lastName}
                  </option>
                ))}

                        </select>
                        </div>
                    </div>
                    <div className="address" >
                    <h2 id="name" >Address*</h2>
                    <textarea
                    className="NAME-ADD"
                        rows="3"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Address"
                    />
                    </div>
                    <div
                        style={{
                            gap: "10px",
                            justifyContent: "flex-end",
                            flexDirection: "row",
                        }}
                    >
                        <p style={{ marginBottom: 0 }}>Have you visited before?</p>
                        <input
                            type="checkbox"
                            checked={hasVisited}
                            onChange={(e) => setHasVisited(e.target.checked)}
                            style={{ flex: "none", width: "25px" }}
                        />
                    </div>
                    <button  id="apps" style={{ margin: "0 auto" }}>GET APPOINTMENT</button>
                </form>
            </div>
        </>
    );
};

export default AppointmentForm;