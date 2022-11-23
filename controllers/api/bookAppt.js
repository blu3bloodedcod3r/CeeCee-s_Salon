const datetimeSlotPicker = document.querySelector('datetime-slot-picker');
     
datetimeSlotPicker.addEventListener('slotUpdate', function(event){ console.log('Updated Slot: ', event.detail) });
 
datetimeSlotPicker.slots = [
  {
    "date": 'Thu, 26 Nov 2020',
    "timeSlots": [
       '8 AM - 9 AM',
      '9 AM - 10 AM',
      '10 AM - 11 AM',
      '11 AM - 12 PM',
      '1 PM - 2 PM',
      '2 PM - 3 PM',
      '4 PM - 5 PM',
      '5 PM - 6 PM',
      '6 PM - 7 PM'    
     ]
  },
  {
    "date": 'Fri, 27 Nov 2020',
    "timeSlots": [
       '8 AM - 9 AM',
      '9 AM - 10 AM',
      '10 AM - 11 AM',
      '11 AM - 12 PM',
      '1 PM - 2 PM',
      '2 PM - 3 PM',
      '4 PM - 5 PM',
      '5 PM - 6 PM',
      '6 PM - 7 PM'
    ]
  },
  {
    "date": 'Mon, 30 Nov 2020',
    "timeSlots": [
       '8 AM - 9 AM',
      '9 AM - 10 AM',
      '10 AM - 11 AM',
      '11 AM - 12 PM',
      '1 PM - 2 PM',
      '2 PM - 3 PM',
      '4 PM - 5 PM',
      '5 PM - 6 PM',
      '6 PM - 7 PM'
    ]
  },
  {
    "date": 'Tue, 1 Dec 2020',
    "timeSlots": [
       '8 AM - 9 AM',
      '9 AM - 10 AM',
      '10 AM - 11 AM',
      '11 AM - 12 PM',
      '1 PM - 2 PM',
      '2 PM - 3 PM',
      '4 PM - 5 PM',
      '5 PM - 6 PM',
      '6 PM - 7 PM'
    ]
  },
  {
    date: 'Mon, 4 Jan 2021',
    timeSlots: [
      '8 AM - 9 AM',
      '9 AM - 10 AM',
      '10 AM - 11 AM',
      '11 AM - 12 PM',
      '1 PM - 2 PM',
      '2 PM - 3 PM',
      '4 PM - 5 PM',
      '5 PM - 6 PM',
      '6 PM - 7 PM'
    ]
  }
];