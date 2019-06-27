import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ScrollView, View, Text } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import Spinner from '../Spinner';
import { list, reset } from '../../actions/country/list';
import { success } from '../../actions/country/delete';
import { pagination } from '../../utils/helpers';

class ListComponent extends Component {

  componentDidMount() {
    this.props.reset();
    this.props.list();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.refresh !== this.props.refresh) {
      this.props.list();
    }
  }

  componentWillUnmount() {
    this.props.reset(this.props.eventSource);
  }

  static show(id) {
    Actions.countryShow({id});
  }

  static renderRow(item) {
    const {listRowLeft, listRowRight, viewList} = styles;

    return (
        <ListItem
            key={Math.random()}
            onPressRightIcon={() => ListComponent.show(item['@id'])}
            subtitle={
              <View>
                <View style={viewList}>
                  <Text style={listRowLeft}>id</Text>
                  <Text style={[listRowRight, {fontWeight: 'bold'}]}>{item['@id']}</Text>
                </View>
                <View style={viewList}>
                  <Text style={listRowLeft}>capital: </Text>
                  <Text style={[listRowRight, {fontWeight: 'bold'}]}>{item['capital']}</Text>
                </View>
                <View style={viewList}>
                  <Text style={listRowLeft}>citizenship: </Text>
                  <Text style={[listRowRight, {fontWeight: 'bold'}]}>{item['citizenship']}</Text>
                </View>
                <View style={viewList}>
                  <Text style={listRowLeft}>countryCode: </Text>
                  <Text style={[listRowRight, {fontWeight: 'bold'}]}>{item['countryCode']}</Text>
                </View>
                <View style={viewList}>
                  <Text style={listRowLeft}>currency: </Text>
                  <Text style={[listRowRight, {fontWeight: 'bold'}]}>{item['currency']}</Text>
                </View>
                <View style={viewList}>
                  <Text style={listRowLeft}>currencyCode: </Text>
                  <Text style={[listRowRight, {fontWeight: 'bold'}]}>{item['currencyCode']}</Text>
                </View>
                <View style={viewList}>
                  <Text style={listRowLeft}>currencySubUnit: </Text>
                  <Text style={[listRowRight, {fontWeight: 'bold'}]}>{item['currencySubUnit']}</Text>
                </View>
                <View style={viewList}>
                  <Text style={listRowLeft}>fullName: </Text>
                  <Text style={[listRowRight, {fontWeight: 'bold'}]}>{item['fullName']}</Text>
                </View>
                <View style={viewList}>
                  <Text style={listRowLeft}>iso3: </Text>
                  <Text style={[listRowRight, {fontWeight: 'bold'}]}>{item['iso3']}</Text>
                </View>
                <View style={viewList}>
                  <Text style={listRowLeft}>iso2: </Text>
                  <Text style={[listRowRight, {fontWeight: 'bold'}]}>{item['iso2']}</Text>
                </View>
                <View style={viewList}>
                  <Text style={listRowLeft}>name: </Text>
                  <Text style={[listRowRight, {fontWeight: 'bold'}]}>{item['name']}</Text>
                </View>
                <View style={viewList}>
                  <Text style={listRowLeft}>regionCode: </Text>
                  <Text style={[listRowRight, {fontWeight: 'bold'}]}>{item['regionCode']}</Text>
                </View>
                <View style={viewList}>
                  <Text style={listRowLeft}>subRegionCode: </Text>
                  <Text style={[listRowRight, {fontWeight: 'bold'}]}>{item['subRegionCode']}</Text>
                </View>
                <View style={viewList}>
                  <Text style={listRowLeft}>eea: </Text>
                  <Text style={[listRowRight, {fontWeight: 'bold'}]}>{item['eea']}</Text>
                </View>
                <View style={viewList}>
                  <Text style={listRowLeft}>createdAt: </Text>
                  <Text style={[listRowRight, {fontWeight: 'bold'}]}>{item['createdAt']}</Text>
                </View>
                <View style={viewList}>
                  <Text style={listRowLeft}>updatedAt: </Text>
                  <Text style={[listRowRight, {fontWeight: 'bold'}]}>{item['updatedAt']}</Text>
                </View>
              </View>
            }
        />
    );
  }

  render() {
    if (this.props.loading) return <Spinner size="large"/>;

    if (this.props.error) {
      return <View style={ {flex: 1} }>
         <Text style={styles.textStyle}>{this.props.error}</Text>
      </View>;
    }

    return (
        this.props.retrieved && <View style={ {flex: 1} }>
          <ScrollView contentInset={ {top: -24} }
                      automaticallyAdjustContentInsets>
            <List>
              {this.props.retrieved['hydra:member'].map(
                  item => ListComponent.renderRow(item))}
            </List>
          </ScrollView>
          {pagination(this.props.retrieved['hydra:view'], this.props.list)}
        </View>
    );
  }
}

const mapStateToProps = state => {
  const {retrieved, error, loading, eventSource} = state.country.list;
  return {retrieved, error, loading, eventSource};
};

const mapDispatchToProps = dispatch => ({
  list: page => dispatch(list(page)),
  reset: eventSource => dispatch(reset(eventSource)),
});

const styles = {
  viewList: {
    flex: 1,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  listRowLeft: {
    flex: 1,
    borderBottomWidth: 1,
    padding: 5,
    justifyContent: 'flex-start',
    position: 'relative',
    color: 'gray',
    fontSize: 16,
  },
  listRowRight: {
    flex: 1,
    borderBottomWidth: 1,
    padding: 5,
    justifyContent: 'flex-start',
    position: 'relative',
    fontSize: 18,
  },
  textStyle: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
  },
};

ListComponent.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  retrieved: PropTypes.object,
  eventSource: PropTypes.object,
  list: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  refresh: PropTypes.number
};

export default connect(mapStateToProps, mapDispatchToProps)(ListComponent);
