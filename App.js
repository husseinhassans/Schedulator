import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const disabledDates = ["tomorrow"];

function tileDisabled({ date, view }) {
  // Disable tiles in month view only
  if (view === 'month') {
    // Check if a date React-Calendar wants to check is on the list of disabled dates
    return disabledDates.find(dDate => isSameDay(dDate, date));
  }
}
export default function App() {
    const [value, setValue] = useState(new Date());
    function onChange(nextValue) {
	setValue(nextValue);
	//alert(nextValue);
	//const enteredName = prompt('Please enter your name');
    }
    return (
	    <View style={styles.container}>
	    <h1>Basic Calendar</h1>
	    <Calendar onChange={onChange} value={value} />
	    <h2>Create an Event</h2>
	    <> <Form /> </>
	    <h2>Events</h2>
	    <Text>Open up App.js to start working on your app!</Text>
	    <StatusBar style="auto" />
	    </View>
    );
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value    });
  }

  render() {
    return (
	    <form>
	    <label>
	    Name of Event:
	    <input
	name="numberOfGuests"            type="text"
	value={this.state.numberOfGuests}
	onChange={this.handleInputChange} />
	    </label>
	    <br />
	    <label>
	    Is going:
	    <input
	name="isGoing"            type="checkbox"
	checked={this.state.isGoing}
	onChange={this.handleInputChange} />
	    <br />
	    </label>
	    <label>
	    <input type="submit" value="Add event" />
	    </label>
	    </form>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
