import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { View } from 'react-native';
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button,
} from 'react-native-elements';


class Form extends Component {

  renderField(data) {
    const hasError = data.meta.touched && !!data.meta.error;
    data.input.value = data.input.value.toString();
    return (
      <View>
        <FormLabel labelStyle={ {color: 'gray', fontSize: 20} }>
            {data.input.name}
        </FormLabel>
        <FormInput containerStyle={ {flexDirection:'row'} }
                   inputStyle={ {color: 'black', flex:1} }
                   {...data.input}
                   step={data.step}
                   required={data.required}
                   placeholder={data.placeholder}
                   id={`foodorder_${data.input.name}`}
                   multiline={true}
                   keyboardType='numeric'
        />
        {hasError &&
          <FormValidationMessage>{data.meta.error}</FormValidationMessage> }
      </View>
    );
  }

  render() {
    const {handleSubmit, mySubmit} = this.props;

    return (
      <View style={ {backgroundColor: 'white', paddingBottom: 20} }>
        <Field component={this.renderField} name="amount" type="number"
          placeholder="" />
        <Field component={this.renderField} name="serviceTax" type="number"
          placeholder="" />
        <Field component={this.renderField} name="otherTax" type="number"
          placeholder="" />
        <Field component={this.renderField} name="deliveryCost" type="number"
          placeholder="" />
        <Field component={this.renderField} name="discount" type="number"
          placeholder="" />
        <Field component={this.renderField} name="total" type="number"
          placeholder="" />
        <Field component={this.renderField} name="orderType" type="text"
          placeholder="" />
        <Field component={this.renderField} name="orderStatuses" type="text"
          placeholder="" />
        <Field component={this.renderField} name="orderItems" type="text"
          placeholder="" />
        <Field component={this.renderField} name="user" type="text"
          placeholder="" />
        <Field component={this.renderField} name="review" type="text"
          placeholder="" />
        <Field component={this.renderField} name="address" type="text"
          placeholder="" />
        <Field component={this.renderField} name="restaurant" type="text"
          placeholder="" />
        <Field component={this.renderField} name="createdAt" type="dateTime"
          placeholder="" />
        <Field component={this.renderField} name="updatedAt" type="dateTime"
          placeholder="" />
        <Button buttonStyle={styles.button}
          title='SAVE'
          onPress={handleSubmit(mySubmit)}
        />
      </View>
    );
  }
}

const styles = {
  button: {
    flex: 1,
    backgroundColor: '#3faab4',
    borderRadius: 5,
    borderWidth: 0,
    borderColor: 'transparent',
    width: 300,
    height: 50,
    margin: 20,
  },
  placeholderStyle:{
    paddingRight:10
  }
};

export default reduxForm(
    {
      form: 'foodorder',
      enableReinitialize: true, keepDirtyOnReinitialize: true,
    })(
    Form);
