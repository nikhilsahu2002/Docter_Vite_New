import { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '../../Firebase';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
            const docRef = await addDoc(collection(db, 'appointments'), formData);
            alert('Appointment booked successfully');
            console.log('Document written with ID: ', docRef.id);
        } catch (e) {
            console.error('Error adding document: ', e);
            alert('Failed to book appointment, please try again.');
        }
    };

    const timeSlots = [
        "09:00 AM - 09:30 AM",
        "09:30 AM - 10:00 AM",
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
                                            <input type="text" name="name" className="form-control border-0" placeholder="Your Name" style={{ height: "55px" }} value={formData.name} onChange={handleInputChange} />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input type="email" name="email" className="form-control border-0" placeholder="Your Email" style={{ height: "55px" }} value={formData.email} onChange={handleInputChange} />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input type="text" name="mobile" className="form-control border-0" placeholder="Your Mobile" style={{ height: "55px" }} value={formData.mobile} onChange={handleInputChange} />
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
