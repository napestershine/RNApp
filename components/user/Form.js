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
                   id={`user_${data.input.name}`}
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
        <Field component={this.renderField} name="firstName" type="text"
          placeholder="" />
        <Field component={this.renderField} name="middleName" type="text"
          placeholder="" />
        <Field component={this.renderField} name="lastName" type="text"
          placeholder="" />
        <Field component={this.renderField} name="phone" type="text"
          placeholder="" />
        <Field component={this.renderField} name="avatar" type="text"
          placeholder="" />
        <Field component={this.renderField} name="email" type="text"
          placeholder="" />
        <Field component={this.renderField} name="username" type="text"
          placeholder="" />
        <Field component={this.renderField} name="roles" type="text"
          placeholder="" />
        <Field component={this.renderField} name="sex" type="text"
          placeholder="" />
        <Field component={this.renderField} name="lastIP" type="text"
          placeholder="" />
        <Field component={this.renderField} name="isActive" type="checkbox"
          placeholder="" />
        <Field component={this.renderField} name="isBlocked" type="checkbox"
          placeholder="" />
        <Field component={this.renderField} name="blockedBy" type="text"
          placeholder="" />
        <Field component={this.renderField} name="activatedBy" type="text"
          placeholder="" />
        <Field component={this.renderField} name="dateOfBirth" type="dateTime"
          placeholder="" />
        <Field component={this.renderField} name="remark" type="text"
          placeholder="" />
        <Field component={this.renderField} name="password" type="text"
          placeholder="The hashed password" />
        <Field component={this.renderField} name="languages" type="text"
          placeholder="" />
        <Field component={this.renderField} name="currency" type="text"
          placeholder="" />
        <Field component={this.renderField} name="addresses" type="text"
          placeholder="" />
        <Field component={this.renderField} name="tempRestaurants" type="text"
          placeholder="" />
        <Field component={this.renderField} name="reviews" type="text"
          placeholder="" />
        <Field component={this.renderField} name="foodOrders" type="text"
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
      form: 'user',
      enableReinitialize: true, keepDirtyOnReinitialize: true,
    })(
    Form);
