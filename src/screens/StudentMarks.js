import React, { useState } from 'react';
import {
  // Card,
  Row,
  Col,
  Form,
  Input,
  Button,
} from 'reactstrap';
import PropTypes from 'prop-types';
import * as $ from 'jquery';
// import Select from 'react-select';
import random from 'random'; 
import api from '../constants/api';

const ViewLineItemModal = ({ addLineItemModal, setAddLineItemModal, projectInfo, quoteLine }) => {
  ViewLineItemModal.propTypes = {
    addLineItemModal: PropTypes.bool,
    setAddLineItemModal: PropTypes.func,
    projectInfo: PropTypes.any,
    quoteLine: PropTypes.any,
  };
  //All state Varible
  const [totalAmount, setTotalAmount] = useState(0);
  const [addLineItem, setAddLineItem] = useState([
    {
      id: random.int(1, 99),
      unit: '',
      quantity: '',
      unit_price: '',
      amount: '',
      remarks: '',
      title: '',
      description: '',
    },
  ]);
  const [unitdetails, setUnitDetails] = useState();
  // Fetch data from API
  const getUnit = () => {
    api.get('/product/getUnitFromValueList', unitdetails).then((res) => {
      const items = res.data.data;
      const finaldat = [];
      items.forEach((item) => {
        finaldat.push({ value: item.value, label: item.value });
      });
      setUnitDetails(finaldat);
    });
  };

  //Insert Invoice Item
  const addLineItemApi = (obj) => {
    obj.project_id = projectInfo;
    obj.quote_id = quoteLine;
    api
      .post('/student/insertStudentmarks', obj)
      .then(() => {
        alert('Line Item Added Successfully', 'sucess');
        window.location.reload();
      })
      .catch(() => {
        alert('Cannot Add Line Items', 'error');
      });
  };
  //Add new line item
  const AddNewLineItem = () => {
    setAddLineItem([
      ...addLineItem,
      {
        id: new Date().getTime().toString(),
        unit: '',
        quantity: '',
        unit_price: '',
        remarks: '',
        amount: '',
        title: '',
        description: '',
      },
    ]);
  };
  //Invoice item values
  const getAllValues = () => {
    const result = [];
    $('.lineitem tbody tr').each(function input() {
      const allValues = {};
      $(this)
        .find('input')
        .each(function output() {
          const fieldName = $(this).attr('name');
          allValues[fieldName] = $(this).val();
        });
      result.push(allValues);
    });
    setTotalAmount(0);
    console.log(result);
    result.forEach((element) => {
      addLineItemApi(element);
    });
    console.log(result);
  };
  //Invoice Items Calculation
  // const calculateTotal = () => {
  //   let totalValue = 0;
  //   const result = [];
  //   $('.lineitem tbody tr').each(function input() {
  //     const allValues = {};
  //     $(this)
  //       .find('input')
  //       .each(function output() {
  //         const fieldName = $(this).attr('name');
  //         allValues[fieldName] = $(this).val();
  //         allValues.amount = allValues.quantity * allValues.unit_price;
  //       });
  //     result.push(allValues);
  //   });
  //   result.forEach((e) => {
  //     if (e.amount) {
  //       totalValue += parseFloat(e.amount);
  //     }
  //   });
  //   console.log(result);
  //   setAddLineItem(result);
  //   setTotalAmount(totalValue);
  // };
  // Clear row value
  const ClearValue = (ind) => {
    setAddLineItem((current) =>
      current.filter((obj) => {
        return obj.id !== ind.id;
      }),
    );
    if (ind.amount) {
      const finalTotal = totalAmount - parseFloat(ind.amount);
      setTotalAmount(finalTotal);
    }
  };

  React.useEffect(() => {
    getUnit();
  }, []);

  return (
    <>
        <Row>
            <Col md="12">
                <Form>
                    <Col md="3">
                        <Button
                        className="shadow-none mb-3" 
                        color="primary"
                        type="button"
                        onClick={() => {
                            AddNewLineItem();
                        }}
                        >
                        Add Line Item
                        </Button>                        
                    </Col>
                                    
                    <table className="lineitem">
                        <thead>
                        <tr>
                            <th scope="col">Subject </th>
                            <th scope="col">Marks Obtained</th>
                            <th scope="col">Maximum</th>
                            <th scope="col">Month & Year of Passing</th>
                            <th scope="col">HSC Reg. No</th>
                            <th scope="col">No. of Attempt(s)</th>
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
        </Row>
    </>
  );
};
export default ViewLineItemModal;
