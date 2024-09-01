import { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '../../Firebase';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Appointment() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        doctor: '',
        date: new Date(), // Default to current date
        time: '', // Time slot will be selected here
        problem: ''
    });

    const db = getFirestore(app);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleDateChange = (date) => {
        setFormData({
            ...formData,
            date: date
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Add appointment to Firestore
            const docRef = await addDoc(collection(db, 'appointments'), formData);
            toast.success('Appointment booked successfully');
            console.log('Document written with ID: ', docRef.id);
            const meetingLink = `https://meet.jit.si/${formData.email}-${formData.name}-${new Date().getTime()}`;

            // Prepare email data
            const emailData = {
                sender: {
                    name: "Nikhil Sahu",
                    email: "death1233freak@gmail.com" // Ensure this email is authorized
                },
                to: [
                    {
                        email: formData.email,
                        name: formData.name
                    }
                ],
                templateId: 1, // Replace with your template ID
                params: {
                    name: formData.name,
                    appointmentDate: formData.date, // Example variable; adjust as needed
                    Slot: formData.time,
                    MeetingLink: meetingLink,
                }
            };

            // Send email using fetch
            const emailResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'api-key': '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' // Replace with your actual Brevo API key
                },
                body: JSON.stringify(emailData)
            });

            if (!emailResponse.ok) {
                const errorData = await emailResponse.json();
                toast.error(`Failed to send email: ${errorData.message}`);
                console.error('Failed to send email', errorData);
            }
            if (emailResponse) {
                const options = {
                    key: "rzp_test_xj7q4CaIpc5ka1", // Your Razorpay key ID
                    amount: 1000 * 100, // Example amount in paise (1000 INR)
                    currency: "INR",
                    name: "Klinik",
                    description: "Appointment Booking Payment",
                    handler: function (response) {
                        toast.success('Payment successful');
                        console.log(response);
                    },
                    prefill: {
                        name: formData.name,
                        email: formData.email,
                        contact: formData.mobile
                    },
                    theme: {
                        color: "#3399cc"
                    }
                };

                // Use Razorpay from the global object
                const razorpay = new window.Razorpay(options);
                razorpay.open();
            }

        } catch (e) {
            toast.error('Failed to book appointment, please try again.');
            console.error('Error adding document: ', e);
        }
    };


    const timeSlots = [
        "10:00 AM - 10:30 AM",
        "10:30 AM - 11:00 AM",
        "11:00 AM - 11:30 AM",
        "11:30 AM - 12:00 PM",
        "12:00 PM - 12:30 PM",
        "12:30 PM - 01:00 PM",
        "02:00 PM - 02:30 PM",
        "02:30 PM - 03:00 PM",
        "03:00 PM - 03:30 PM",
        "03:30 PM - 04:00 PM",
        "04:00 PM - 04:30 PM",
        "04:30 PM - 05:00 PM",
    ];

    return (
        <div>
            <ToastContainer />
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <p className="d-inline-block border rounded-pill py-1 px-4">Appointment</p>
                            <h1 className="mb-4">Make An Appointment To Visit Our Doctor</h1>
                            <p className="mb-4">Tempor erat elitr rebum at clita...</p>
                            <div className="bg-light rounded d-flex align-items-center p-5 mb-4">
                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white" style={{ width: "55px", height: "55px" }}>
                                    <i className="fa fa-phone-alt text-primary"></i>
                                </div>
                                <div className="ms-4">
                                    <p className="mb-2">Call Us Now</p>
                                    <h5 className="mb-0">+012 345 6789</h5>
                                </div>
                            </div>
                            <div className="bg-light rounded d-flex align-items-center p-5">
                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white" style={{ width: "55px", height: "55px" }}>
                                    <i className="fa fa-envelope-open text-primary"></i>
                                </div>
                                <div className="ms-4">
                                    <p className="mb-2">Mail Us Now</p>
                                    <h5 className="mb-0">info@example.com</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="bg-light rounded h-100 d-flex align-items-center p-5">
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        <div className="col-12 col-sm-6">
                                            <input required type="text" name="name" className="form-control border-0" placeholder="Your Name" style={{ height: "55px" }} value={formData.name} onChange={handleInputChange} />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input required type="email" name="email" className="form-control border-0" placeholder="Your Email" style={{ height: "55px" }} value={formData.email} onChange={handleInputChange} />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input required type="text" name="mobile" className="form-control border-0" placeholder="Your Mobile" style={{ height: "55px" }} value={formData.mobile} onChange={handleInputChange} />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <select name="doctor" className="form-select border-0" style={{ height: "55px" }} value={formData.doctor} onChange={handleInputChange}>
                                                <option value="" disabled>Choose Doctor</option>
                                                <option value="Doctor 1">Doctor 1</option>
                                                <option value="Doctor 2">Doctor 2</option>
                                                <option value="Doctor 3">Doctor 3</option>
                                            </select>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <DatePicker
                                                selected={formData.date}
                                                id="caled"
                                                onChange={handleDateChange}
                                                className="form-control border-0"
                                                placeholderText="Choose Date"
                                                style={{ height: "82px", padding: "27px" }}
                                            />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <select name="time" className="form-select border-0" style={{ height: "55px" }} value={formData.time} onChange={handleInputChange}>
                                                <option value="" disabled>Select Time Slot</option>
                                                {timeSlots.map((slot, index) => (
                                                    <option key={index} value={slot}>{slot}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <textarea name="problem" className="form-control border-0" rows="5" placeholder="Describe your problem" value={formData.problem} onChange={handleInputChange}></textarea>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">Book Appointment</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
