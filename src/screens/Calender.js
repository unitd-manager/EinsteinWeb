import React, { useState, useEffect } from 'react';
import {
  Card,
  CardBody,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Form,
  FormGroup,
  Label,
  Col,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../assets/scss/components/calendar.scss';
import api from '../constants/api';

moment.locale('en-GB');
const localizer = momentLocalizer(moment);

const CalendarApp = ({ id }) => {
  CalendarApp.propTypes = {
    id: PropTypes.any,
  };

  const [employees, setEmployees] = useState([]);
  const [eventData, setEventData] = useState([]);
  const [open, setOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [selectedDateEvents, setSelectedDateEvents] = useState([]);
  const [title, setTitle] = useState('');
  const [slot, setSlot] = useState(null);
  const [color, setColor] = useState('default');
  const [update, setUpdate] = useState(null);

  // const ColorVariation = [
  //   { id: 1, eColor: '#1a97f5', value: 'primary' },
  //   { id: 2, eColor: '#00ab55', value: 'success' },
  //   { id: 3, eColor: '#fc4b6c', value: 'danger' },
  //   { id: 4, eColor: '#1e4db7', value: 'info' },
  //   { id: 5, eColor: '#fdd43f', value: 'warning' },
  // ];

  const getEventsByDate = (date) => {
    const selectedDate = moment(date).format('YYYY-MM-DD');
    return eventData.filter((event) => {
      const start = moment(event.start).format('YYYY-MM-DD');
      const end = moment(event.end).format('YYYY-MM-DD');
      return moment(selectedDate).isBetween(start, end, null, '[]');
    });
  };

  const addNewEventAlert = (slotInfo) => {
    const events = getEventsByDate(slotInfo.start);
    if (events.length > 0) {
      setSelectedDateEvents(events);
      setInfoOpen(true);
    } else {
      setOpen(true);
      setSlot(slotInfo);
    }
  };

  const editEvent = (event) => {
    setOpen(true);
    setTitle(event.title);
    setColor(event.color);
    setUpdate(event);
  };

  // const updateEvent = (e) => {
  //   e.preventDefault();
  //   setEventData(
  //     eventData.map((elem) =>
  //       elem.title === update.title ? { ...elem, title, color } : elem
  //     )
  //   );
  //   closeModals();
  // };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   const newEvent = {
  //     title,
  //     start: slot.start,
  //     end: slot.end,
  //     color,
  //   };
  //   setEventData([...eventData, newEvent]);
  //   closeModals();
  // };

  // const deleteHandler = (eventToDelete) => {
  //   setEventData(eventData.filter((e) => e.title !== eventToDelete.title));
  //   closeModals();
  // };

  // const inputChangeHandler = (e) => setTitle(e.target.value);
  // const selectinputChangeHandler = (value) => setColor(value);

  // const closeModals = () => {
  //   setOpen(false);
  //   setInfoOpen(false);
  //   setTitle('');
  //   setColor('');
  //   setUpdate(null);
  //   setSlot(null);
  //   setSelectedDateEvents([]);
  // };

  const eventColors = (event) => {
    return { className: `event-${event.color || 'default'}` };
  };
 
  console.log('eventdd',eventData)

  const CalendarId = () => {
    api
      .get('/enquiry/getSchedule')
      .then((response) => {
        const { data } = response.data;
        const newEventData = data.map((item) => ({
          title: item.title,
          start: new Date(item.start_date),
          end: new Date(item.end_date),
          color: 'primary',
        }));
        setEventData(newEventData);
      })
      .catch((error) => {
        console.error('Error fetching calendar data:', error);
      });
  };

  useEffect(() => {
    CalendarId();
  }, []);
  const events = [
    {
      title: 'Alumni Meet',
      start: new Date(2025, 4, 10, 10, 0),
      end: new Date(2025, 4, 10, 12, 0),
    },
    {
      title: 'Placement Drive',
      start: new Date(2025, 4, 15),
      end: new Date(2025, 4, 15),
    },
  ];

  return (
    <>

      <Card>
        <CardBody>
          <Calendar
            selectable
            popup
            events={eventData}
        startAccessor="start"
        endAccessor="end"
            defaultView="month"
            localizer={localizer}
            defaultDate={new Date()}
            style={{ height: 'calc(100vh - 350px)' }}
            onSelectEvent={editEvent}
            onSelectSlot={addNewEventAlert}
            eventPropGetter={eventColors}
          />

          {/* Event Add/Edit Modal */}
          {/* <Modal isOpen={open}>
            <ModalHeader toggle={closeModals}>
              {update ? 'Update Event' : 'Add Event'}
            </ModalHeader>
            <Form onSubmit={update ? updateEvent : submitHandler}>
              <ModalBody>
                <h6>Event Title</h6>
                <Input
                  placeholder="Enter Event Title"
                  value={title}
                  onChange={inputChangeHandler}
                />
                <br />
                <h6>Select Event Color</h6>
                <div className="button-group">
                  {ColorVariation.map((colorbg) => (
                    <Button
                      color={colorbg.value}
                      key={colorbg.id}
                      size="sm"
                      onClick={() => selectinputChangeHandler(colorbg.value)}
                      className="me-2"
                    >
                      {colorbg.value === color ? (
                        <i className="bi bi-check" />
                      ) : (
                        <i className="bi bi-circle" />
                      )}
                    </Button>
                  ))}
                </div>
              </ModalBody>
              <ModalFooter>
                {update && (
                  <Button
                    type="button"
                    color="danger"
                    outline
                    onClick={() => deleteHandler(update)}
                  >
                    Delete
                  </Button>
                )}
                <Button type="submit" color="success" disabled={!title}>
                  {update ? 'Update' : 'Add'}
                </Button>
              </ModalFooter>
            </Form>
          </Modal> */}

          {/* Date Info Modal */}
          {/* <Modal isOpen={infoOpen} toggle={closeModals}>
            <ModalHeader toggle={closeModals}>Events on Selected Date</ModalHeader>
            <ModalBody>
              <ListGroup>
                {selectedDateEvents.map((event, index) => (
                  <ListGroupItem key={index}>
                    <strong>{event.title}</strong>
                    <br />
                    {moment(event.start).format('LL')} - {moment(event.end).format('LL')}
                  </ListGroupItem>
                ))}
              </ListGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={closeModals}>
                Close
              </Button>
            </ModalFooter>
          </Modal> */}
        </CardBody>
      </Card>
    </>
  );
};

export default CalendarApp;
