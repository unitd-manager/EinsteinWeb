import React, {  useEffect,useState } from 'react';
import { Card, CardBody, CardTitle, Row, Col, Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types'
import { Link ,useParams} from 'react-router-dom';
import * as $ from "jquery";
import random from 'random'
import api from '../constants/api';
import "../../src/assets/css/event.css";

const InvoiceModalFinance = ({ editInvoiceModal,showStudentMarks,setShowStudentMarks,studentId}) => {
  InvoiceModalFinance.propTypes = {
    editInvoiceModal: PropTypes.object,
    showStudentMarks: PropTypes.bool,
    setShowStudentMarks: PropTypes.func, 
      studentId: PropTypes.any,
  }
  console.log('studentId',studentId)


  //All state variable
  const [totalAmount, setTotalAmount] = useState(0);
  const [invoiceData, SetInvoiceData] = useState(null);
  const {id} =useParams()
    //Add Line Item
    const [addLineItem, setAddLineItem] = useState(
      [{
        id: random.int(1, 99),
        subject: '',
        marks: '',
        maximum: '',
        month_year_passing: '',
        hsc_reg_no: '',
        no_of_attempt: '',
        }])
    const AddNewLineItem = () => {
      setAddLineItem([...addLineItem,{
        id: new Date().getTime().toString(),
        subject: '',
        marks: '',
        maximum: '',
        month_year_passing: '',
        hsc_reg_no: '',
        no_of_attempt: '',
      }])
    }
//setting value in invoiceData
  const handleInputs = (e, itemId) => {
    const { name, value } = e.target;
    const updatedItems = addLineItem.map((item) =>
      item.student_marks_id === itemId ? { ...item, [name]: value } : item
    );
    setAddLineItem(updatedItems);
  };
  //get invoice line item
  const getLineItem = () => {
    api.post('/student/getStudentMarksById',{student_id:studentId})
    .then((res)=> {
      setAddLineItem(res.data.data)
      SetInvoiceData(res.data.data)
        console.log(res.data.data)   
    }).catch(()=>{
      alert("Line Items not found","info")
    })
  }

  //Edit invoice
  const editInvoice = (itemStudentMarkId) => {
  
    api.post('/student/editStudentMarks', itemStudentMarkId)
      .then(() => {
       alert('Invoice edited successfully.','success')
      })
      .catch(() => {
        console.log('Network connection error.')
      })
  }

  //Add line item API
  const addLineItemApi = (obj) => {
    api.post('/Finance/insertInvoiceItem', {
      "description": obj.description, "amount": obj.total_cost, "item_title": "", 
      "cost_price": 0, "qty": obj.qty,  "created_by": "", "modified_by": "",
      "unit": obj.unit, "remarks": obj.remarks, "s_no": "", "model": "", "vat": 0, "discount_percentage": 0,
      "item_code_backup": "", "erection": 0, "dismantle": 0, "unit_price": parseFloat(obj.unit_price),
    }).then(() => {
      alert('Line Item Added Successfully', 'sucess')
    }).catch(() => {
      alert('Cannot Add Line Items', 'error')
    })
  }
  const getAllValues = () => {
    const result = [];
    $(".lineitemedit tbody tr").each(function () {
      const allValues = {};
      $(this).find("input").each(function () {
        const fieldName = $(this).attr("name");
        allValues[fieldName] = $(this).val();
      });
      result.push(allValues);
    })
    console.log(result)
    result.forEach(obj => {
      if (obj.item !== '' && obj.total_cost) {
        addLineItemApi(obj)
      }
    })
    setTotalAmount(0)
    setAddLineItem([{
      id: random.int(1, 99),
      subject: '',
      marks: '',
      maximum: '',
      month_year_passing: '',
      hsc_reg_no: '',
      no_of_attempt: '',
    }])
  }
  //Calculation for Invoice Item
  const calculateTotal = () => {
    let totalValue = 0
    const result = [];
    $(".lineitemedit tbody tr").each(function () {
      const allValues = {};
      $(this).find("input").each(function () {
        const fieldName = $(this).attr("name");
        allValues[fieldName] = $(this).val();
        allValues.total_cost = allValues.qty * allValues.unit_price
      });
      result.push(allValues);
    })
    result.forEach(e => {
      if (e.total_cost) {
        totalValue += parseFloat(e.total_cost)
      }
    })
    setAddLineItem(result)
    setTotalAmount(totalValue)
  }
  // Clear row value
  const ClearValue = (ind) => {
    setAddLineItem(current =>
      current.filter(obj => {
        return obj.id !== ind.id;
      }),
    );
    if (ind.total_cost) {
      const finalTotal = totalAmount - parseFloat(ind.total_cost)
      setTotalAmount(finalTotal)
    }
  }
  useEffect(() => {
    if (studentId) {
      getLineItem();
    }
  }, [studentId]);
  return (
    <>
      {/* <Modal size="xl" isOpen={editModal}>
        <ModalHeader>Create Invoice
          <Button color="secondary" onClick={() => { setEditModal(false) }}>
            X
          </Button>
        </ModalHeader>
        <ModalBody> */}
            <Col md="12">
              <Card>
                <CardBody>
                  <Form>           
                      <Row>
                        <Row>
                          <Col md="3">
                            <Button color="primary" onClick={() => setShowStudentMarks(true)}>
                            Add Student Marks
                            </Button>
                          </Col>
                        </Row>
                        <div className="lineitemedit-wrapper">
                            <table className="lineitemedit" cellSpacing="10">
                            <thead>
                                <tr>
                                <th scope="col">Subject</th>
                                <th scope="col">Marks Obtained</th>
                                <th scope="col">Maximum</th>
                                <th scope="col">Month & Year of Passing</th>
                                <th scope="col">HSC Reg. No</th>
                                <th scope="col">No. of Attempt(s)</th>
                                <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {addLineItem?.map((item) => (
                                <tr key={item.student_marks_id}>
                                    <td data-label="Subject">
                                    <Input value={item.subject} name="subject" placeholder='Enter Subject' type="text" onChange={(e) => handleInputs(e, item.student_marks_id)} />
                                    </td>
                                    <td data-label="Marks Obtained">
                                    <Input value={item.marks} type="text" name="marks" placeholder='Enter Mark' onChange={(e) => handleInputs(e, item.student_marks_id)} />
                                    </td>
                                    <td data-label="Maximum">
                                    <Input value={item.maximum} type="text" name="maximum" placeholder='Enter Maximum' onChange={(e) => handleInputs(e, item.student_marks_id)} />
                                    </td>
                                    <td data-label="Month & Year of Passing">
                                    <Input value={item.month_year_passing} type="text" name="month_year_passing" placeholder='Enter month & year' onChange={(e) => handleInputs(e, item.student_marks_id)} />
                                    </td>
                                    <td data-label="HSC Reg. No">
                                    <Input value={item.hsc_reg_no} type="text" name="hsc_reg_no" placeholder='Enter Reg No' onChange={(e) => handleInputs(e, item.student_marks_id)} />
                                    </td>
                                    <td data-label="No. of Attempt(s)">
                                    <Input value={item.no_of_attempt} type="text" name="no_of_attempt" placeholder='Enter No. of Attempt' onChange={(e) => handleInputs(e, item.student_marks_id)} />
                                    </td>
                                    <td data-label="Action">
                                    <Button onClick={() => editInvoice(item)}>Save</Button>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                            </table>
                        </div>

                        {/* <ModalFooter>
                          <Button color="primary" onClick={() => {
                            editInvoice();
                            getAllValues();
                          }} > Submit </Button>
                          <Button color="secondary" onClick={() => {
                            setEditModal(false)
                          }}>
                            Cancel
                          </Button>
                        </ModalFooter> */}
                      </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
        {/* </ModalBody>
      </Modal> */}


    </>
  )
}

export default InvoiceModalFinance;