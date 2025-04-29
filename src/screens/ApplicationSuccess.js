import React from "react";
import { Link, useLocation } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { PDFDownloadLink } from '@react-pdf/renderer';
import ApplicationAckPdf from "./AcknowledgementPdf";

const ApplicationSuccess = () => {
  const { state } = useLocation();
  const application = {
    name: state?.studentEdit?.student_name || "N/A",
    email: state?.studentEdit?.email || "N/A",
    id: state?.studentEdit?.application_no || "N/A",
    date: new Date().toLocaleDateString(),
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4" style={{ marginTop: 100 }}>
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md text-center min-h-[600px] flex flex-col justify-center"style={{padding:100 }}>
        <div className="flex justify-center mb-4">
          <CheckCircle className="text-green-600" color="green" size={64} />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Application Submitted Successfully!</h2>
        <p className="text-gray-600 mb-6">
          Thank you for your application.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <PDFDownloadLink
            document={<ApplicationAckPdf application={application} />}
            fileName={`Application_Acknowledgment_${application.id}.pdf`}
            style={{ color: 'blue' }}
          >
            {({ loading }) => loading ? 'Generating PDF...' : 'Download Acknowledgment'}
          </PDFDownloadLink>

          <Link
            to="/Home"
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
            style={{ color: 'green' }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApplicationSuccess;
