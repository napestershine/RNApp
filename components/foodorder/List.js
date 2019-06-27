import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ScrollView, View, Text } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import Spinner from '../Spinner';
import { list, reset } from '../../actions/foodorder/list';
import { success } from '../../actions/foodorder/delete';
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
    Actions.foodorderShow({id});
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
                  <Text style={listRowLeft}>amount: </Text>
                  <Text style={[listRowRight, {fontWeight: 'bold'}]}>{item['amount']}</Text>
                </View>
                <View style={viewList}>
                  <Text style={listRowLeft}>serviceTax: </Text>
                  <Text style={[listRowRight, {fontWeight: 'bold'}]}>{item['serviceTax']}</Text>
                </View>
                <View style={viewList}>
                  <Text style={listRowLeft}>otherTax: </Text>
                  <Text style={[listRowRight, {fontWeight: 'bold'}]}>{item['otherTax']}</Text>
                </View>
                <View style={viewList}>
                  <Text style={listRowLeft}>deliveryCost: </Text>
                  <Text style={[listRowRight, {fontWeight: 'bold'}]}>{item['deliveryCost']}</Text>
                </View>
                <View style={viewList}>
                  <Text style={listRowLeft}>discount: </Text>
                  <Text style={[listRowRight, {fontWeight: 'bold'}]}>{item['discount']}</Text>
                </View>
                <View style={viewList}>
                  <Text style={listRowLeft}>total: </Text>
                  <Text style={[listRowRight, {fontWeight: 'bold'}]}>{item['total']}</Text>
                </View>
                <View style={viewList}>
                  <Text style={listRowLeft}>orderType: </Text>
                  <Text style={[listRowRight, {fontWeight: 'bold'}]}>{item['orderType']}</Text>
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
  const {retrieved, error, loading, eventSource} = state.foodorder.list;
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
