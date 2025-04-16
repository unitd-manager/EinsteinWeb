import React, { useState, useEffect } from 'react';
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import PropTypes from 'prop-types';
import * as $ from 'jquery';
import api from '../constants/api';

const ViewLineItemModal = ({ showStudentMarks, setShowStudentMarks, studentId }) => {
  ViewLineItemModal.propTypes = {
    studentId: PropTypes.any,
    showStudentMarks: PropTypes.bool,
    setShowStudentMarks: PropTypes.func,
  };

  const generateRandomId = () => Math.floor(Math.random() * 100) + 1;

  const [totalAmount, setTotalAmount] = useState(0);
  const [addLineItem, setAddLineItem] = useState([
    {
      id: generateRandomId(),
      subject: '',
      marks: '',
      maximum: '',
      month_year_passing: '',
      hsc_reg_no: '',
      no_of_attempt: '',
    },
  ]);
  const [unitdetails, setUnitDetails] = useState([]);

  const getUnit = () => {
    api.get('/product/getUnitFromValueList').then((res) => {
      const items = res.data.data;
      const finaldat = items.map((item) => ({ value: item.value, label: item.value }));
      setUnitDetails(finaldat);
    });
  };

  const addLineItemApi = (obj) => {
    obj.student_id = studentId;
    api
      .post('/student/insertStudentmarks', obj)
      .then(() => {
        alert('Line Item Added Successfully');
        window.location.reload();
      })
      .catch(() => {
        alert('Cannot Add Line Items');
      });
  };

  const AddNewLineItem = () => {
    setAddLineItem([
      ...addLineItem,
      {
        id: new Date().getTime().toString(),
        subject: '',
        marks: '',
        maximum: '',
        month_year_passing: '',
        hsc_reg_no: '',
        no_of_attempt: '',
      },
    ]);
  };

  const getAllValues = () => {
    const result = [];
    $('.lineitem tbody tr').each(function () {
      const allValues = {};
      $(this)
        .find('input')
        .each(function () {
          const fieldName = $(this).attr('name');
          allValues[fieldName] = $(this).val();
        });
      result.push(allValues);
    });
    setTotalAmount(0);
    result.forEach((element) => {
      addLineItemApi(element);
    });
  };  

  const ClearValue = (ind) => {
    setAddLineItem((current) => current.filter((obj) => obj.id !== ind.id));
    if (ind.amount) {
      const finalTotal = totalAmount - parseFloat(ind.amount);
      setTotalAmount(finalTotal);
    }
  };

  useEffect(() => {
    getUnit();
  }, []);

  return (
    <Modal size="xl" isOpen={showStudentMarks}>
        <ModalHeader>
        <Button
            className="shadow-none"
            color="secondary"
            onClick={() => {
            setShowStudentMarks(false);
            }}
        >
            X
        </Button>
        </ModalHeader>
        <ModalBody>
            <Row>
            <Col md="12">
                <Form>
                <Col md="3">
                    <Button
                    className="shadow-none mb-3"
                    color="primary"
                    type="button"
                    onClick={AddNewLineItem}
                    >
                    Add Line Item
                    </Button>
                </Col>

                <table className="lineitem">
                    <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Marks Obtained</th>
                        <th>Maximum</th>
                        <th>Month & Year of Passing</th>
                        <th>HSC Reg. No</th>
                        <th>No. of Attempt(s)</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {addLineItem &&
                            addLineItem.map((item) => {
                            return (
                                <tr key={item.id}>
                                <td data-label="Subject">
                                    <Input Value={item.subject} type="text" name="subject" />
                                </td>
                                <td data-label="Marks Obtained">
                                    <Input Value={item.marks} type="text" name="marks" />
                                </td>
                                <td data-label="Maximum">
                                    <Input Value={item.maximum} type="text" name="maximum" />
                                </td>
                                <td data-label="Month & Year of Passing">
                                    <Input Value={item.month_year_passing} type="text" name="month_year_passing" />
                                </td>
                                <td data-label="HSC Reg. No">
                                    <Input Value={item.hsc_reg_no} type="text" name="hsc_reg_no" />
                                </td>
                                <td data-label="No. of Attempt(s)">
                                    <Input Value={item.no_of_attempt} type="text" name="no_of_attempt" />
                                </td>
                                <td data-label="Action">
                                    <Input type="hidden" name="id" Value={item.id}></Input>
                                    <span
                                    className="addline"
                                    onClick={() => {
                                        ClearValue(item);
                                    }}
                                    >
                                    Clear
                                    </span>
                                </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                </Form>
            </Col>
            <ModalFooter>
                <Button
                    className="shadow-none"
                    color="primary"
                    onClick={() => {
                    getAllValues();
                    }}
                >
                    {' '}
                    Submit{' '}
                </Button>
                <Button
                    className="shadow-none"
                    color="secondary"
                    onClick={() => {
                    setShowStudentMarks(false);
                    }}
                >
                    Cancel
                </Button>
            </ModalFooter>
            </Row>
        </ModalBody>
    </Modal>
  );
};

export default ViewLineItemModal;
