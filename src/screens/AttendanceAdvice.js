import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap'; // Assuming you're using Bootstrap/Reactstrap

const SubjectWiseStaffAdvice = () => {
    // Sample data structure holding subject, staff, and advice
    const subjectAdviceData = [
        {
            subject: "Microprocessor and Microcontroller",
            staff: "Prof. Abdul",
            advice: "Regular attendance helps in understanding complex topics sequentially. Make sure you attend all classes and practice regularly."
        },
        {
            subject: "Digital Processing",
            staff: "Prof.Rohini",
            advice: "Missing even one class can lead to gaps in understanding. Be punctual and stay consistent in your attendance."
        },
        {
            subject: "Electrnic Device",
            staff: "Prof. Suganya",
            advice: " Attending practical sessions and lectures will ensure you are prepared for the exams and lab sessions."
        }
    ];

    return (
        <div className="subject-wise-advice-section">
            {subjectAdviceData.map((subject, index) => (
                <Card key={index} className="mb-4" style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <CardBody>
                        <CardTitle tag="h4" className="text-primary">
                            {subject.subject} - Advice from {subject.staff}
                        </CardTitle>
                        <CardText style={{ fontSize: '16px', lineHeight: '1.6' }}>
                            {subject.advice}
                        </CardText>
                    </CardBody>
                </Card>
            ))}
        </div>
    );
};

export default SubjectWiseStaffAdvice;
