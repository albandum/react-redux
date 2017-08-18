import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component {
  // Automatically called at boot
  componentWillMount() {
    const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });

      this.dataSource = ds.cloneWithRows(this.props.libraries);
    }

  renderRow(library) {
    return <ListItem library={library} />;
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

// Gives LibraryList component a prop with "libraries" in it
const mapStatetoProps = state => {
  return { libraries: state.libraries };
};

// Connect to the state of the store
export default connect(mapStatetoProps)(LibraryList);
