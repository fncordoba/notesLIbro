import React, { Component } from 'react';
import moment from 'moment';
import './Notes.css';
const formatTime = 'YYYY-MM-DD HH:mm:ss'; 
class Notes extends Component {
  constructor() {
    super();

    // Guardamos la fecha en la que los datos se renderizan por primera vez
    this.state = {
      lastUpdate: moment().format('YYYY-MM-DD HH:mm:ss').toString()
    }
  }

  componentWillReceiveProps(nextProps) {
    // Si el prop de notes ha cambiado
    if (nextProps.notes !== this.props.notes) {
      this.setState({
        lastUpdate: moment().format('YYYY-MM-DD HH:mm:ss').toString()
      });
    }
  }

  render() {
    const { notes } = this.props;

    return (
      <div className="Notes">
        <h1>Notas:</h1>

        <ul>
          {notes.map((note, key) => (
            <li key={key}>{note.title} - {note.content}</li>
          ))}
        </ul>

        <p>Last Update: <strong>{this.state.lastUpdate}</strong></p>
      </div>
    );
  }

  componentWillUnmount() {
    console.log('Hasta la vista baby!');
    document.body.style = 'background: black;';
    document.getElementById('unmountMessage').style.color = 'white';
    document.getElementById('unmountMessage').style.textAlign = 'center';
  }
}

export default Notes;
