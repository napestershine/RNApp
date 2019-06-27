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
                   id={`restaurant_${data.input.name}`}
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
        <Field component={this.renderField} name="title" type="text"
          placeholder="" />
        <Field component={this.renderField} name="minimumOrderValue" type="number"
          placeholder="" />
        <Field component={this.renderField} name="deliveryTime" type="number"
          placeholder="" />
        <Field component={this.renderField} name="logo" type="text"
          placeholder="A image url of 95x95 size" />
        <Field component={this.renderField} name="logoImage" type="text"
          placeholder="" />
        <Field component={this.renderField} name="status" type="text"
          placeholder="status of restaurant: Active, InActive, blocked" />
        <Field component={this.renderField} name="backgroundImage" type="text"
          placeholder="restaurant profile background image: 1670x480" />
        <Field component={this.renderField} name="backgroundImageFile" type="text"
          placeholder="" />
        <Field component={this.renderField} name="profileLogoFile" type="text"
          placeholder="" />
        <Field component={this.renderField} name="profileLogo" type="text"
          placeholder="240X140" />
        <Field component={this.renderField} name="haveDelivery" type="checkbox"
          placeholder="" />
        <Field component={this.renderField} name="haveTakeAway" type="checkbox"
          placeholder="" />
        <Field component={this.renderField} name="haveFreeFood" type="checkbox"
          placeholder="" />
        <Field component={this.renderField} name="slug" type="text"
          placeholder="" />
        <Field component={this.renderField} name="email" type="email"
          placeholder="" />
        <Field component={this.renderField} name="phone" type="text"
          placeholder="" />
        <Field component={this.renderField} name="website" type="url"
          placeholder="" />
        <Field component={this.renderField} name="about" type="text"
          placeholder="" />
        <Field component={this.renderField} name="tags" type="text"
          placeholder="" />
        <Field component={this.renderField} name="cuisines" type="text"
          placeholder="" />
        <Field component={this.renderField} name="foodCategories" type="text"
          placeholder="" />
        <Field component={this.renderField} name="isFeatured" type="checkbox"
          placeholder="" />
        <Field component={this.renderField} name="languages" type="text"
          placeholder="" />
        <Field component={this.renderField} name="restaurantWorkSchedules" type="text"
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
      form: 'restaurant',
      enableReinitialize: true, keepDirtyOnReinitialize: true,
    })(
    Form);
